const groq = require("../config/groqClient");

async function analyzeResume(resumeText, jobDescription) {
  const prompt = `
You are an ATS resume analyzer.

TASK:
You must STRICTLY compare skills between the resume and the job description.

STEP 1:
Extract technical skills explicitly mentioned in the RESUME.

STEP 2:
Extract required technical skills explicitly mentioned in the JOB DESCRIPTION.

STEP 3:
Compare them using STRICT matching.

RULES:
- matching_skills = ONLY skills found in BOTH resume and job description
- missing_skills = ONLY skills found in job description BUT NOT found in resume
- NEVER add resume-only skills into missing_skills
- NEVER invent skills
- NEVER assume related technologies
- If "React" exists, do NOT assume "Redux"
- If "Node.js" exists, do NOT assume "Express"
- Use exact comparison as much as possible
- Ignore soft skills
- Focus only on technical/job-related skills

SCORING:
score = (matched skills / total required job skills) * 100

FEEDBACK RULES:
- Give 3 to 5 short suggestions
- Suggestions should focus ONLY on missing skills
- If no missing skills exist, suggest resume improvements

IMPORTANT:
Return ONLY valid raw JSON.
Do NOT return markdown.
Do NOT add explanation text.

FORMAT:
{
  "matching_skills": [],
  "missing_skills": [],
  "score": 0,
  "feedback": []
}

RESUME:
${resumeText}

JOB DESCRIPTION:
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
