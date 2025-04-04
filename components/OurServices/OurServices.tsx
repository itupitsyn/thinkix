import { FC } from "react";
import { Service } from "./components";
import { Slash } from "@/assets";
import Image from "next/image";

export const OurServices: FC = () => {
  return (
    <div className="flex flex-col gap-8 pt-16">
      <div className="flex min-h-[355px] items-center justify-between">
        <h2 className="font-integralcf-demibold text-[90px] uppercase leading-none">
          <Slash className="inline-block" />
          Our services
        </h2>

        <Image src="/img/element.png" width={335} height={452} alt="" />
      </div>

      <Service
        header="Chat-bots and virtual assistants"
        text={`We use NLP to create smart chatbots and assistants that understand natural language, adapt to context and solve business problems.

How does NLP pipelines for chatbots work?
— Query processing → Chatbot understands text, identifies key entities and intent.  
— Information Retrieval → The system retrieves data from a knowledge base, documents, or CRM.  
— Response Generation → Generates a meaningful, personalized response with the possibility of clarifying questions.  
— Feedback and Learning → The bot analyzes interactions and improves with each new request.`}
      />

      <Service
        header="Content Creation & Automation"
        text={`We use NLP and generative models to create dynamic, personalized and SEO-optimized content, reducing time on routine tasks and increasing marketing effectiveness. 

How does NLP pipelines work for content automation?  
— Data Analysis and Collection → The system analyzes trends, customer queries, CRM data.  
— Content generation → NLP model creates relevant texts with customization for target audience.  
— SEO-optimization and stylistic processing → Keywords are added, tone and structure of the text are checked.  
— Personalization and A/B testing → Content is adjusted to audience segments, effectiveness testing is performed.  
— Automatic publishing and updating → Integration with social networks, email platforms and CRM for dynamic content adaptation.`}
      />

      <Service
        header="Knowledge Management"
        text={`We use NLP and generative models to create dynamic, personalized and SEO-optimized content, reducing time on routine tasks and increasing marketing effectiveness.  

How does NLP pipelines work for knowledge management?  
— Document Analysis → NLP extracts key data from texts, structuring them into topics.  
— Search & Recommendation → Chatbot answers questions by suggesting relevant articles and documents.  
— Automatic Updates → The system updates the knowledge base by analyzing new content and changes.  
— Personalization → AI adapts answers to the user's context and previous queries.  
— Feedback and self-learning → Optimizes responses based on user ratings and interaction histories.`}
      />

      <Service
        header="Ad-hoc and business processes automatization"
        text={`We use NLP to automate complex and non-standard business tasks, minimizing manual labor and increasing employee speed.  

How does NLP pipelining work for ad-hoc automation?  
— Natural Language Processing → AI understands the query and determines its structure.  
— Data retrieval → Access CRM, ERP, knowledge bases and back-end systems.  
— Generating a response or action → Automatically generates a SQL query, report, completed form, etc.  
— Process Optimization → AI analyzes frequent queries and offers automation of routine tasks.  
— Self-learning and improvement → The system adapts based on user interactions.`}
      />

      <Service
        header="AI-Powered Lead Generation"
        text={`We use a Multi-Agent System (MAS) to automate and optimize lead generation, providing flexible, autonomous, and scalable automation. Each agent performs a specific task.

How does our agent-based Lead Generation Pipeline work?
— Lead Discovery: The Discovery Agent identifies potential leads using NLP.
— Data Retrieval: The Information Agent retrieves lead information from internal sources.
— Outreach & Analysis: The Outreach Agent generates personalized emails and analyzes market trends.
— Engagement: The Engagement Agent (chatbot) communicates with leads.
— Optimization: The Learning Agent analyzes performance and adjusts strategies.`}
      />

      <Service
        header="AI-Agent Automation"
        text={`We use Multi-Agent Systems (MAS) where each agent performs a different task, providing flexible, autonomous and scalable automation.  

How does an agent-based Pipeline work?  
— Task discovery → The agent analyzes the incoming request and classifies it.  
— Knowledge base query / CRM / ERP → The data agent retrieves the desired information.  
— Information Processing → The analysis agent structures the data, triggers the desired process.  
— Generating a response or solution → Reporting agent, chatbot or router communicates the result.  
— Self-learning and optimization → The agent adjusts its strategy based on historical data.`}
      />
    </div>
  );
};
