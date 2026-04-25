const pdfParse = require("pdf-parse");

async function extractText(fileBuffer) {
  const data = await pdfParse(fileBuffer);
  return data.text;
}

module.exports = { extractText };