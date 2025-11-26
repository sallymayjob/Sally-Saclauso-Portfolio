import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Alex Devson",
  title: "Google Workspace Automation Specialist | AI Workflow Engineer",
  about: "Automation Specialist with strong expertise in Google Workspace automation, Apps Script development, and AI-powered workflow engineering using Gemini 3.0. I build intelligent systems that streamline operations, reduce manual tasks, and integrate data across Gmail, Sheets, Drive, Calendar, and third-party APIs. Passionate about designing end-to-end AI workflows for businesses using Google Cloud, Workspace APIs, and modern frontend tools.",
  email: "alex.automation@example.com",
  location: "Remote / San Francisco",
  socials: [
    { platform: "GitHub", url: "https://github.com", iconName: "github" },
    { platform: "LinkedIn", url: "https://linkedin.com", iconName: "linkedin" },
    { platform: "Twitter", url: "https://twitter.com", iconName: "twitter" }
  ],
  skills: [
    { name: "Google Apps Script", level: 98, category: "Backend" },
    { name: "Gemini API / Vertex AI", level: 95, category: "AI" },
    { name: "n8n / Zapier", level: 90, category: "Tools" },
    { name: "TypeScript / Node.js", level: 85, category: "Backend" },
    { name: "React / Next.js", level: 75, category: "Frontend" },
    { name: "Google Cloud Platform", level: 80, category: "Tools" },
    { name: "SQL / BigQuery", level: 80, category: "Backend" },
    { name: "LangChain", level: 85, category: "AI" },
    { name: "Drive/Gmail APIs", level: 92, category: "Backend" }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Senior AI Automation Engineer",
      company: "FutureWorks Automation",
      period: "2022 - Present",
      description: [
        "Architected enterprise-grade workflow automations using n8n and Google Apps Script, saving 200+ man-hours monthly.",
        "Integrated Gemini 3.0 into internal dashboards for automated document processing and sentiment analysis.",
        "Built a custom RAG pipeline connecting Google Drive files to a conversational AI interface for HR queries."
      ]
    },
    {
      id: "exp-2",
      role: "Workspace Solutions Developer",
      company: "CloudSync Partners",
      period: "2019 - 2022",
      description: [
        "Developed custom Google Workspace Add-ons for Gmail and Sheets used by over 5,000 active users.",
        "Automated financial reporting pipelines connecting Stripe API to Google Sheets and Data Studio (Looker).",
        "Created a meeting preparation bot that scrapes Calendar events and compiles attendee briefs."
      ]
    },
    {
      id: "exp-3",
      role: "Operations Analyst & Scripter",
      company: "LogiTech Solutions",
      period: "2017 - 2019",
      description: [
        "Optimized internal inventory tracking using Google AppSheet and custom scripts.",
        "Reduced data entry errors by 60% through automated form validation and cross-system syncing.",
        "Maintained legacy VBA macros and migrated critical workflows to cloud-based Python scripts."
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Smart Inbox Operations Agent",
      description: "An AI-powered system that triages incoming emails in Gmail, drafts context-aware replies using Gemini Pro, and creates tasks in Asana/Jira based on email content.",
      techStack: ["Google Apps Script", "Gemini API", "Gmail API", "Node.js"],
      imageUrl: "https://picsum.photos/seed/inbox/600/400",
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      id: "proj-2",
      title: "Veo Creative Suite",
      description: "A dashboard for marketing teams to generate social media video assets. Integrates Gemini for scriptwriting and Veo 3.1 for high-quality video generation from text prompts.",
      techStack: ["Next.js", "Veo Model", "Vertex AI", "Firebase"],
      imageUrl: "https://picsum.photos/seed/veo/600/400",
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      id: "proj-3",
      title: "Automated RFP Responder",
      description: "A document automation tool that reads Request for Proposal (RFP) PDFs from Drive, searches a knowledge base of past proposals, and generates a draft response in Google Docs.",
      techStack: ["LangChain", "Google Drive API", "Pinecone", "Google Docs API"],
      imageUrl: "https://picsum.photos/seed/rfp/600/400",
      demoUrl: "#",
      repoUrl: "#"
    }
  ]
};