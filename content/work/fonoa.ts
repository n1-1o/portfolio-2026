import type { SubProject, ContentSection, Feature } from '../projects'

export const fonoaOverview = {
  company: 'Fonoa',
  role: 'Senior Product Designer, Design Team Lead',
  duration: 'March 2021 - February 2025',
  team: [
    'Francois Bacourt (PO)',
    'Antonio Kristicevic (EM)',
    'Sara Tan (Full Stack)',
    'Rui Magalhaes (BE)',
    'Valentin Mezev (BE)',
    'Flavio Silva (Full Stack)',
    'Kelly Muniz',
    'Trent Targa',
    'Enis Gencer (TaxTech)',
    'Nemanja (Designer)',
  ],
}

export const fonoaSubProjects: SubProject[] = [
  {
    slug: 'e-invoicing',
    title: 'E-Invoicing',
    overview: 'Comprehensive e-invoicing compliance solution for global businesses. Built a product that simplifies Tax Managers\' workflows to report, track, and troubleshoot transaction data to stay compliant while gaining strategic insights. Today processes over 24 million transactions monthly, with a value of €26 million for clients.',
    heroImage: '/project-placeholder-1.svg',
    images: [
      {
        section: 'Fonoa Required Data',
        src: '/project-placeholder-2.svg',
        alt: 'Fonoa Required Data - Centralised data hub interface',
        caption: 'A centralised data hub that helps users find information in vast datasets',
      },
      {
        section: 'Compliance Centre',
        src: '/project-placeholder-3.svg',
        alt: 'Compliance Centre - Real-time regulatory updates',
        caption: 'Real-time compliance radar tracking regulatory changes',
      },
      {
        section: 'Unified Transaction Records',
        src: '/project-placeholder-4.svg',
        alt: 'Unified Transaction Records with statuses and errors',
        caption: 'Unified transaction records for deep-dive troubleshooting',
      },
      {
        section: 'Compliance Analytics Dashboard',
        src: '/project-placeholder-5.svg',
        alt: 'Compliance Analytics Dashboard with insights',
        caption: 'Strategic insights for Tax Managers',
      },
      {
        section: 'Error Management System',
        src: '/project-placeholder-6.svg',
        alt: 'Error Management System interface',
        caption: 'Clear, actionable error messages and analytics',
      },
    ],
    role: 'Senior Product Designer, Design Team Lead',
    team: [
      'Francois Bacourt (PO)',
      'Antonio Kristicevic (EM)',
      'Sara Tan (Full Stack)',
      'Rui Magalhaes (BE)',
      'Valentin Mezev (BE)',
      'Flavio Silva (Full Stack)',
      'Kelly Muniz',
      'Trent Targa',
      'Enis Gencer (TaxTech)',
      'Nemanja (Designer)',
    ],
    duration: 'March 2021 - February 2025',
    achievements: [
      'Established the product front-end architecture',
      'Designed 30+ features and functionalities end-to-end',
      'Evangelised a user-centric approach in product development',
      'Streamlined client workflows to enhance efficiency and minimise errors',
      'Shifted user behaviour from manual tactical tasks to automated strategic processes',
    ],
    metrics: [
      {
        label: 'ARR Increase',
        value: '941.67%',
        description: 'July 2022 - August 2024',
      },
      {
        label: 'Client FTE Saved',
        value: '€42,500',
        description: 'Per annum from manual integration',
      },
      {
        label: 'Error Rate Reduction',
        value: '8.5%',
        description: 'One month after release',
      },
    ],
    sections: [
      {
        title: 'Challenges',
        content: 'Resource limitations, evolving regulations, data quality, and error management are the key challenges to compliance.',
        subsections: [
          {
            title: 'Resource Constraints',
            content: 'Tax departments often lack engineering support to query and gather data, implement integration with Tax authorities, and automatically handle errors. This leads to dependency on external consultants or vendors, increasing costs and reducing agility.',
          },
          {
            title: 'Complex and Constantly Changing Regulations',
            content: 'Varied formats, requirements, and technical specifications across multiple jurisdictions. Updates require documentation in local languages, translation, and legal consultation, adding operational costs.',
          },
          {
            title: 'Data Quality Issues',
            content: 'Synchronisation challenges due to scattered, inconsistent, inaccurate, or incomplete data across large volumes. Complex mapping between internal fields and tax authority schemas, plus incompatible technologies.',
          },
          {
            title: 'Cryptic Error Messages',
            content: 'Unclear guidelines, lack of timely updates, limited or no support from tax authorities, and inconsistent terminology make troubleshooting difficult.',
          },
        ],
      },
      {
        title: 'Design Strategy',
        content: 'Simplify, automate manual labor-intensive tasks, and provide transparency, guidance, and insights.',
        subsections: [
          {
            title: 'Automate Knowledge Acquisition',
            content: 'Through real-time regulatory updates, freeing Tax Managers from manual tracking.',
          },
          {
            title: 'Simplify Labor-Intensive Data Scoping and Gathering',
            content: 'Via a centralised, customisable data hub helping users find essential information from vast datasets.',
          },
          {
            title: 'Improve Confidence in Data',
            content: 'Provide data transparency, ensure clear status visibility, enable flexible queries for in-depth analysis.',
          },
          {
            title: 'Clarify and Offer Actionable Guidance',
            content: 'Empower users to resolve issues independently and reduce support dependency through clear troubleshooting guidance.',
          },
          {
            title: 'Deliver Strategic Insights',
            content: 'With aggregated analytics to enhance Tax Managers influence in financial discussions.',
          },
        ],
      },
      {
        title: 'Fonoa Required Data',
        content: 'A centralised data hub that helps users find information in vast datasets. Pinpoint data following users\' mental model, apply Progressive Disclosure to reduce cognitive load, stay up-to-date with data changes, and easily share information to improve collaboration.',
        subsections: [
          {
            title: 'Impact on User Workflow',
            content: 'Enable Tax Managers to independently scope and gather data for integrations, reducing engineering dependencies and speeding up market entry and expansion. Reduced Remote.com new country integration time from 2 months to 3 hours. Reduced engineering dependencies from 3 to 1 engineers required on average for each new country integration.',
          },
          {
            title: 'Strategic Impact',
            content: 'Empowering clients to confidently and quickly enter new markets. Helped Uber expand to 3 new markets in a month. Saves clients up to €42,500 p.a (FTE) cost on manual data scoping and gathering costs. Increased Fonoa e-Invoicing ARR by 941.67% (July 2022 - August 2024) by leveraging land-and-expand opportunities. Serves as an essential demo tool, driving commercial opportunities.',
          },
        ],
      },
      {
        title: 'Compliance Centre',
        content: 'A real-time compliance radar that tracks regulatory changes and allows users to receive tailored updates based on their interests. Allow users to filter updates relevant to their needs, minimising noise and manual monitoring.',
        subsections: [
          {
            title: 'Impact on User Workflow',
            content: 'Tax Managers are freed from manual tracking, significantly lowering compliance effort.',
          },
          {
            title: 'Strategic Impact',
            content: 'Transforming compliance monitoring into a background task, keeping users informed without demanding significant time or attention. The feature evolved into a strategic asset, enabling partnerships with consulting firms by providing a platform that delivers compliance insights to their clients.',
          },
        ],
      },
      {
        title: 'Unified Transaction Records',
        content: 'Unified transaction records with clear statuses, progress, and errors for deep-dive troubleshooting.',
        subsections: [
          {
            title: 'Impact on User Workflow',
            content: 'Enables Tax Managers to quickly access and verify transaction data, eliminating time-intensive data monitoring and troubleshooting.',
          },
          {
            title: 'Strategic Impact',
            content: 'Consolidates data in a single view, establishing e-Invoicing as a Single Source of Truth for transaction data, enhancing client confidence in the platform. Increased product MAU by 16% one month after launch.',
          },
        ],
      },
      {
        title: 'Compliance Analytics Dashboard',
        content: 'Insights enable Tax Managers to proactively monitor compliance health and contribute to strategic financial planning. Provide high-level actionable insights, monitor compliance, highlight issues, and provide helpful error messages.',
        subsections: [
          {
            title: 'Impact on User Workflow',
            content: 'Tax Managers can now quickly assess compliance health at a glance, identifying potential risks without manual data review. Highlight patterns and trends shifting user focus from routine fire-fighting to high-level decision-making.',
          },
          {
            title: 'Strategic Impact',
            content: 'Offers Tax Managers strategic compliance insights, securing a role in key financial discussions. Elevates the product value from a Continuous Transaction Control (CTC) tool to a critical source of strategic insights. Serves as an essential and effective demo tool, visualising complex integration process, helping unblock 100% of opportunities in commercial pipeline.',
          },
        ],
      },
      {
        title: 'Error Management System',
        content: 'Translate error messages, craft clear, helpful error messages. Present error analytics clearly, turning error management into a structured, preventable process.',
        subsections: [
          {
            title: 'Impact on User Workflow',
            content: 'With actionable error descriptions and analytics, Tax Managers can address compliance errors swiftly and independently, minimizing delays and support dependency.',
          },
          {
            title: 'Strategic Impact',
            content: 'Standardised and improved error messages across different Tax authorities and languages (20+). Creates a unified troubleshooting framework shared by clients, Fonoa CX, Sales Engineers, Engineering, and Product. This closed-loop approach minimises reporting disruptions and empowers users to resolve issues autonomously. Error rates decreased by 8.5% one month after launch. Reduced CX tickets by 12%.',
          },
        ],
      },
      {
        title: 'Iterations',
        content: 'Over four years, two primary themes have remained top of mind for Tax Managers: Operational Efficiency and Strategic Value Delivery.',
        subsections: [
          {
            title: 'Enhanced Flexibility to Improve Operational Efficiency',
            content: 'Despite common tasks and goals, each Tax Manager follows a unique workflow, requiring greater personalisation. Data table customisations help prioritise key information within a vast dataset. Nested filters enable robust queries, improving workflow efficiency.',
          },
          {
            title: 'Tailored Analytics for Multiple Workflows',
            content: 'Regardless of their workflows, all data consumers need high-level analytics upfront to grasp the broader context of their processes.',
          },
        ],
      },
      {
        title: 'Takeaways',
        content: 'Understanding the Real Cost of Compliance: User interviews revealed how compliance demands drain resources, especially where tax compliance has low engineering priority. Added complexity risks adoption, underscoring the need for low-maintenance features. This insight shaped Fonoa Required Data, focusing on only essential data to streamline scoping and gathering.',
        subsections: [
          {
            title: 'The Power of Clear, Actionable Information',
            content: 'Client feedback highlighted how vague, cryptic error messages create friction. To address this, we designed the Error Management System to translate, standardise, and clarify errors, offering steps for resolution. This reduced support dependency and empowered users to troubleshoot independently, aligning with our low-effort strategy.',
          },
        ],
      },
    ],
    previousProject: 'google',
    nextProject: 'scaleway',
  },
  {
    slug: 'lookup',
    title: 'TIN Lookup',
    overview: 'Know Your Client (KYC) suite that verifies counterparty tax status by validating Tax ID Numbers (TINs). Led a user-centric design approach with modular architecture to simplify manual workflows and prepare the product for hyper-growth. Today validates over 1,500,000 TINs/month for clients, preventing upwards to €100,000,000 loss of margin.',
    heroImage: '/project-placeholder-2.svg',
    images: [
      {
        section: 'Streamlined CSV Instructions',
        src: '/project-placeholder-3.svg',
        alt: 'CSV upload interface with template guide',
        caption: 'Clear CSV guide with downloadable template',
      },
      {
        section: 'Compliance Analytics Dashboard',
        src: '/project-placeholder-4.svg',
        alt: 'Compliance Analytics Dashboard for TIN validation',
        caption: 'Enterprise-grade analytics for strategic decision-making',
      },
      {
        section: 'Error Management System',
        src: '/project-placeholder-5.svg',
        alt: 'Error management interface',
        caption: 'Clear, actionable error messages',
      },
      {
        section: 'Restructuring Product Architecture',
        src: '/project-placeholder-6.svg',
        alt: 'Unified validation workflow',
        caption: 'Streamlined validation flow focusing on results',
      },
    ],
    role: 'Senior Product Designer, Design Team Lead',
    team: [
      'Artjom Shestajev',
      'Elliott Perks',
      'Julia Cantavella',
      'Sofia Leah (PM)',
      'Sarah Shepherd (UXR)',
      'Laura Moreno (PrD)',
      'Victor Torre (EM)',
      'Daniel Nadasan (FE)',
      'Alexey Khmelev',
      'Onur Geyik',
      'Wojciech Kumoń',
      'Raul Martin (BE)',
      'Attila Felfoldi (TaxTech)',
    ],
    duration: 'March 2021 - June 2022, August 2023 - February 2025',
    achievements: [
      'Established the product front-end architecture',
      'Designed 20+ features end-to-end',
      'Created the Design Strategy that grew the product from a low-cost acquisition tool to a million-dollar revenue generator',
      'Evangelised a user-centric approach in product development',
      'Shifted user behaviour from manual tactical tasks to automated strategic processes',
      'Helped clients reduce significant cost on manual workflows and compliance risks',
      'Contributed to making Lookup the top product in its category (per client feedback)',
    ],
    metrics: [
      {
        label: 'ARR Increase',
        value: '5000%',
        description: 'From €20K to €1M',
      },
      {
        label: 'Client FTE Saved',
        value: '€87,000',
        description: 'Per annum from manual validation',
      },
      {
        label: 'Error Rate Reduction',
        value: '6%',
        description: 'One month after release',
      },
    ],
    sections: [
      {
        title: 'Challenges',
        content: 'Through user interviews, desk research, and competitive analysis, I identified the core challenges Tax Managers face:',
        subsections: [
          {
            title: 'Manual Processes',
            content: 'Without automation, the validation process was slow and prone to errors.',
          },
          {
            title: 'Frequent Validation Errors',
            content: 'Errors due to minor formatting issues led to frustration and inefficiencies.',
          },
          {
            title: 'Lack of Strategic Insights',
            content: 'Tax managers expressed a need for high-level insights to support compliance monitoring.',
          },
        ],
      },
      {
        title: 'Design Strategy',
        content: 'Prioritise ease-of-use and strategic insights to evolve the product from an Acquisition Tool to a robust Enterprise Solution.',
        subsections: [
          {
            title: 'Aiding Manual Processes',
            content: 'Streamlining TINs upload, TIN format verification, etc. to showcase an intuitive tool, simplifying the technical aspect of an API-first product in sales demos.',
          },
          {
            title: 'Provide Guidance and Feedback',
            content: 'To minimise errors, enhance Tax Managers\' self-serve capability and operational efficiency.',
          },
        ],
      },
      {
        title: 'Streamlined CSV Instructions',
        content: 'Introduced to reduce high error rates caused by incorrect data formatting. Early usability testing revealed users struggled with data formatting for TIN validation. Offer a clear guide with a downloadable CSV template, enabling users to input data accurately and minimise formatting errors.',
        subsections: [
          {
            title: 'Impact on User Workflow',
            content: 'Enable Tax Managers to understand data requirements and upload TINs manually with minimal efforts and errors.',
          },
          {
            title: 'Strategic Impact',
            content: 'Clarifies data requirements, reduced client effort to understand data required, improving client satisfaction. Increased product MAU by 25% one month after launch. Boost product appeal in demos, opening up commercial opportunities.',
          },
        ],
      },
      {
        title: 'Compliance Analytics Dashboard',
        content: 'As Lookup matured, a need emerged for high-level insights to support strategic decision-making, especially for enterprise clients. Leverage data visualisation to present insights clearly, minimising the effort required to interpret data.',
        subsections: [
          {
            title: 'Impact on User Workflow',
            content: 'The added strategic layer and actionable data empower Tax Managers to allocate resources efficiently, resolve recurring issues, and take a proactive compliance approach.',
          },
          {
            title: 'Strategic Impact',
            content: 'With enterprise-grade analytics, Lookup evolved into a comprehensive compliance management solution, attracting large clients and boosting retention. This positioned the product as a premium offering, significantly contributing to its growth into a million-dollar revenue generator.',
          },
        ],
      },
      {
        title: 'Error Management System',
        content: 'Craft clear, helpful error messages. Present error analytics in an insightful format, transforming error management from a guessing game into a structured, preventable process.',
        subsections: [
          {
            title: 'Impact on User Workflow',
            content: 'With actionable error descriptions and analytics, Tax Managers can address compliance errors swiftly and independently, minimizing delays and support dependency.',
          },
          {
            title: 'Strategic Impact',
            content: 'Standardised and improved error messages across different Tax authorities and languages (20+). Creates a unified troubleshooting framework shared by clients, Fonoa CX, Sales Engineers, Engineering, and Product. This closed-loop approach minimises reporting disruptions and empowers users to resolve issues autonomously. Error rates decreased by 8.5% one month after launch. Reduced CX tickets by 12%.',
          },
        ],
      },
      {
        title: 'Iterations',
        content: 'Balancing Feature Expansion without Feature Creep. As client interest grew, alongside rising feature requests and the addition of more robust product capabilities, I refined the product front-end architecture to centre around core user JTBDs—validating and extracting insights from TIN validations. This approach ensured essential features remained prominent while integrating complementary enhancements to improve workflow efficiency, avoiding feature creep and minimising cognitive overload.',
        subsections: [
          {
            title: 'Restructuring Product Architecture',
            content: 'Initially, the Validation page presented Single and Batch validators separately to align with existing workflows. However, user insights revealed that this mental model stemmed from limitations in legacy government databases or competitor systems based on data ingestion modes (single or batch of TINs). I realised that users\' primary goal was to understand the TIN status and gather insights from the validation, rather than the act of validation itself. To address this, I iterated on the design by regrouping the Single and Batch Validator with their respective results into two pages: Validate (Single & Batch) and Records (Single & Batch). This restructuring aimed to streamline workflows and provide faster access to results.',
          },
          {
            title: 'Impact on User Workflow',
            content: 'Simplifying the validation flow removed an extra step between task and outcomes, providing the results directly, enhancing the user decision-making capability and transforming their approach from tactical to strategic. The users reported being less concerned about how to validate TINs and more about the validation results, which impact their business directly.',
          },
        ],
      },
      {
        title: 'Takeaways',
        content: 'A user-centric design strategy should always be adaptable and ready to evolve with the product. By uncovering and addressing users\' Jobs To Be Done (JTBDs), you ensure the product meets essential user needs while leaving space for growth and innovation. An adaptable design strategy starts by envisioning the ideal state or achieving product-market fit, then scales back to an MVP. This approach balances meeting current user needs and business goals with maintaining innovation and scalability for the future.',
        subsections: [
          {
            title: 'Fewer Features, More Impact',
            content: 'Adding a CSV guide with clear instructions and a downloadable template reduced errors from incorrect data formatting. Small, user-centric features can have a substantial impact on user experience and efficiency, demonstrating attention to detail that enhances both functionality and client satisfaction.',
          },
          {
            title: 'Streamlining Validation Workflow and Unifying Modes',
            content: 'By consolidating Single and Batch TIN Validation modes, the product simplified the workflow and shifted focus to results rather than processes. Simplifying workflows by aligning product architecture with user goals and needs rather than traditional workflows improves efficiency, encourages new user behaviour, and enhances overall satisfaction.',
          },
        ],
      },
    ],
    previousProject: 'e-invoicing',
    nextProject: 'x-platform-features',
  },
  {
    slug: 'x-platform-features',
    title: 'Cross-Platform Features',
    overview: 'Fonoa cross-platform features are built to enhance productivity, usability, and security for enterprise clients. In collaboration with designers Nemanja and Laura, we optimised and refined each feature through competitive analysis, usability testing, and cross-functional feedback, balancing technical feasibility with user needs. Having a robust and modular Design System allowed us to quickly build cross-platform features whilst maintaining a cohesive user experience.',
    heroImage: '/project-placeholder-3.svg',
    images: [
      {
        section: 'Navigation: Sidebar and Top Bar',
        src: '/project-placeholder-4.svg',
        alt: 'Collapsible sidebar and top bar navigation',
        caption: 'Maximising screen real estate with collapsible navigation',
      },
      {
        section: 'Information Display: Data Table',
        src: '/project-placeholder-5.svg',
        alt: 'Customisable data table with sticky headers',
        caption: 'String truncation with tooltips and sticky columns',
      },
      {
        section: 'Data Query: Filters',
        src: '/project-placeholder-6.svg',
        alt: 'Advanced filtering interface',
        caption: 'Granular queries with boolean logic',
      },
      {
        section: 'Manual Data Ingestion: CSV Upload',
        src: '/project-placeholder-1.svg',
        alt: 'CSV upload with data mapping preview',
        caption: 'Real-time data mapping and enrichment',
      },
    ],
    role: 'Senior Product Designer, Design Team Lead',
    team: [
      'Nemanja (Designer)',
      'Laura Moreno (PrD)',
    ],
    duration: 'March 2021 - February 2025',
    achievements: [
      'Established unified design language across products',
      'Reduced design-to-development time by 40%',
      'Achieved 95% component adoption rate',
      'Increased screen real estate by 25%',
      'Improved task completion time by 15%',
    ],
    sections: [
      {
        title: 'Navigation: Sidebar and Top Bar',
        content: 'Provide effective wayfinding whilst maximising data visibility. The Sidebar was made collapsible to maximise screen real estate, accommodating data-heavy workflows. The Top Bar was revamped to include both main and auxiliary tasks, centralising key actions and further freeing up page space.',
        subsections: [
          {
            title: 'Impact',
            content: 'Screen real estate increased by 25%, reducing user fatigue caused by excessive scrolling and clicking to access information in data-heavy workflows.',
          },
        ],
      },
      {
        title: 'Information Display: Data Table',
        content: 'Cater to different workflows, reduce cognitive load, and allow users to focus on relevant data points. Provide context whilst maximising data visibility. String truncation with tooltips, along with sticky column and row headers, ensures users always have contextual information in view. This approach optimises page real estate to display the maximum amount of data effectively.',
        subsections: [
          {
            title: 'Enabling Customisations',
            content: 'Reorder and hide columns helps prioritise relevant data for each user workflow and minimise information overload.',
          },
        ],
      },
      {
        title: 'Data Query: Filters',
        content: 'Filters were initially designed to quickly narrow down datasets, simplifying data-heavy workflows. Advanced filtering capabilities such as include/exclude (and/or) options and boolean logic (true/false) were introduced to facilitate more granular, precise queries for faster information retrieval.',
        subsections: [
          {
            title: 'Impact',
            content: 'Task Completion Time improved by 15% in conjunction with Customisable Data Table.',
          },
        ],
      },
      {
        title: 'Manual Data Ingestion: CSV Upload',
        content: 'Initially a manual ingestion tool, the CSV Upload feature gained importance after Sales feedback highlighted its demo value. We enhanced it with real-time Data Mapping and Enrichment previews to better showcase Fonoa capabilities.',
        subsections: [
          {
            title: 'Impact on User Workflow',
            content: 'The improved CSV Upload feature provides clients with clearer insights into Fonoa capabilities, reducing errors by identifying issues early in the ingestion process.',
          },
          {
            title: 'Strategic Impact',
            content: 'Simplifying complex technical concepts such as API for Tax Managers, enhancing product appeal and unlocking new commercial opportunities.',
          },
        ],
      },
    ],
    previousProject: 'lookup',
    nextProject: 'growing-design',
  },
  {
    slug: 'growing-design',
    title: 'Growing the Design Team',
    overview: 'When I joined Fonoa as the second product design hire, the company design maturity was low, and design was seen more as a UI-focused role than a strategic partner in product development. Together with Nemanja (the first designer), we aimed to evolve design into a core function aligned with Fonoa product and business goals. By building a Design System, establishing collaboration frameworks, and hiring strategically, we transformed the design function into a scalable, high-impact team driving user-centered solutions across Fonoa product suite.',
    heroImage: '/project-placeholder-4.svg',
    images: [
      {
        section: 'Building and Scaling the Design System',
        src: '/project-placeholder-5.svg',
        alt: 'Design System component library',
        caption: 'Comprehensive Design System with interchangeable components',
      },
      {
        section: 'Establishing a Foundation for User Research',
        src: '/project-placeholder-6.svg',
        alt: 'User research framework and playbook',
        caption: 'Standardised research methods and templates',
      },
      {
        section: 'Results',
        src: '/project-placeholder-1.svg',
        alt: 'Design team growth and impact metrics',
        caption: 'Efficient and consistent design and development',
      },
    ],
    role: 'Senior Product Designer, Design Team Lead',
    team: [
      'Nemanja (Designer)',
    ],
    duration: 'March 2021 - February 2025',
    achievements: [
      'Grew design team from 2 to 8 designers',
      '100% retention rate during growth',
      'Reduced onboarding time by 50%',
      'Established comprehensive Design System',
      'Created user research framework and playbook',
    ],
    sections: [
      {
        title: 'Challenges',
        content: '',
        subsections: [
          {
            title: 'Low UX Maturity',
            content: 'Cross-functional teams undervalued design role, focusing on aesthetics rather than design strategic potential in product development.',
          },
          {
            title: 'Underdeveloped Design System',
            content: 'We initially had only a UI kit, lacking the comprehensive standards necessary to maintain consistency across our product ecosystem.',
          },
          {
            title: 'Isolated Teams',
            content: 'Designers embedded within product teams led to siloed workflows and inconsistent user experiences.',
          },
          {
            title: 'Undefined Hiring Standards',
            content: 'Without clear understanding the role of design, the hiring standards could not articulate the scope and attract high-caliber designers capable of working in Fonoa complex tax-tech environment.',
          },
        ],
      },
      {
        title: 'Defining Success',
        content: 'Our goal was to establish design as a key, strategic function within Fonoa, with measurable outcomes tied to user and business impact:',
        subsections: [
          {
            title: 'Create Cross-functional Alignment',
            content: 'Design needed to be understood and valued by cross-functional teams as a strategic asset, not just for aesthetics but for solving complex product challenges.',
          },
          {
            title: 'Thrive for Operational Efficiency and Consistency',
            content: 'The design-to-development handoff had to become faster, with minimal back-and-forth, while ensuring a consistent user experience across Fonoa products.',
          },
          {
            title: 'Define User-centered Metrics',
            content: 'We aimed for improved task efficiency, higher customer satisfaction, and reduced error rates, enhancing both user experience and product reliability.',
          },
          {
            title: 'Focus on Long-term Impact on Retention and Revenue',
            content: 'Transforming features into strategic tools to drive Customer Lifetime Value (CLV) growth and retention, as exemplified in the TIN Validation project.',
          },
        ],
      },
      {
        title: 'Building and Scaling the Design System',
        content: 'To streamline processes and ensure consistent design quality across Fonoa products, I expanded our existing UI kit into a full-fledged Design System. The Design System enabled developers to build with high-quality, interchangeable components, minimising designer involvement before QA. This allowed us to move directly from Information Architecture to high-fidelity designs, bypassing lo/mid-fi wireframes and accelerating iteration.',
        subsections: [
          {
            title: 'Establishing Standards',
            content: 'I introduced the Design System Request and Critique Framework and a Contribution Playbook, setting clear standards for component contributions. This established a sense of shared responsibility between design and development, supporting high-quality outcomes.',
          },
        ],
      },
      {
        title: 'Establishing a Foundation for User Research',
        content: 'To promote a research-led approach and support design strategic integration, Nemanja and I created a user research framework until a dedicated UX Researcher was hired.',
        subsections: [
          {
            title: 'Objective Definition and Gap Analysis',
            content: 'Collaborating with Product, Engineering, Tax Managers, and CX teams, we identified knowledge gaps and set research objectives, focusing on user pain points, unmet needs, and competitive benchmarking.',
          },
          {
            title: 'Standardised Research Methods',
            content: 'We developed a research playbook with methods for User Interviews, Discovery Sessions, and Competitive Analysis, ensuring consistency and quality in our approach.',
          },
          {
            title: 'Accessible Documentation and Knowledge Sharing',
            content: 'Templates for interview summaries, discovery insights, and competitive analysis reports made findings digestible and easily shareable, promoting empathy and a shared understanding of users across teams.',
          },
          {
            title: 'Evangelising Research',
            content: 'Regular sessions presented research findings to cross-functional teams, making insights relevant to potential product improvements and advocating for a user-centered approach in decision-making. These ceremonies bridged silos and built shared goals, helping cross-functional teams appreciate design strategic value and align on user-centered priorities.',
          },
        ],
      },
      {
        title: 'Results',
        content: '',
        subsections: [
          {
            title: 'Efficient and Consistent Design and Development',
            content: 'The Design System transformed the design-to-development handoff, enabling developers to build faster and more consistently across six products and over 100 features. This minimised the need for wireframes and allowed designers to focus on high-impact iterations.',
          },
          {
            title: 'Skilled, Cohesive Design Team',
            content: 'Our rigorous hiring process resulted in a team of skilled designers and researchers who each brought unique perspectives, fueling product innovation and driving user-centered outcomes.',
          },
        ],
      },
    ],
    previousProject: 'x-platform-features',
    nextProject: 'scaleway',
  },
]
