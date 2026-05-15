const {
  Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle
} = require('docx');
const fs = require('fs');

const doc = new Document({
  styles: {
    default: {
      document: { run: { font: "Arial", size: 22 } }
    }
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1260, right: 1260, bottom: 1260, left: 1260 }
      }
    },
    children: [
      new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 0 },
        children: [new TextRun({ text: "Jaison Felix Menezes", bold: true, size: 30, font: "Arial" })]
      }),
      new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 40 },
        children: [new TextRun({ text: "Austin, TX  |  562-837-6867  |  jaisonfelix.menezes01@student.csulb.edu", size: 18, color: "555555" })]
      }),
      new Paragraph({
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "999999", space: 1 } },
        spacing: { after: 200 },
        children: []
      }),

      new Paragraph({
        spacing: { after: 160 },
        children: [new TextRun({ text: "May 14, 2026", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 160 },
        children: [new TextRun({ text: "Dear Apple Hardware Engineering Operations Hiring Team,", size: 22 })]
      }),

      new Paragraph({
        spacing: { after: 160 },
        alignment: AlignmentType.JUSTIFIED,
        children: [new TextRun({
          size: 22,
          text: "I am writing to apply for the Software Engineer role on the Hardware Tools and Solutions Internal Applications team in Austin. Building internal web applications, MCP services, and APIs that connect data pipelines, simulation environments, and machine learning services for engineering teams is exactly the kind of high leverage, full stack platform engineering I find most compelling. The opportunity to contribute to the tools that power Apple Hardware Engineering, enabling teams to move faster and more collaboratively, is one I would pursue with genuine enthusiasm."
        })]
      }),

      new Paragraph({
        spacing: { after: 160 },
        alignment: AlignmentType.JUSTIFIED,
        children: [new TextRun({
          size: 22,
          text: "MCP (Model Context Protocol) architecture and AI tool integration is a preferred qualification I can speak to directly from production work. At Ancestry, I built a production automated compliance auditing tool using the GitHub MCP server and an LLM client, integrating MCP as a structured data access layer that enables AI agents to interact with GitHub's API surface systematically across 100 plus repositories concurrently, reducing compliance review time by 60 percent. I am also building LangGraph based agents with LangFuse for tracing and LiteLLM for multi provider routing at Ancestry, and I understand both the architectural patterns and the operational requirements for MCP powered AI tool integrations in production environments. The role's call out of MCP experience as highly valuable is a match I can deliver from day one."
        })]
      }),

      new Paragraph({
        spacing: { after: 160 },
        alignment: AlignmentType.JUSTIFIED,
        children: [new TextRun({
          size: 22,
          text: "Java and Spring based multi tier web application development are central to my production backend engineering. At CloudFronts, I developed Java Spring Boot microservices on Azure App Service exposing REST and GraphQL APIs via Azure API Management for Fortune ranked enterprise clients, implementing asynchronous programming patterns that increased service throughput by 25 percent under peak load. I automated CI/CD pipelines with staged deployment slots for zero downtime releases, integrated security scanning as mandatory gates, and served as Designated Responsible Individual leading ten engineers through on call rotations. At ICICI Lombard, I designed a gRPC based policy recommendation API with consistent hashing for tenant routing serving 130,000 plus mobile users. I am comfortable leading technical design discussions and setting direction within project areas."
        })]
      }),

      new Paragraph({
        spacing: { after: 160 },
        alignment: AlignmentType.JUSTIFIED,
        children: [new TextRun({
          size: 22,
          text: "Full stack development spanning React frontends and Java or Python backends is how I build internal tools. At CSULB, I built a full stack analytics platform from scratch with a React frontend featuring client side routing and dynamic visualization, and a Node.js/Express backend exposing REST and GraphQL APIs with an LLM powered natural language query engine for institutional stakeholders. At Amazon, I built an AI ops assistant with dynamic chart rendering that reduced time to insight by 65 percent for area managers. I approach internal tool frontends with the same engineering rigor I apply to backend systems — usability and reliability are both first class concerns."
        })]
      }),

      new Paragraph({
        spacing: { after: 160 },
        alignment: AlignmentType.JUSTIFIED,
        children: [new TextRun({
          size: 22,
          text: "On databases, Linux, and deployment infrastructure, I work daily in Linux environments for scripting, debugging, and infrastructure management. I have worked with PostgreSQL, MongoDB, Redis, and Cosmos DB in production, and operated containerized workloads on AWS EKS and Azure AKS using Docker, Kubernetes, and Helm. I provision infrastructure with Terraform and manage CI/CD pipelines with Argo, Harness, and GitHub Actions. I hold Microsoft Azure Developer Associate, Azure Data Engineer Associate, and AWS Cloud Foundation certifications."
        })]
      }),

      new Paragraph({
        spacing: { after: 160 },
        alignment: AlignmentType.JUSTIFIED,
        children: [new TextRun({
          size: 22,
          text: "The tools that Apple Hardware Engineering depends on directly shape the speed and quality of every Apple product. I would be proud to help build and evolve that tooling infrastructure, and to bring my MCP, full stack, and AI integration experience to the Hardware Tools and Solutions team."
        })]
      }),

      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "Thank you for your time and consideration. I look forward to discussing further.", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({ text: "Sincerely,", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 0 },
        children: [new TextRun({ text: "Jaison Felix Menezes", bold: true, size: 22 })]
      }),
    ]
  }]
});

Packer.toBuffer(doc).then(buf => {
  const path = 'C:\\Users\\jaiso\\Downloads\\coverletter\\Jaison_CoverLetter_Apple_HWEngOps_Austin.docx';
  fs.writeFileSync(path, buf);
  console.log("Done");
});