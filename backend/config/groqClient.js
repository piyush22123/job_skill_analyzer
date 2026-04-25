const Groq = require("groq-sdk");

// Create Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

module.exports = groq;