const { extractText } = require("../services/pdfService");
const { analyzeResume } = require("../services/aiService");

async function uploadResume(req, res) {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }

    const jobDescription = req.body.jobDescription || "";

    // 1. Extract text
    const resumeText = await extractText(req.file.buffer);

    // 2. AI analysis
    const aiRaw = await analyzeResume(resumeText, jobDescription);

    let aiResult;
    try {
      aiResult = JSON.parse(aiRaw);
      console.log(aiResult)
    } catch (err) {
      console.error("AI parsing error:", aiRaw);
      return res.status(500).send("AI response parsing failed");
    }

    // 3. Send response
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