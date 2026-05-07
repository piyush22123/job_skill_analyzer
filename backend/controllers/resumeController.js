const { extractText } = require("../services/pdfService");
const { analyzeResume } = require("../services/aiService");

async function uploadResume(req, res) {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }

    const jobDescription = req.body.jobDescription || "";

    // Extract text
    const resumeText = await extractText(req.file.buffer);

    // AI analysis
    const aiRaw = await analyzeResume(resumeText, jobDescription);

    let aiResult;

    try {
      const cleaned = aiRaw
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      aiResult = JSON.parse(cleaned);

      console.log("Parsed AI Result:", aiResult);
    } catch (err) {
      console.error(" AI parsing error:", err);
      console.error(" Raw AI response:", aiRaw);

      return res.status(500).json({
        message: "AI response parsing failed",
        raw: aiRaw,
      });
    }

    // Send response
    res.json({
      resumeText,
      jobDescription,
      skillMatch: {
        matching: aiResult.matching_skills || [],
        missing: aiResult.missing_skills || [],
      },
      score: aiResult.score || 0,
      feedback: aiResult.feedback || [],
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
}

module.exports = { uploadResume };
