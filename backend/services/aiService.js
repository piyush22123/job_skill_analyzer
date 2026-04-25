const groq = require("../config/groqClient");

async function analyzeResume(resumeText, jobDescription) {
  const prompt = `
You are an ATS system.

Return ONLY JSON:
{
  "matching_skills": [],
  "missing_skills": [],
  "score": number,
  "feedback": []
}

Resume:
${resumeText}

Job Description:
${jobDescription}
`;

  const response = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.2,
  });

  return response.choices[0].message.content;
}

module.exports = { analyzeResume };