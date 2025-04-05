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
        index="/01"
        header="AI-Powered Chatbots & Virtual Assistants"
        text={`We build intelligent chatbots that enhance customer engagement and streamline business operations. Our AI-powered assistants understand natural language, provide instant responses, and continuously improve through user interactions.

Use Cases:

✅ Customer Support Automation – Provide 24/7 assistance, reduce response times, and improve user satisfaction.
✅ E-commerce Chatbots – Recommend products, answer FAQs, and assist with purchases.
✅ Lead Qualification & Sales Automation – Engage prospects, gather information, and guide them through the sales funnel.
✅ HR & IT Support Bots – Automate employee queries and simplify internal operations.


💡 Benefits: Reduced workload, faster response times, improved customer experience, and increased efficiency.`}
      />

      <Service
        index="/02"
        header="AI-Driven Content Creation & Automation"
        text={`We leverage AI to create high-quality, personalized, and SEO-optimized content at scale—saving time and boosting marketing performance.

Use Cases:

✅ Social Media Content – Automate post creation, optimize engagement, and generate personalized descriptions.
✅ Email Marketing – Craft personalized newsletters and automated updates for targeted audiences.
✅ E-commerce Product Descriptions – Generate unique product listings with SEO enhancements.
✅ Blog & News Automation – Rewrite and optimize articles for better reach and search engine rankings.
✅ Corporate & B2B Content – Automate LinkedIn posts, presentations, and sales materials.

💡 Benefits: Faster content production, improved engagement, SEO optimization, and personalized marketing.`}
      />

      <Service
        index="/03"
        header="AI-Powered Knowledge Management"
        text={`Our AI solutions transform the way businesses store, access, and manage information—making knowledge easily searchable and actionable.

Use Cases:

✅ Smart Search & Recommendations – Quickly retrieve relevant information from documents and databases.
✅ Automated Reports & Data Extraction – Convert raw data into structured insights and reports.
✅ Intelligent Document Processing – Analyze and categorize contracts, invoices, and other business documents.
✅ Internal Chatbots for Employees – Provide instant access to company policies, IT support, and HR services.

💡 Benefits: Improved efficiency, reduced manual work, and enhanced decision-making with AI-powered insights.`}
      />

      <Service
        index="/04"
        header="Ad-hoc & Business Process Automation"
        text={`We automate complex and non-standard business tasks using AI and NLP, reducing manual work and boosting efficiency.

Use Cases:

✅ Text-to-SQL Automation – Instantly convert natural language queries into SQL for quick database insights.
✅ Automated Report Generation – Extract, structure, and present real-time data in customizable formats.
✅ Smart Form Filling – Automatically populate forms by analyzing CRM data, documents, or emails.
✅ Document Processing – Extract, classify, and process information from contracts, invoices, and requisitions.
✅ Client Request Management – Prioritize and route incoming requests, reducing response time and improving service.
✅ Internal Communication Automation – Chatbots that assist with IT, HR, and internal documentation queries.

💡 Benefits: Faster processing, reduced errors, minimized workload, and smarter decision-making.`}
      />

      <Service
        index="/05"
        header="AI-Powered Lead Generation"
        text={`Boost your sales pipeline with AI-driven lead discovery, qualification, and engagement strategies.

Use Cases:

✅ Automated Lead Analysis – Use web scraping and AI to identify potential customers and key industry trends.
✅ Smart Application Processing – Automatically extract and classify lead data from incoming inquiries.
✅ Conversational AI for Engagement – Chatbots that engage leads, answer queries, and schedule demos.
✅ Cold Email Campaign Automation – Generate and optimize personalized emails for higher open and conversion rates.
✅ Competitor & Market Monitoring – Track industry changes, competitor mentions, and customer sentiment in real-time.

💡 Benefits: Faster lead qualification, increased conversions, improved engagement, and actionable insights.`}
      />

      <Service
        index="/06"
        header="AI-Agent Automation"
        text={`We deploy Multi-Agent Systems (MAS) where specialized AI agents automate tasks, adapt to data, and scale processes seamlessly.

Use Cases:

✅ Data Agent – Extracts and processes data from CRM, ERP, and databases for instant insights.
✅ Query Agent – Transforms natural language into SQL queries for automated reporting.
✅ Report Agent – Generates and visualizes reports, integrating with BI tools for data-driven decisions.
✅ Routing Agent – Automatically classifies and routes requests based on priority and context.
✅ Documentation Agent – Manages document recognition, classification, and updates knowledge bases.
✅ Support Agent – Automates FAQ responses, reducing workload and enhancing customer experience.
✅ Integration Agent – Links systems via API, ensuring seamless automation across platforms.
✅ Decision Agent – Analyzes data, suggests optimal strategies, and assesses risks for smarter decision-making.

💡 Benefits: Streamlined operations, reduced manual effort, faster decision cycles, and enhanced flexibility.`}
      />
    </div>
  );
};
