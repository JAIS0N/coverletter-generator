Markdown
# Cover Letter Generator README

## 🚀 How to Run on Local

### 1. Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed on your computer (this will automatically install `npm` as well).

### 2. Set Up the Environment
Open your terminal, navigate to the directory where you want to keep your cover letter scripts, and run the following commands to initialize a project and install the required library:

npm init -y
npm install docx
3. Save and Configure the Script
Create a new JavaScript file (e.g., generateLetter.js).

Paste the generated Node.js script into this file.

Crucial Step: Scroll to the bottom of the script and ensure the path variable is pointing to a valid directory on your machine. To save it in the same folder as the script, use a relative path:

JavaScript
const path = './Jaison_CoverLetter_TargetCompany.docx';


### 4. Execute the Script
Run the script using Node.js:

node generateLetter.js
The terminal will process the file, and your newly formatted .docx cover letter will appear in your folder, ready to submit!

🤖 Master Prompt for the AI Model
To generate a new, highly tailored script for a specific job application, copy the entire prompt below and paste it into ChatGPT, Gemini, or Claude. Paste the specific Job Description at the very bottom before sending.

Copy everything below this line:

Act as an expert technical career coach and Node.js developer. I am going to provide you with a Job Description (JD) at the bottom of this prompt.

Your task is to:

Write a highly tailored, professional cover letter for the provided JD, aligning my specific background with the role's requirements.

Output the final result EXCLUSIVELY as a complete, ready-to-run Node.js script using the docx library. Do not include any explanations, introductory text, or markdown outside the code block.

Here is my background context to use for the cover letter content:

Name: Jaison Felix Menezes

Contact: Austin, TX | 562-837-6867 | jaisonfelix.menezes01@student.csulb.edu

Current Role 1: Software Engineer Observability Co-op at Ancestry (focusing on OpenTelemetry, LangGraph, LiteLLM, and GitHub MCP server integration).

Current Role 2: MS in Information Systems student at CSULB (Expected May 2026), working as a Software Dev Assistant.

Past Experience: BI Engineering Intern at Amazon (analyzed supply chain pilot using before-and-after methodology on the same route; built AI ops assistant using Bedrock to translate user intent for QuickSight Q).

Other Past Experience: Java Spring Boot microservices at CloudFronts (Azure), gRPC APIs at ICICI Lombard.

Key AI/ML Projects: Built RAG assistants utilizing recursive chunking and FAISS for vector search; built "WikiFace" during the Meta Llama Hackathon.

Certifications: Azure Developer Associate, Azure Data Engineer Associate, AWS Cloud Foundation.

Skills: React, Node.js, Java, Python, PostgreSQL, MongoDB, Docker, Kubernetes, Terraform, CI/CD.

Use the exact script structure below. Maintain all layout, margin, font (Arial), sizing, and border logic. ONLY replace the [Date], [Greeting], [Paragraph X], and the output filename variables with the tailored content.

// START FORMAT TEMPLATE
const { Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle } = require('docx');
const fs = require('fs');

const doc = new Document({
styles: { default: { document: { run: { font: "Arial", size: 22 } } } },
sections: [{
properties: {
page: { size: { width: 12240, height: 15840 }, margin: { top: 1260, right: 1260, bottom: 1260, left: 1260 } }
},
children: [
new Paragraph({ alignment: AlignmentType.LEFT, spacing: { after: 0 }, children: [new TextRun({ text: "Jaison Felix Menezes", bold: true, size: 30, font: "Arial" })] }),
new Paragraph({ alignment: AlignmentType.LEFT, spacing: { after: 40 }, children: [new TextRun({ text: "Austin, TX  |  562-837-6867  |  jaisonfelix.menezes01@student.csulb.edu", size: 18, color: "555555" })] }),
new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "999999", space: 1 } }, spacing: { after: 200 }, children: [] }),
new Paragraph({ spacing: { after: 160 }, children: [new TextRun({ text: "[Current Date]", size: 22 })] }),
new Paragraph({ spacing: { after: 160 }, children: [new TextRun({ text: "Dear [Company/Team Hiring Manager],", size: 22 })] }),
new Paragraph({ spacing: { after: 160 }, alignment: AlignmentType.JUSTIFIED, children: [new TextRun({ size: 22, text: "[Tailored Paragraph 1: Introduction and excitement for the role based on the JD]" })] }),
new Paragraph({ spacing: { after: 160 }, alignment: AlignmentType.JUSTIFIED, children: [new TextRun({ size: 22, text: "[Tailored Paragraph 2: Highlighting specific backend/AI/MCP/Cloud experience relevant to JD]" })] }),
new Paragraph({ spacing: { after: 160 }, alignment: AlignmentType.JUSTIFIED, children: [new TextRun({ size: 22, text: "[Tailored Paragraph 3: Highlighting full-stack, internal tools, or optimization impact relevant to JD]" })] }),
new Paragraph({ spacing: { after: 160 }, alignment: AlignmentType.JUSTIFIED, children: [new TextRun({ size: 22, text: "[Tailored Paragraph 4: Infrastructure/DevOps/Database skills bridging to their tech stack]" })] }),
new Paragraph({ spacing: { after: 160 }, alignment: AlignmentType.JUSTIFIED, children: [new TextRun({ size: 22, text: "[Tailored Paragraph 5: Closing statement reiterating value add to their specific mission]" })] }),
new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Thank you for your time and consideration. I look forward to discussing further.", size: 22 })] }),
new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: "Sincerely,", size: 22 })] }),
new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: "Jaison Felix Menezes", bold: true, size: 22 })] }),
]
}]
});

Packer.toBuffer(doc).then(buf => {
const path = './Jaison_CoverLetter_[Company]_[Role].docx';
fs.writeFileSync(path, buf);
});
// END FORMAT TEMPLATE

Here is the Job Description:
[PASTE JD HERE]

####
