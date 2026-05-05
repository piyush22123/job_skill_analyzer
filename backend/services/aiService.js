const groq = require("../config/groqClient");

async function analyzeResume(resumeText, jobDescription) {
  const prompt = `
You are an ATS (Applicant Tracking System).

Instructions:
1. Extract skills from the resumeText.
2. Extract required skills from the jobDescription.

Now compare:

- matching_skills = skills present in BOTH resumeText and jobDescription
- missing_skills = skills present in jobDescription BUT NOT in resumeText

Important rules:
- Do NOT invent skills
- Do NOT include skills that are only in resumeText inside missing_skills
- Only compare based on job requirements

Also:
- score = percentage (0–100) based on how many jobDescription skills are matched
- feedback = 3–5 short improvement suggestions. If no missing skills then give resume improvement suggestion.

Return ONLY valid JSON (no markdown, no explanation):
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
