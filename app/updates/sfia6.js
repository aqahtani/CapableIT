var categories = [
    {
        "color" : "#ee2453",
        "title" : "Strategy and architecture",
        "number" : 1,
        __ref : "Strategy and architecture"
    },

    {
        "color" : "#ce549f",
        "title" : "Change and transformation",
        "number" : 2,
        __ref : "Change and transformation"
    },

    {
        "color" : "#f3c710",
        "title" : "Development and implementation",
        "number" : 3,
        __ref : "Development and implementation"
    },

    {
        "color" : "#b2671f",
        "title" : "Delivery and operation",
        "number" : 4,
        __ref : "Delivery and operation"
    },

    {
        "color" : "#00a5e4",
        "title" : "Skills and quality",
        "number" : 5,
        __ref : "Skills and quality"
    },

    {
        "color" : "#00a853",
        "title" : "Relationships and engagement",
        "number" : 6,
        __ref : "Relationships and engagement"
    }
];

var subCategories = [
    
    // Strategy and architecture
    {
        "number": 1.1,
        "title": "Information strategy",
        "category": "Strategy and architecture",
        __ref: "Information strategy"
    },
    {
        "number": 1.2,
        "title": "Advice and guidance",
        "category": "Strategy and architecture",
        __ref: "Advice and guidance"
    },
    {
        "number": 1.3,
        "title": "Business strategy and planning",
        "category": "Strategy and architecture",
        __ref: "Business strategy and planning"
    },
    {
        "number": 1.4,
        "title": "Technical strategy and planning",
        "category": "Strategy and architecture",
        __ref: "Technical strategy and planning"
    },

    // Change and transformation
    {
        "number": 2.1,
        "title": "Business change implementation",
        "category": "Change and transformation",
        __ref: "Business change implementation"
    },
    {
        "number": 2.2,
        "title": "Business change management",
        "category": "Change and transformation",
        __ref: "Business change management"
    },
    
    // Development and implementation
    {
        "number": 3.1,
        "title": "Systems development",
        "category": "Development and implementation",
        __ref: "Systems development"
    },
    {
        "number": 3.2,
        "title": "User experience",
        "category": "Development and implementation",
        __ref: "User experience"
    },
    {
        "number": 3.3,
        "title": "Installation and integration",
        "category": "Development and implementation",
        __ref: "Installation and integration"
    },

    // Delivery and operation
    {
        "number": 4.1,
        "title": "Service design",
        "category": "Delivery and operation",
        __ref: "Service design"
    },
    {
        "number": 4.2,
        "title": "Service transition",
        "category": "Delivery and operation",
        __ref: "Service transition"
    },
    {
        "number": 4.3,
        "title": "Service operation",
        "category": "Delivery and operation",
        __ref: "Service operation"
    },

    // Skills and quality
    {
        "number": 5.1,
        "title": "Skill management",
        "category": "Skills and quality",
        __ref: "Skill management"
    },
    {
        "number": 5.2,
        "title": "People management",
        "category": "Skills and quality",
        __ref: "People management"
    },
    {
        "number": 5.3,
        "title": "Quality and conformance",
        "category": "Skills and quality",
        __ref: "Quality and conformance"
    },

    // Relationships and engagement
    {
        "number": 6.1,
        "title": "Stakeholder management",
        "category": "Relationships and engagement",
        __ref: "Stakeholder management"
    },
    {
        "number": 6.2,
        "title": "Sales and marketing",
        "category": "Relationships and engagement",
        __ref: "Sales and marketing"
    }
];



var skills = [
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "IT governance",
        "description": "The establishment and oversight of an organisation's approach to the use of information, digital services and associated technology. Includes responsibility for provision of digital services; levels of service and service quality which meet current and future business requirements; policies and practices for conformance with mandatory legislation and regulations; strategic plans for technology to enable the organisation's business strategy; transparent decision making, leading to justification for investment, with appropriate balance between stakeholder benefits, opportunities, costs, and risks.",
        "code": "GOVN",
        "level": 7,
        "levelDescription": "Leads development and communication of the organisation's policies for corporate governance of information. Contributes to strategic plans, which satisfy the current and ongoing needs of the organisation's business strategy, and the current and future capabilities. Promotes clear decision making, leading to valid reasons for technology-related acquisitions. Monitors provision of services, levels of service and service quality. Assures that the organisation's business processes are compliant with relevant legislation, and that the organisation operates according to the principles embedded in relevant standards. Promotes policies, practices and decisions which recognise the current and evolving needs of all the stakeholders."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "IT governance",
        "description": "The establishment and oversight of an organisation's approach to the use of information, digital services and associated technology. Includes responsibility for provision of digital services; levels of service and service quality which meet current and future business requirements; policies and practices for conformance with mandatory legislation and regulations; strategic plans for technology to enable the organisation's business strategy; transparent decision making, leading to justification for investment, with appropriate balance between stakeholder benefits, opportunities, costs, and risks.",
        "code": "GOVN",
        "level": 6,
        "levelDescription": "Puts in place, or confirms, staffing structures to support the work of the governing authority (board, trustees, etc) and proper relationships between the organisation and external parties. Takes responsibility for review of management processes (and decisions) and confirms that they are compliant with the organisation's strategy for corporate governance of information. Is familiar with relevant standards and the principles embedded within them. Reviews new business proposals and provides specialist advice on compliance issues. Acts as the organisation's contact for relevant regulatory authorities. Establishes policy and standards for compliance with relevant legislation."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "IT governance",
        "description": "The establishment and oversight of an organisation's approach to the use of information, digital services and associated technology. Includes responsibility for provision of digital services; levels of service and service quality which meet current and future business requirements; policies and practices for conformance with mandatory legislation and regulations; strategic plans for technology to enable the organisation's business strategy; transparent decision making, leading to justification for investment, with appropriate balance between stakeholder benefits, opportunities, costs, and risks.",
        "code": "GOVN",
        "level": 5,
        "levelDescription": "Reviews information systems for compliance with legislation and specifies any required changes. Responsible for ensuring compliance with organisational policies and procedures and overall information management strategy."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "IT strategy and planning",
        "description": "The creation, iteration and maintenance of a strategy in order to align IT plans with business objectives and the development of plans to drive forward and execute that strategy. Working with stakeholders to communicate and embed strategic management via objectives, accountabilities and monitoring of progress.",
        "code": "ITSP",
        "level": 5,
        "levelDescription": "Ensures that all stakeholders adhere to IT strategic management approach and timetables. Collates information and creates reports and insights to support IT strategic management processes. Develops and communicates plans to drive forward the strategy. Contributes to the development of policies, standards and guidelines for IT strategy development and planning."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "IT strategy and planning",
        "description": "The creation, iteration and maintenance of a strategy in order to align IT plans with business objectives and the development of plans to drive forward and execute that strategy. Working with stakeholders to communicate and embed strategic management via objectives, accountabilities and monitoring of progress.",
        "code": "ITSP",
        "level": 6,
        "levelDescription": "Sets policies and standards and guidelines for how the organisation conducts IT strategy development and planning. Leads and manages the creation or review of an IT strategy which meets the requirements of the business. Develops, communicates, implements and reviews the  processes which ensure that the strategic management of IT is embedded in the management and operational plans of the organisation."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "IT strategy and planning",
        "description": "The creation, iteration and maintenance of a strategy in order to align IT plans with business objectives and the development of plans to drive forward and execute that strategy. Working with stakeholders to communicate and embed strategic management via objectives, accountabilities and monitoring of progress.",
        "code": "ITSP",
        "level": 7,
        "levelDescription": "Leads the definition, implementation, communication of the organisation's strategic management framework and directs the creation and review of an IT strategy and plans to support the strategic requirements of the business."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Information management",
        "description": "The overall governance of how all types of information, structured and unstructured, whether produced internally or externally, are used to support decision-making, business processes and digital services. Encompasses development and promotion of the strategy and policies covering the design of information structures and taxonomies, the setting of policies for the sourcing and maintenance of the data content, and the development of policies, procedures, working practices and training to promote compliance with legislation regulating all aspects of holding, use and disclosure of data.",
        "code": "IRMG",
        "level": 7,
        "levelDescription": "Specifies at a strategic level the business functions and data subjects needed to support future business and digital services, thereby enabling the development of an Information Architecture. Establishes and communicates the organisation's digital strategy, developing it as an integrated part of the business strategy. Directs digital resources, to create value for the stakeholders by improving the performance of the organisation, whilst maintaining the principles of professional standards, accountability, openness, equality and diversity and clarity of purpose. Responsible for compliance with regulations, standards and codes of good practice relating to information and records management, information assurance and data protection."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Information management",
        "description": "The overall governance of how all types of information, structured and unstructured, whether produced internally or externally, are used to support decision-making, business processes and digital services. Encompasses development and promotion of the strategy and policies covering the design of information structures and taxonomies, the setting of policies for the sourcing and maintenance of the data content, and the development of policies, procedures, working practices and training to promote compliance with legislation regulating all aspects of holding, use and disclosure of data.",
        "code": "IRMG",
        "level": 6,
        "levelDescription": "Maintains and communicates the organisation's strategy for managing information, ensuring that uniformly recognised and accepted data definitions are developed and applied throughout the organisation. Ensures that the business processes and information required to support the organisation are defined and devises appropriate standards, processes and data architectures. Identifies the impact of any relevant statutory, internal or external regulations on the organisation's use of information and develops strategies for compliance. Coordinates information resources to support digital services and analytics, whilst maintaining the principles of professional standards, accountability, openness, equality and diversity and clarity of purpose. Implements systems and controls to measure performance, and manage risk."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Information management",
        "description": "The overall governance of how all types of information, structured and unstructured, whether produced internally or externally, are used to support decision-making, business processes and digital services. Encompasses development and promotion of the strategy and policies covering the design of information structures and taxonomies, the setting of policies for the sourcing and maintenance of the data content, and the development of policies, procedures, working practices and training to promote compliance with legislation regulating all aspects of holding, use and disclosure of data.",
        "code": "IRMG",
        "level": 5,
        "levelDescription": "Drafts and maintains the policy, standards and procedures for compliance with relevant legislation. Understands the implications of information, both internal and external, that can be mined from business systems and elsewhere. Makes business decisions based on that information, including the need to make changes to systems. Reviews proposals for new digital initiatives and provides specialist advice on information management, including advice on and promotion of collaborative working and assessment and management of information-related risk. Creates and maintains an inventory of information assets, which are subject to relevant legislation. Prepares, reviews and submits periodic notification of registration details to the relevant regulatory authorities. Ensures that formal information access requests and complaints are dealt with according to approved procedures."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Information management",
        "description": "The overall governance of how all types of information, structured and unstructured, whether produced internally or externally, are used to support decision-making, business processes and digital services. Encompasses development and promotion of the strategy and policies covering the design of information structures and taxonomies, the setting of policies for the sourcing and maintenance of the data content, and the development of policies, procedures, working practices and training to promote compliance with legislation regulating all aspects of holding, use and disclosure of data.",
        "code": "IRMG",
        "level": 4,
        "levelDescription": "Understands and complies with relevant organisational policies and procedures, taking responsibility for assessing and managing risks around the use of information. Ensures that information is presented effectively. Ensures that effective controls are in place for internal delegation, audit and control and that the board receives timely reports and advice that will inform their decisions."
}
,
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Information systems coordination",
        "description": "Typically within a large organisation in which the information strategy function is devolved to autonomous units, or within a collaborative enterprise of otherwise independent organisations, the coordination of information strategy matters where the adoption of a common approach (such as shared services) would benefit the organisation.",
        "code": "ISCO",
        "level": 7,
        "levelDescription": "Establishes, maintains and communicates the organisation's strategy for managing information and the policies, standards, procedures and methods necessary to implement the strategy. Coordinates all aspects of management of the life cycle of information systems. Represents the interests of the entire organisation to general management and external bodies on matters relating to information strategy."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Information systems coordination",
        "description": "Typically within a large organisation in which the information strategy function is devolved to autonomous units, or within a collaborative enterprise of otherwise independent organisations, the coordination of information strategy matters where the adoption of a common approach (such as shared services) would benefit the organisation.",
        "code": "ISCO",
        "level": 6,
        "levelDescription": "Maintains an awareness of the global needs of the organisation, and promotes (to both information systems and business management) the benefits that a common approach to information and communications technology deployment will bring to the business as a whole. Coordinates the promotion, acquisition, development, and implementation of information systems and services in close liaison with those responsible for management and strategy."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Information security",
        "description": "The selection, design, justification, implementation and operation of controls and management strategies to maintain the security, confidentiality, integrity, availability, accountability and relevant compliance of information systems with legislation, regulation and relevant standards.",
        "code": "SCTY",
        "level": 6,
        "levelDescription": "Develops and communicates corporate information security policy, standards and guidelines. Contributes to the development of organisational strategies that address information control requirements. Identifies and monitors environmental and market trends and pro-actively assesses impact on business strategies, benefits and risks. Leads the provision of authoritative advice and guidance on the requirements for security controls in collaboration with experts in other functions e.g. legal, technical support. Ensures architectural principles are applied during design to reduce risk and drives adoption and adherence to policy, standards and guidelines."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Information security",
        "description": "The selection, design, justification, implementation and operation of controls and management strategies to maintain the security, confidentiality, integrity, availability, accountability and relevant compliance of information systems with legislation, regulation and relevant standards.",
        "code": "SCTY",
        "level": 5,
        "levelDescription": "Provides advice and guidance on security strategies to manage identified risks and ensure adoption and adherence to standards. Obtains and acts on vulnerability information and conducts security risk assessments, business impact analysis and accreditation on complex information systems. Investigates major breaches of security, and recommends appropriate control improvements. Contributes to development of information security policy, standards and guidelines."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Information security",
        "description": "The selection, design, justification, implementation and operation of controls and management strategies to maintain the security, confidentiality, integrity, availability, accountability and relevant compliance of information systems with legislation, regulation and relevant standards.",
        "code": "SCTY",
        "level": 4,
        "levelDescription": "Explains the purpose of and provides advice and guidance on the application and operation of elementary physical, procedural and technical security controls. Performs security risk, vulnerability assessments, and business impact analysis for medium complexity information systems. Investigates suspected attacks and manages security incidents. Uses forensics where appropriate."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Information security",
        "description": "The selection, design, justification, implementation and operation of controls and management strategies to maintain the security, confidentiality, integrity, availability, accountability and relevant compliance of information systems with legislation, regulation and relevant standards.",
        "code": "SCTY",
        "level": 3,
        "levelDescription": "Communicates information security risks and issues to business managers and others. Performs basic risk assessments for small information systems. Contributes to vulnerability assessments. Applies and maintains specific security controls as required by organisational policy and local risk assessments. Takes action to respond to security breaches in line with security policy and records the incidents and action taken."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Information security",
        "description": "The selection, design, justification, implementation and operation of controls and management strategies to maintain the security, confidentiality, integrity, availability, accountability and relevant compliance of information systems with legislation, regulation and relevant standards.",
        "code": "SCTY",
        "level": 7,
        "levelDescription": "Directs the development, implementation, delivery and support of an enterprise information security strategy aligned to the strategic requirements of the business. Ensures compliance between business strategies and information security and leads the provision of information security resources expertise, guidance and systems necessary to execute strategic and operational plans across all of the organisation's information systems."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Information assurance",
        "description": "The protection of integrity, availability, authenticity, non-repudiation and confidentiality of information and data in storage and in transit. The management of risk in a pragmatic and cost effective manner to ensure stakeholder confidence.",
        "code": "INAS",
        "level": 7,
        "levelDescription": "Directs the creation and review of an enterprise information assurance strategy to support the strategic requirements of the business. Ensures compliance between business strategies and information assurance by setting strategies, policies, standards and practices and leading the provision of information assurance expertise, advice and guidance across all of the organisation's information and information systems."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Information assurance",
        "description": "The protection of integrity, availability, authenticity, non-repudiation and confidentiality of information and data in storage and in transit. The management of risk in a pragmatic and cost effective manner to ensure stakeholder confidence.",
        "code": "INAS",
        "level": 6,
        "levelDescription": "Develops corporate Information assurance policy, standards and guidelines. Contributes to the development of organisational strategies that address the evolving business risk and information control requirements. Drives adoption of and adherence to policies and standards through the provision of expert advice and guidance in order to ensure architectural principles are applied, requirements are defined and rigorous security testing is applied. Monitors environmental and market trends and pro-actively assesses impact on business strategies, benefits and risks."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Information assurance",
        "description": "The protection of integrity, availability, authenticity, non-repudiation and confidentiality of information and data in storage and in transit. The management of risk in a pragmatic and cost effective manner to ensure stakeholder confidence.",
        "code": "INAS",
        "level": 5,
        "levelDescription": "Interprets information assurance and security policies and applies these in order to manage risks. Provides advice and guidance to ensure adoption of and adherence to information assurance architectures, strategies, policies, standards and guidelines. Uses testing to support information assurance. Contributes to the development of policies, standards and guidelines."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Analytics",
        "description": "The validation and analysis of significant volumes of data, including the ability to discover and quantify patterns and trends in numbers, symbols, text, sound and image. Relevant techniques may include statistical and data mining algorithms and machine learning methods such as rule induction, artificial neural networks, genetic algorithms and automated indexing systems.",
        "code": "INAN",
        "level": 7,
        "levelDescription": "Provides leadership and guidance for analysis of both internal and external data. Is responsible for the organisation's commitment to efficient and effective analysis of textual/numerical/visual/audio information. Identifies and establishes the veracity of external sources of information of relevance to the operational needs of the enterprise."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Analytics",
        "description": "The validation and analysis of significant volumes of data, including the ability to discover and quantify patterns and trends in numbers, symbols, text, sound and image. Relevant techniques may include statistical and data mining algorithms and machine learning methods such as rule induction, artificial neural networks, genetic algorithms and automated indexing systems.",
        "code": "INAN",
        "level": 6,
        "levelDescription": "Establishes and manages analytical methods and techniques, such as predictive analytics, enterprise decision support, retail analytics and web analytics. Plans and implements the dissemination of methods and techniques."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Analytics",
        "description": "The validation and analysis of significant volumes of data, including the ability to discover and quantify patterns and trends in numbers, symbols, text, sound and image. Relevant techniques may include statistical and data mining algorithms and machine learning methods such as rule induction, artificial neural networks, genetic algorithms and automated indexing systems.",
        "code": "INAN",
        "level": 5,
        "levelDescription": "Specifies and applies appropriate analytical techniques to create information which supports business decision-making. Formats and communicates results, using textual, numeric, graphical and other visualisation methods appropriate to the target audience."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Analytics",
        "description": "The validation and analysis of significant volumes of data, including the ability to discover and quantify patterns and trends in numbers, symbols, text, sound and image. Relevant techniques may include statistical and data mining algorithms and machine learning methods such as rule induction, artificial neural networks, genetic algorithms and automated indexing systems.",
        "code": "INAN",
        "level": 4,
        "levelDescription": "Applies a variety of analytical and visualisation techniques, in consultation with experts if appropriate, and with sensitivity to the limitations of the techniques."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Analytics",
        "description": "The validation and analysis of significant volumes of data, including the ability to discover and quantify patterns and trends in numbers, symbols, text, sound and image. Relevant techniques may include statistical and data mining algorithms and machine learning methods such as rule induction, artificial neural networks, genetic algorithms and automated indexing systems.",
        "code": "INAN",
        "level": 3,
        "levelDescription": "Undertakes analytical activities and delivers analysis outputs, in accordance with customer needs and conforming to agreed standards."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Information content publishing",
        "description": "The evaluation and application of different publishing methods and options, recognising key features, including open source and proprietary options. The management and tuning of the processes that collect, assemble and publish information, including in unstructured and semi-structured forms, for delivery to the user at the point at which it is needed. The management of copyright, data protection and other legal issues associated with publishing and re-use of published information and data.",
        "code": "ICPM",
        "level": 6,
        "levelDescription": "Develops strategies for the delivery of information and knowledge, including preferred media, and rules for formatting content. Ensures that adequate procedures, standards, tools and resources are in place to ensure the appropriate quality of material developed by information publishers within the organisation. Takes responsibility for publishing strategy, including, for example, frameworks for the overall information structure and graphical style for substantial, complex or high-profile web sites. Directs the selection of appropriate tools, templates and standards for publication in various forms, appropriate to customer expectations."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Information content publishing",
        "description": "The evaluation and application of different publishing methods and options, recognising key features, including open source and proprietary options. The management and tuning of the processes that collect, assemble and publish information, including in unstructured and semi-structured forms, for delivery to the user at the point at which it is needed. The management of copyright, data protection and other legal issues associated with publishing and re-use of published information and data.",
        "code": "ICPM",
        "level": 5,
        "levelDescription": "Develops standards and procedures to support web/digital content publishing, and manages any associated copyright or other legal issues. Takes responsibility for publishing assignments, including, for example, design of the overall structure and graphical style for substantial, complex or high-profile web sites. Understands the range of publishing options available and advises on specification and procurement, taking account of the key costs and benefits of different channels and applying objective measures of effectiveness. Selects tools, templates and standards appropriate to customer expectations (differentiating, for example, between needs such as optimisation and ease of modification). Sets design and coding standards, taking into account bandwidth and compatibility."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Information content publishing",
        "description": "The evaluation and application of different publishing methods and options, recognising key features, including open source and proprietary options. The management and tuning of the processes that collect, assemble and publish information, including in unstructured and semi-structured forms, for delivery to the user at the point at which it is needed. The management of copyright, data protection and other legal issues associated with publishing and re-use of published information and data.",
        "code": "ICPM",
        "level": 4,
        "levelDescription": "Defines and manages content management processes to meet the needs of users. Select appropriate channels through which content should be published. Uses appropriate tools and techniques to provide moderately complex interfaces to new or existing platforms and applications. Applies propriety guidelines. \nIdentifies the implications of copyright, data protection and other legal issues associated with publishing. Applies search engine optimisation techniques, and facilitates ease of use in delivered digital services."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Information content publishing",
        "description": "The evaluation and application of different publishing methods and options, recognising key features, including open source and proprietary options. The management and tuning of the processes that collect, assemble and publish information, including in unstructured and semi-structured forms, for delivery to the user at the point at which it is needed. The management of copyright, data protection and other legal issues associated with publishing and re-use of published information and data.",
        "code": "ICPM",
        "level": 3,
        "levelDescription": "Specifies and creates content management processes to meet the needs of users. Selects appropriate platforms for publishing, applying the concept of customer journey. Uses content publishing systems and publishing content across different channels, including mobile and social media. Takes account of the implications of copyright, data protection and other legal issues associated with publishing. Contributes to achievement of search engine optimisation."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Information content publishing",
        "description": "The evaluation and application of different publishing methods and options, recognising key features, including open source and proprietary options. The management and tuning of the processes that collect, assemble and publish information, including in unstructured and semi-structured forms, for delivery to the user at the point at which it is needed. The management of copyright, data protection and other legal issues associated with publishing and re-use of published information and data.",
        "code": "ICPM",
        "level": 2,
        "levelDescription": "Performs publications support activities such as drafting, illustrating, printing, etc. Understands technical publication concepts, tools and methods and the way in which these are implemented. Uses agreed procedures to upload content. Understands principles of search engine optimisation and applies them to assigned work. Obtains and analyses usage data and presents it effectively."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Information strategy",
        "title": "Information content publishing",
        "description": "The evaluation and application of different publishing methods and options, recognising key features, including open source and proprietary options. The management and tuning of the processes that collect, assemble and publish information, including in unstructured and semi-structured forms, for delivery to the user at the point at which it is needed. The management of copyright, data protection and other legal issues associated with publishing and re-use of published information and data.",
        "code": "ICPM",
        "level": 1,
        "levelDescription": "Contributes, under instruction, to publication support activities and supports the collation of data. Takes source material in various proprietary formats and uses the publishing process to create content according to appropriate guidelines."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Advice and guidance",
        "title": "Consultancy",
        "description": "The provision of advice and recommendations, based on expertise and experience, to address client needs. May deal with one specialist subject area, or can be wide ranging and address strategic business issues. May also include support for the implementation of any agreed solutions.",
        "code": "CNSL",
        "level": 7,
        "levelDescription": "Takes responsibility for a significant consultancy practice, including practice development, proposals/sales to internal or external clients, account management and managing the delivery of consultancy services over a wide range of topics."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Advice and guidance",
        "title": "Consultancy",
        "description": "The provision of advice and recommendations, based on expertise and experience, to address client needs. May deal with one specialist subject area, or can be wide ranging and address strategic business issues. May also include support for the implementation of any agreed solutions.",
        "code": "CNSL",
        "level": 6,
        "levelDescription": "Manages provision of consultancy services, and/or management of a team of consultants. In own areas of expertise, provides advice and guidance to consultants and/or the client through involvement in the delivery of consultancy services. Engages with clients and maintains client relationships. Establishes agreements/contracts and manages completion and disengagement."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Advice and guidance",
        "title": "Consultancy",
        "description": "The provision of advice and recommendations, based on expertise and experience, to address client needs. May deal with one specialist subject area, or can be wide ranging and address strategic business issues. May also include support for the implementation of any agreed solutions.",
        "code": "CNSL",
        "level": 5,
        "levelDescription": "Takes responsibility for understanding client requirements, collecting data, delivering analysis and problem resolution. Identifies, evaluates and recommends options, implementing if required. Collaborates with, and facilitates stakeholder groups, as part of formal or informal consultancy agreements. Seeks to fully address client needs, enhancing the capabilities and effectiveness of client personnel, by ensuring that proposed solutions are properly understood and appropriately exploited."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Advice and guidance",
        "title": "Technical specialism",
        "description": "The development and exploitation of expertise in any specific area of information or communications technology, technique, method, product or application area.",
        "code": "TECH",
        "level": 6,
        "levelDescription": "Provides organisational leadership and guidelines to promote the development and exploitation of specialist knowledge in the organisation."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Advice and guidance",
        "title": "Technical specialism",
        "description": "The development and exploitation of expertise in any specific area of information or communications technology, technique, method, product or application area.",
        "code": "TECH",
        "level": 5,
        "levelDescription": "Maintains an in-depth knowledge of specific specialisms, and provides expert advice regarding their application. Can supervise specialist consultancy. The specialism can be any aspect of information or communication technology, technique, method, product or application area."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Advice and guidance",
        "title": "Technical specialism",
        "description": "The development and exploitation of expertise in any specific area of information or communications technology, technique, method, product or application area.",
        "code": "TECH",
        "level": 4,
        "levelDescription": "Maintains knowledge of specific specialisms, provides detailed advice regarding their application and executes specialised tasks. The specialism can be any area of information or communication technology, technique, method, product or application area."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "Research",
        "description": "The advancement of knowledge by data gathering, innovation, experimentation, evaluation and dissemination, carried out in pursuit of a predetermined set of research goals.",
        "code": "RSCH",
        "level": 6,
        "levelDescription": "Sets research goals, makes effective proposals for the investment of funds in research projects, plays a major role in the development of the employing organisation's research policy, and supervises the work of a research function. Gains an appreciation of relevant research work, and takes a leading part in professional activities outside own employing organisation."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "Research",
        "description": "The advancement of knowledge by data gathering, innovation, experimentation, evaluation and dissemination, carried out in pursuit of a predetermined set of research goals.",
        "code": "RSCH",
        "level": 5,
        "levelDescription": "Agrees research goals and generates original and worthwhile ideas. Develops, reviews and constructively criticises ideas, possibly leading a small research team, making necessary observations and tests and carrying them through to a full practical demonstration, wherever viable and feasible. Where necessary, designs data collection tools and techniques for both qualitative and quantitative data. Presents papers at conferences, writes papers of publication quality, and presents reports to clients."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "Research",
        "description": "The advancement of knowledge by data gathering, innovation, experimentation, evaluation and dissemination, carried out in pursuit of a predetermined set of research goals.",
        "code": "RSCH",
        "level": 4,
        "levelDescription": "Contributes to research goals and builds on and refines appropriate outline ideas for the evaluation, development, demonstration and implementation of research. Reports on work carried out and may contribute significant sections of material of publication quality. Contributes to research plans and identifies appropriate opportunities for publication and dissemination of research findings."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "Research",
        "description": "The advancement of knowledge by data gathering, innovation, experimentation, evaluation and dissemination, carried out in pursuit of a predetermined set of research goals.",
        "code": "RSCH",
        "level": 3,
        "levelDescription": "Within given research goals, builds on and refines appropriate outline ideas for research, i.e. evaluation, development, demonstration and implementation. Uses available resources to gain an up-to-date knowledge of any relevant field. Reports on work carried out and may contribute sections of material of publication quality."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "Research",
        "description": "The advancement of knowledge by data gathering, innovation, experimentation, evaluation and dissemination, carried out in pursuit of a predetermined set of research goals.",
        "code": "RSCH",
        "level": 2,
        "levelDescription": "Within given research goals, assists in selection and review of credible and reliable resources to gain an up-to-date knowledge of any relevant field. Reports on work carried out and may contribute sections of material of publication quality."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "IT management",
        "description": "The management of the IT infrastructure and resources required to plan for, develop, deliver and support IT services and products to meet the needs of a business. The preparation for new or changed services, management of the change process and the maintenance of regulatory, legal and professional standards. The management of performance of systems and services in terms of their contribution to business performance and their financial costs and sustainability. The management of bought-in services. The development of continual service improvement plans to ensure the IT infrastructure adequately supports business needs.",
        "code": "ITMG",
        "level": 7,
        "levelDescription": "Sets strategy for management of technology resources, including corporate telecommunications functions, and promotes the opportunities that technology presents to the employing organisation, including the feasibility of change and its likely impact upon the business. Authorises allocation of resources for the planning, development and delivery of all information systems services and products. Responsible for IT governance. Authorises organisational policies governing the conduct of management of change initiatives and standards of professional conduct. Maintains an overview of the contribution of programmes to organisational success. Inspires creativity and flexibility in the management and application of IT. Sets strategy for monitoring and managing the performance of IT-related systems and services, in respect of their contribution to business performance and benefits to the business."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "IT management",
        "description": "The management of the IT infrastructure and resources required to plan for, develop, deliver and support IT services and products to meet the needs of a business. The preparation for new or changed services, management of the change process and the maintenance of regulatory, legal and professional standards. The management of performance of systems and services in terms of their contribution to business performance and their financial costs and sustainability. The management of bought-in services. The development of continual service improvement plans to ensure the IT infrastructure adequately supports business needs.",
        "code": "ITMG",
        "level": 6,
        "levelDescription": "Identifies and manages resources needed for the planning, development and delivery of specified information and communications systems services (including data, voice, text, audio and images). Influences senior level customers and project teams through change management initiatives, ensuring that the infrastructure is managed to provide agreed levels of service and data integrity. Takes full responsibility for budgeting, estimating, planning and objective setting. Plans and manages implementation of processes and procedures, tools and techniques for monitoring and managing the performance of automated systems and services, in respect of their contribution to business performance and benefits to the business, where the measure of success depends on achieving clearly stated business/financial goals and performance targets. Monitors performance and takes corrective action where necessary."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "IT management",
        "description": "The management of the IT infrastructure and resources required to plan for, develop, deliver and support IT services and products to meet the needs of a business. The preparation for new or changed services, management of the change process and the maintenance of regulatory, legal and professional standards. The management of performance of systems and services in terms of their contribution to business performance and their financial costs and sustainability. The management of bought-in services. The development of continual service improvement plans to ensure the IT infrastructure adequately supports business needs.",
        "code": "ITMG",
        "level": 5,
        "levelDescription": "Takes responsibility for the design, procurement, installation, upgrading, operation, control, maintenance (including storage and communication of data, voice, text, audio and images) and effective use of IT infrastructure components and monitors their performance. Provides technical management of an IT operation, ensuring that agreed service levels are met and all relevant procedures are adhered to. Schedules and supervises all maintenance and installation work. Ensures that operational problems are identified and resolved. Provides appropriate status and other reports to specialists, users and managers. Ensures that operational procedures and working practices are fit for purpose and current."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "Financial management",
        "description": "The overall financial management, control and stewardship of the IT assets and resources used in the provision of IT services, including the identification of materials and energy costs, ensuring compliance with all governance, legal and regulatory requirements.",
        "code": "FMIT",
        "level": 6,
        "levelDescription": "Develops financial planning processes and standards to support execution of business strategy and promotes adoption and adherence. Sets strategy and develops plans, policies and processes for the accounting, budgeting and, where applicable, charging of IT resources and services, including the definition of cost models and charging models. Sets, negotiates, agrees and manages all financial budgets and targets, ensuring that there is adequate funding for all IT targets and plans, especially to meet development and capacity needs.  Analyses actual expenditure, explains variances, and determines options in use of available budget to meet real needs. Assesses financial performance and instigates required improvements."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "Financial management",
        "description": "The overall financial management, control and stewardship of the IT assets and resources used in the provision of IT services, including the identification of materials and energy costs, ensuring compliance with all governance, legal and regulatory requirements.",
        "code": "FMIT",
        "level": 5,
        "levelDescription": "Advises on financial planning and budgeting. Develops financial plans and forecasts. Monitors and manages IT expenditure, ensuring that all IT financial targets are met, and examining any areas where budgets and expenditure exceed their agreed tolerances. Assists with the definition and operation of effective financial control and decision making, especially in the areas of service, projects and component cost models and the allocation and apportionment of all incurred IT costs. Analyses actual expenditure, explains variances, and advises on options in use of available budget."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "Financial management",
        "description": "The overall financial management, control and stewardship of the IT assets and resources used in the provision of IT services, including the identification of materials and energy costs, ensuring compliance with all governance, legal and regulatory requirements.",
        "code": "FMIT",
        "level": 4,
        "levelDescription": "Monitors and maintains all required financial records for compliance and audit to all agreed requirements. Assists all other areas of IT with their financial tasks, especially in the areas of identification of process, service, project and component costs and the calculation and subsequent reduction of all IT service, project, component and process failures. Contributes to financial planning and budgeting. Collates required financial data and reports for analysis and to facilitate decision making"
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "Innovation",
        "description": "The capability to recognise and exploit business opportunities provided by information and communication technology, best practices, methods and standards, to ensure more efficient and effective performance of organisations, to explore possibilities for new ways of conducting business and organisational processes, and to establish new services or businesses.",
        "code": "INOV",
        "level": 6,
        "levelDescription": "Recognises potential strategic application of information technology capabilities. Initiates and manages investigation and development of innovative methods, practices and technology, to the benefit of organisations and the community. Plays an active and dynamic role in improving the interface between all interested parties, facilitating knowledge flow to enable sharing and development of creative ideas."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "Innovation",
        "description": "The capability to recognise and exploit business opportunities provided by information and communication technology, best practices, methods and standards, to ensure more efficient and effective performance of organisations, to explore possibilities for new ways of conducting business and organisational processes, and to establish new services or businesses.",
        "code": "INOV",
        "level": 5,
        "levelDescription": "Actively monitors for, and seeks, opportunities, new methods, trends, capabilities and products to the advancement of the organisation. Clearly articulates, and formally reports potential benefits from both structural and incremental change. Encourages and motivates colleagues to share creative ideas and learn from failures."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "Business process improvement",
        "description": "The identification of new and alternative approaches to performing business activities. The analysis of business processes, including recognition of the potential for automation of the processes, assessment of the costs and potential benefits of the new approaches considered and, where appropriate, management of change, and assistance with implementation. May include the implementation of a process management capability/discipline at the enterprise level.",
        "code": "BPRE",
        "level": 7,
        "levelDescription": "Brings about significant improvements and measurable business benefits by identifying, proposing, initiating and leading significant programmes of improvement. Enhances existing approaches to process improvement and/or develops new approaches."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "Business process improvement",
        "description": "The identification of new and alternative approaches to performing business activities. The analysis of business processes, including recognition of the potential for automation of the processes, assessment of the costs and potential benefits of the new approaches considered and, where appropriate, management of change, and assistance with implementation. May include the implementation of a process management capability/discipline at the enterprise level.",
        "code": "BPRE",
        "level": 6,
        "levelDescription": "Analyses business processes; identifies alternative solutions, assesses feasibility, and recommends new approaches, typically seeking to exploit technology components. Evaluates the financial, cultural, technological, organisational and environmental factors which must be addressed in the change programme. Establishes client requirements for the implementation of significant changes in organisational mission, business functions and process, organisational roles and responsibilities, and scope or nature of service delivery."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "Business process improvement",
        "description": "The identification of new and alternative approaches to performing business activities. The analysis of business processes, including recognition of the potential for automation of the processes, assessment of the costs and potential benefits of the new approaches considered and, where appropriate, management of change, and assistance with implementation. May include the implementation of a process management capability/discipline at the enterprise level.",
        "code": "BPRE",
        "level": 5,
        "levelDescription": "Analyses business processes; identifies alternative solutions, assesses feasibility, and recommends new approaches. Contributes to evaluating the factors which must be addressed in the change programme. Helps establish requirements for the implementation of changes in the business process."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "Enterprise and business architecture",
        "description": "The creation, iteration, and maintenance of structures such as enterprise and business architectures embodying the key principles, methods and models that describe the organisation's future state, and that enable its evolution. This typically involves the interpretation of business goals and drivers; the translation of business strategy and objectives into an 'operating model'; the strategic assessment of current capabilities; the identification of required changes in capabilities; and the description of inter-relationships between  people, organisation, service, process, data, information, technology and the external environment.\n\nThe architecture development process supports the formation of the constraints, standards and guiding principles necessary to define, assure and govern the required evolution; this facilitates change in the organisation's structure, business processes, systems and infrastructure in order to achieve predictable transition to the intended state.",
        "code": "STPL",
        "level": 7,
        "levelDescription": "Directs the creation and review of an enterprise capability strategy to support the strategic requirements of the business. Identifies the business benefits of alternative strategies.\n\nDirects development of enterprise-wide architecture and processes which ensure that the strategic application of change is embedded in the management of the organisation. Ensures compliance between business strategies, enterprise transformation activities and technology directions, setting strategies, policies, standards and practices."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "Enterprise and business architecture",
        "description": "The creation, iteration, and maintenance of structures such as enterprise and business architectures embodying the key principles, methods and models that describe the organisation's future state, and that enable its evolution. This typically involves the interpretation of business goals and drivers; the translation of business strategy and objectives into an 'operating model'; the strategic assessment of current capabilities; the identification of required changes in capabilities; and the description of inter-relationships between  people, organisation, service, process, data, information, technology and the external environment.\n\nThe architecture development process supports the formation of the constraints, standards and guiding principles necessary to define, assure and govern the required evolution; this facilitates change in the organisation's structure, business processes, systems and infrastructure in order to achieve predictable transition to the intended state.",
        "code": "STPL",
        "level": 6,
        "levelDescription": "Captures and prioritises market and environmental trends, business strategies and objectives, and identifies the business benefits of alternative strategies. Establishes the contribution that technology can make to business objectives, conducting feasibility studies, producing high-level business models, and preparing business cases.\n\nLeads the creation and review of a systems capability strategy that meets the strategic requirements of the business. Develops enterprise-wide architecture and processes that ensure that the strategic application of change is embedded in the management of the organisation, ensuring the buy-in of all stakeholders.\n\nDevelops and presents business cases, for high-level initiatives, for approval, funding and prioritisation. Ensures compliance between business strategies, enterprise transformation activities and technology directions, setting strategies, policies, standards and practices."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "Enterprise and business architecture",
        "description": "The creation, iteration, and maintenance of structures such as enterprise and business architectures embodying the key principles, methods and models that describe the organisation's future state, and that enable its evolution. This typically involves the interpretation of business goals and drivers; the translation of business strategy and objectives into an 'operating model'; the strategic assessment of current capabilities; the identification of required changes in capabilities; and the description of inter-relationships between  people, organisation, service, process, data, information, technology and the external environment.\n\nThe architecture development process supports the formation of the constraints, standards and guiding principles necessary to define, assure and govern the required evolution; this facilitates change in the organisation's structure, business processes, systems and infrastructure in order to achieve predictable transition to the intended state.",
        "code": "STPL",
        "level": 5,
        "levelDescription": "Contributes to the creation and review of a systems capability strategy which meets the strategic requirements of the business. Develops models and plans to drive forward the strategy, taking advantage of opportunities to improve business performance. Takes responsibility for investigative work to determine requirements and specify effective business processes, through improvements in information systems, data management, practices, procedures, organisation and equipment."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "Business risk management",
        "description": "The planning and implementation of organisation-wide processes and procedures for the management of risk to the success or integrity of the business, especially those arising from the use of information technology, reduction or non-availability of energy supply or inappropriate disposal of materials, hardware or data.",
        "code": "BURM",
        "level": 7,
        "levelDescription": "Establishes strategy for addressing risks arising from business operations and change. Provides resources to implement the strategy, and delegates authority for detailed planning and execution of risk management activities."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "Business risk management",
        "description": "The planning and implementation of organisation-wide processes and procedures for the management of risk to the success or integrity of the business, especially those arising from the use of information technology, reduction or non-availability of energy supply or inappropriate disposal of materials, hardware or data.",
        "code": "BURM",
        "level": 6,
        "levelDescription": "Plans and manages the implementation of organisation-wide processes and procedures, tools and techniques for the identification, assessment, and management of risk inherent in the operation of business processes and of potential risks arising from planned change."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "Business risk management",
        "description": "The planning and implementation of organisation-wide processes and procedures for the management of risk to the success or integrity of the business, especially those arising from the use of information technology, reduction or non-availability of energy supply or inappropriate disposal of materials, hardware or data.",
        "code": "BURM",
        "level": 5,
        "levelDescription": "Carries out risk assessment within a defined functional or technical area of business. Uses consistent processes for identifying potential risk events, quantifying and documenting the probability of occurrence and the impact on the business. Refers to domain experts for guidance on specialised areas of risk, such as architecture and environment. Co-ordinates the development of countermeasures and contingency plans."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "Business risk management",
        "description": "The planning and implementation of organisation-wide processes and procedures for the management of risk to the success or integrity of the business, especially those arising from the use of information technology, reduction or non-availability of energy supply or inappropriate disposal of materials, hardware or data.",
        "code": "BURM",
        "level": 4,
        "levelDescription": "Investigates and reports on hazards and potential risk events within a specific function or business area."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "Sustainability strategy",
        "description": "The preparation of a sustainability strategy, taking into account any established corporate strategy, to be used as a basis for policies and planning, and covering both consumption and sources of supply of energy and materials. Evaluation and inclusion, as appropriate, of political, legislative, economic, social and technological factors. Identification of major external standards, practices or schemes to be adopted. Consultation with identified relevant parties, either internal or external. Obtaining agreement to the strategy and the commitment to act upon it.",
        "code": "SUST",
        "level": 6,
        "levelDescription": "Provides leadership and guidelines on sustainability; leads in the development of a sustainability strategy for IT, encompassing sources of supply, control and measurement of in-house utilisation, procurement of resource-efficient products and services, and legislative factors."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "Sustainability strategy",
        "description": "The preparation of a sustainability strategy, taking into account any established corporate strategy, to be used as a basis for policies and planning, and covering both consumption and sources of supply of energy and materials. Evaluation and inclusion, as appropriate, of political, legislative, economic, social and technological factors. Identification of major external standards, practices or schemes to be adopted. Consultation with identified relevant parties, either internal or external. Obtaining agreement to the strategy and the commitment to act upon it.",
        "code": "SUST",
        "level": 5,
        "levelDescription": "Contributes to strategy formation by providing in-depth analysis of one or more broad aspects of the organisation's use of energy and materials, and by recommending elements of the strategy; provides in-depth advice in own area of expertise. Provides analysis of risks arising in the areas covered."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Business strategy and planning",
        "title": "Sustainability strategy",
        "description": "The preparation of a sustainability strategy, taking into account any established corporate strategy, to be used as a basis for policies and planning, and covering both consumption and sources of supply of energy and materials. Evaluation and inclusion, as appropriate, of political, legislative, economic, social and technological factors. Identification of major external standards, practices or schemes to be adopted. Consultation with identified relevant parties, either internal or external. Obtaining agreement to the strategy and the commitment to act upon it.",
        "code": "SUST",
        "level": 4,
        "levelDescription": "Assesses and reports on how different tactical decisions affect organisational sustainability. Evaluates factors and risks (political, legislative, technological, economic, social) that impact on operational processes and strategic direction."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Technical strategy and planning",
        "title": "Emerging technology monitoring",
        "description": "The identification of new and emerging hardware, software and communication technologies and products, services, methods and techniques and the assessment of their relevance and potential value as business enablers, improvements in cost/performance or sustainability. The promotion of emerging technology awareness among staff and business management.",
        "code": "EMRG",
        "level": 6,
        "levelDescription": "Co-ordinates the identification and assessment of new and emerging hardware, software and communication technologies, products, methods and techniques. Evaluates likely relevance of these for the organisation. Provides regular briefings to staff and management."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Technical strategy and planning",
        "title": "Emerging technology monitoring",
        "description": "The identification of new and emerging hardware, software and communication technologies and products, services, methods and techniques and the assessment of their relevance and potential value as business enablers, improvements in cost/performance or sustainability. The promotion of emerging technology awareness among staff and business management.",
        "code": "EMRG",
        "level": 5,
        "levelDescription": "Monitors the market to gain knowledge and understanding of currently emerging technologies. Identifies new and emerging hardware and software technologies and products based on own area of expertise, assesses their relevance and potential value to the organisation, contributes to briefings of staff and management."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Technical strategy and planning",
        "title": "Emerging technology monitoring",
        "description": "The identification of new and emerging hardware, software and communication technologies and products, services, methods and techniques and the assessment of their relevance and potential value as business enablers, improvements in cost/performance or sustainability. The promotion of emerging technology awareness among staff and business management.",
        "code": "EMRG",
        "level": 4,
        "levelDescription": "Maintains awareness of opportunities provided by new technology to address challenges or to enable new ways of working. Within own sphere of influence, works to further organisational goals, by the study and use of emerging technologies and products. Contributes to briefings and presentations about their relevance and potential value to the organisation."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Technical strategy and planning",
        "title": "Continuity management",
        "description": "The provision of service continuity planning and support. This includes the identification of information systems which support critical business processes, the assessment of risks to those systems' availability, integrity and confidentiality and the co-ordination of planning, designing, testing and maintenance procedures and contingency plans to address exposures and maintain agreed levels of continuity. This function should be performed as part of, or in close cooperation with, the function which plans business continuity for the whole organisation.",
        "code": "COPL",
        "level": 5,
        "levelDescription": "Owns the service continuity planning process and leads the implementation of resulting plans. Coordinates the identification by specialists across the organisation of information and communication systems which support the critical business processes, and the assessment of risks to the availability, integrity, and confidentiality of those systems. Evaluates the critical risks associated with these systems and identifies priority areas for improvement. Coordinates the planning, designing, testing of maintenance procedures and contingency plans to address exposure to risk and ensure that agreed levels of continuity are maintained."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Technical strategy and planning",
        "title": "Continuity management",
        "description": "The provision of service continuity planning and support. This includes the identification of information systems which support critical business processes, the assessment of risks to those systems' availability, integrity and confidentiality and the co-ordination of planning, designing, testing and maintenance procedures and contingency plans to address exposures and maintain agreed levels of continuity. This function should be performed as part of, or in close cooperation with, the function which plans business continuity for the whole organisation.",
        "code": "COPL",
        "level": 4,
        "levelDescription": "Provides input to the service continuity planning process and implements resulting plans."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Technical strategy and planning",
        "title": "Sustainability management",
        "description": "The specification, planning and management of changes to assets, systems, processes or practices intended to reduce or constrain consumption and/or disposal of energy or materials, within the context of company strategy and policy, and regulatory and contractual requirements. The evaluation of changes to ensure that planned benefits have been obtained. The specification of remedial and process improvement actions in cases where planned benefits have not been obtained. The identification and planning of alternative sources of supply.",
        "code": "SUMI",
        "level": 6,
        "levelDescription": "Establishes the overall approach to the incorporation of sustainability requirements and factors into the specification and design of systems and services; determines relevant methods and tools to be used to address energy efficiency issues in specification, design and operation."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Technical strategy and planning",
        "title": "Sustainability management",
        "description": "The specification, planning and management of changes to assets, systems, processes or practices intended to reduce or constrain consumption and/or disposal of energy or materials, within the context of company strategy and policy, and regulatory and contractual requirements. The evaluation of changes to ensure that planned benefits have been obtained. The specification of remedial and process improvement actions in cases where planned benefits have not been obtained. The identification and planning of alternative sources of supply.",
        "code": "SUMI",
        "level": 5,
        "levelDescription": "Plans and implements new practices that ensure that sustainability matters are appropriately addressed in specification, design and operation of systems and services. Recommends methods, tools and practices to be used. Establishes organisation-wide practices for the disposal of materials. Sets standards for the conformance of components and services to efficient use of energy and materials."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Technical strategy and planning",
        "title": "Network planning",
        "description": "The creation and maintenance of overall network plans, encompassing the communication of data, voice, text and image, in the support of an organisation's business strategy. This includes participation in the creation of service level agreements and the planning of all aspects of infrastructure necessary to ensure provision of network services to meet such agreements. Physical implementation may include copper wire, fibre-optic, wireless, or any other technology.",
        "code": "NTPL",
        "level": 6,
        "levelDescription": "Creates and maintains overall network plans to support the organisation's business strategy, agrees service level agreements with customers and plans all aspects of the infrastructure necessary to ensure provision of network services to meet such agreements."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Technical strategy and planning",
        "title": "Network planning",
        "description": "The creation and maintenance of overall network plans, encompassing the communication of data, voice, text and image, in the support of an organisation's business strategy. This includes participation in the creation of service level agreements and the planning of all aspects of infrastructure necessary to ensure provision of network services to meet such agreements. Physical implementation may include copper wire, fibre-optic, wireless, or any other technology.",
        "code": "NTPL",
        "level": 5,
        "levelDescription": "Creates and maintains network plans for own area of responsibility, contributes to setting service level agreements, and plans the infrastructure necessary to provide the network services to meet such agreements."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Technical strategy and planning",
        "title": "Solution architecture",
        "description": "The design and communication of high-level structures to enable and guide the design and development of integrated solutions that meet current and future business needs. In addition to technology components, solution architecture encompasses changes to service, process, organisation, and operating models. Architecture definition must demonstrate how requirements (such as automation of business processes) are met, any requirements which are not fully met, and any options or considerations which require a business decision. The provision of comprehensive guidance on the development of, and modifications to, solution components to ensure that they take account of relevant architectures, strategies, policies, standards and practices (including security) and that existing and planned solution components remain compatible.",
        "code": "ARCH",
        "level": 6,
        "levelDescription": "Leads the development of architectures for complex systems, ensuring consistency with specified requirements agreed with both external, and internal customers. Takes full responsibility for the balance between functional, service quality and systems management requirements within a significant area of the organisation. Establishes policy and strategy for the selection of systems architecture components, and co-ordinates design activities, promoting the discipline to ensure consistency. Ensures that appropriate standards (corporate, industry, national and international) are adhered to. Within a business change programme, manages the target design, policies and standards, working proactively to maintain a stable, viable architecture and ensure consistency of design across projects within the programme."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Technical strategy and planning",
        "title": "Solution architecture",
        "description": "The design and communication of high-level structures to enable and guide the design and development of integrated solutions that meet current and future business needs. In addition to technology components, solution architecture encompasses changes to service, process, organisation, and operating models. Architecture definition must demonstrate how requirements (such as automation of business processes) are met, any requirements which are not fully met, and any options or considerations which require a business decision. The provision of comprehensive guidance on the development of, and modifications to, solution components to ensure that they take account of relevant architectures, strategies, policies, standards and practices (including security) and that existing and planned solution components remain compatible.",
        "code": "ARCH",
        "level": 5,
        "levelDescription": "Uses appropriate tools, including logical models of components and interfaces, to contribute to the development of systems architectures in specific business or functional areas. Produces detailed component specifications and translates these into detailed designs for implementation using selected products. Within a business change programme, assists in the preparation of technical plans and cooperates with business assurance and project staff to ensure that appropriate technical resources are made available. Provides advice on technical aspects of system development and integration (including requests for changes, deviations from specifications, etc.) and ensures that relevant technical strategies, policies, standards and practices (including security) are applied correctly."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Technical strategy and planning",
        "title": "Data management",
        "description": "The management of practices and processes to ensure the security, integrity, safety and availability of all forms of data and data structures that make up the organisation's information. The management of data and information in all its forms and the analysis of information structure (including logical analysis of taxonomies, data and metadata). The development of innovative ways of managing the information assets of the organisation.",
        "code": "DATM",
        "level": 6,
        "levelDescription": "From an understanding of current and future business, derives an overall strategy of data management, within an established information architecture (including both structured and unstructured data), that supports the development and secure operation of existing and new information and digital services. Takes overall responsibility for planning effective data storage, security, sharing and publishing within the organisation. Plans establishes and manages processes to access and independently validate external information from multiple sources, on a regular and consistent basis."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Technical strategy and planning",
        "title": "Data management",
        "description": "The management of practices and processes to ensure the security, integrity, safety and availability of all forms of data and data structures that make up the organisation's information. The management of data and information in all its forms and the analysis of information structure (including logical analysis of taxonomies, data and metadata). The development of innovative ways of managing the information assets of the organisation.",
        "code": "DATM",
        "level": 5,
        "levelDescription": "Plans effective data storage, sharing and publishing within the organisation. Independently validates external information from multiple sources. Assesses issues which might prevent the organisation from making maximum use of its information assets. Where possible, derives data management structures to support consistency of information retrieval, combination, analysis, pattern recognition and interpretation, throughout the organisation. Devises and implements data management processes, including classification, security, retrieval and retention processes."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Technical strategy and planning",
        "title": "Data management",
        "description": "The management of practices and processes to ensure the security, integrity, safety and availability of all forms of data and data structures that make up the organisation's information. The management of data and information in all its forms and the analysis of information structure (including logical analysis of taxonomies, data and metadata). The development of innovative ways of managing the information assets of the organisation.",
        "code": "DATM",
        "level": 4,
        "levelDescription": "Takes responsibility for the accessibility, retrievability and security of specific subsets of data. Assesses the integrity of data from multiple sources (including, for example, from sensors  measurement systems). Provides advice on the transformation of data/information from one format/medium to another, where appropriate. Maintains and implements information handling procedures. Enables the availability, integrity and searchability of information through the application of formal data structures and protection measures. Manipulates specific data from information services, to satisfy local or specific information needs."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Technical strategy and planning",
        "title": "Data management",
        "description": "The management of practices and processes to ensure the security, integrity, safety and availability of all forms of data and data structures that make up the organisation's information. The management of data and information in all its forms and the analysis of information structure (including logical analysis of taxonomies, data and metadata). The development of innovative ways of managing the information assets of the organisation.",
        "code": "DATM",
        "level": 3,
        "levelDescription": "Applies ethical and robust techniques in the transformation of data from one format/medium to another, in line with organisational policies and procedures and being sensitive to risks around the use of information."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Technical strategy and planning",
        "title": "Data management",
        "description": "The management of practices and processes to ensure the security, integrity, safety and availability of all forms of data and data structures that make up the organisation's information. The management of data and information in all its forms and the analysis of information structure (including logical analysis of taxonomies, data and metadata). The development of innovative ways of managing the information assets of the organisation.",
        "code": "DATM",
        "level": 2,
        "levelDescription": "Assists in providing accessibility, retrievability, security and protection of data in an ethical manner."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Technical strategy and planning",
        "title": "Methods and tools",
        "description": "Ensuring that appropriate methods and tools for the planning, development, testing, operation, management and maintenance of systems are adopted and used effectively throughout the organisation.",
        "code": "METL",
        "level": 6,
        "levelDescription": "Sets direction and leads in the introduction and use of techniques, methodologies and tools, to match overall business requirements (both current and future), ensuring consistency across all user groups."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Technical strategy and planning",
        "title": "Methods and tools",
        "description": "Ensuring that appropriate methods and tools for the planning, development, testing, operation, management and maintenance of systems are adopted and used effectively throughout the organisation.",
        "code": "METL",
        "level": 5,
        "levelDescription": "Promotes and ensures use of appropriate techniques, methodologies and tools."
    },
    {
        "category": "Strategy and architecture",
        "subCategory": "Technical strategy and planning",
        "title": "Methods and tools",
        "description": "Ensuring that appropriate methods and tools for the planning, development, testing, operation, management and maintenance of systems are adopted and used effectively throughout the organisation.",
        "code": "METL",
        "level": 4,
        "levelDescription": "Provides expertise and support on use of methods and tools."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change implementation",
        "title": "Portfolio management",
        "description": "The development and application of a systematic management framework to define and deliver a portfolio of programmes, projects and/or ongoing services, in support of specific business strategies and objectives. Includes the implementation of a strategic investment appraisal and decision making process based on a clear understanding of cost, risk, inter-dependencies, and impact on existing business activities, enabling measurement and objective evaluation of potential changes and the benefits to be realised. The prioritisation of resource utilisation and changes to be implemented. The regular review of portfolios. The management of the service pipeline (proposed or in development), service catalogue (live or available for deployment) and retired services.",
        "code": "POMG",
        "level": 7,
        "levelDescription": "Leads the definition, implementation and review of the organisation's portfolio management framework. Authorises the structure of portfolios and is responsible for alignment with business strategy  objectives and with emerging IT and digital opportunities. Sets parameters for the prioritisation of resources and the changes to be implemented. Recommends and implements corrective action by engaging and influencing senior management. Leads the on-going monitoring and review of portfolios for impact on current business activities and the strategic benefits to be realised. Is responsible for implementing effective portfolio governance arrangements supported by effective reporting."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change implementation",
        "title": "Portfolio management",
        "description": "The development and application of a systematic management framework to define and deliver a portfolio of programmes, projects and/or ongoing services, in support of specific business strategies and objectives. Includes the implementation of a strategic investment appraisal and decision making process based on a clear understanding of cost, risk, inter-dependencies, and impact on existing business activities, enabling measurement and objective evaluation of potential changes and the benefits to be realised. The prioritisation of resource utilisation and changes to be implemented. The regular review of portfolios. The management of the service pipeline (proposed or in development), service catalogue (live or available for deployment) and retired services.",
        "code": "POMG",
        "level": 6,
        "levelDescription": "Leads the definition of a portfolio of programmes, projects, and/or on-going service provision. Engages and influences senior managers to ensure the portfolio will deliver the agreed business objectives. Plans, schedules, monitors and reports on activities related to the portfolio to ensure that each part of the portfolio contributes to the overall achievement of the portfolio. Collects, summarises and reports on portfolio KPIs often through the deployment of business management processes and systems. Identifies issues with portfolio structure, cost, risk, inter-dependencies, impact on current business activities and the strategic benefits to be realised. Notifies projects/programmes/change initiatives of issues and recommends and monitors corrective action. Reports on portfolio status as appropriate."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change implementation",
        "title": "Portfolio management",
        "description": "The development and application of a systematic management framework to define and deliver a portfolio of programmes, projects and/or ongoing services, in support of specific business strategies and objectives. Includes the implementation of a strategic investment appraisal and decision making process based on a clear understanding of cost, risk, inter-dependencies, and impact on existing business activities, enabling measurement and objective evaluation of potential changes and the benefits to be realised. The prioritisation of resource utilisation and changes to be implemented. The regular review of portfolios. The management of the service pipeline (proposed or in development), service catalogue (live or available for deployment) and retired services.",
        "code": "POMG",
        "level": 5,
        "levelDescription": "Ensures that programme/project leads and/or service owners adhere to the agreed portfolio management approach and timetable and that they provide the appropriate information to agreed targets of timelines and accuracy. Produces reports as appropriate for portfolio governance, including making recommendations for changes to the portfolio."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change implementation",
        "title": "Programme management",
        "description": "The identification, planning and coordination of a set of related projects within a programme of business change, to manage their interdependencies in support of specific business strategies and objectives. The maintenance of a strategic view over the set of projects, providing the framework for implementing business initiatives, or large-scale change, by conceiving, maintaining and communicating a vision of the outcome of the programme and associated benefits. (The vision, and the means of achieving it, may change as the programme progresses). Agreement of business requirements, and translation of requirements into operational plans. Determination, monitoring, and review of programme scope, costs, and schedule, programme resources, inter-dependencies and programme risk.",
        "code": "PGMG",
        "level": 7,
        "levelDescription": "Sets organisational strategy governing the direction and conduct of programme management, including application of appropriate methodologies. Plans, directs, and co-ordinates activities to manage and implement complex programmes from contract /proposal initiation to full integration with 'business as usual'. Aligns the programme objectives with business objectives, and authorises the selection and planning of all related projects and activities. Plans, schedules, monitors, and reports on activities related to the programme, ensuring that there are appropriate and effective governance arrangements, supported by comprehensive reporting and communication."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change implementation",
        "title": "Programme management",
        "description": "The identification, planning and coordination of a set of related projects within a programme of business change, to manage their interdependencies in support of specific business strategies and objectives. The maintenance of a strategic view over the set of projects, providing the framework for implementing business initiatives, or large-scale change, by conceiving, maintaining and communicating a vision of the outcome of the programme and associated benefits. (The vision, and the means of achieving it, may change as the programme progresses). Agreement of business requirements, and translation of requirements into operational plans. Determination, monitoring, and review of programme scope, costs, and schedule, programme resources, inter-dependencies and programme risk.",
        "code": "PGMG",
        "level": 6,
        "levelDescription": "Plans, directs, and co-ordinates activities to manage and implement a programme from contract /proposal initiation to final operational stage including the transition into 'business-as-usual'; plans, schedules, monitors, and reports on activities related to the programme. Ensures that programmes are managed to realise business benefits and that programme management is informed by an awareness of current technical developments."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change implementation",
        "title": "Project management",
        "description": "The management of projects, typically (but not exclusively) involving the development and implementation of business processes to meet identified business needs, acquiring and utilising the necessary resources and skills, within agreed parameters of cost, timescales, and quality.",
        "code": "PRMG",
        "level": 7,
        "levelDescription": "Sets organisational strategy governing the direction and conduct of project management, including application of appropriate methodologies. Authorises the management of large scale projects. Leads project planning, scheduling, controlling and reporting activities for strategic, high impact, high risk projects. Manages risk and ensures that solutions to problems are implemented in line with change control processes."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change implementation",
        "title": "Project management",
        "description": "The management of projects, typically (but not exclusively) involving the development and implementation of business processes to meet identified business needs, acquiring and utilising the necessary resources and skills, within agreed parameters of cost, timescales, and quality.",
        "code": "PRMG",
        "level": 6,
        "levelDescription": "Takes full responsibility for the definition, documentation and successful completion of complex projects (typically with significant business, political, or high-profile impact, and high-risk dependencies). Selects methods and tools, using iterative techniques where appropriate, ensuring that effective project control, change control, risk management and testing processes are maintained.  Monitors and controls resources, revenue and capital costs against the project budget and manages expectations of all project stakeholders."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change implementation",
        "title": "Project management",
        "description": "The management of projects, typically (but not exclusively) involving the development and implementation of business processes to meet identified business needs, acquiring and utilising the necessary resources and skills, within agreed parameters of cost, timescales, and quality.",
        "code": "PRMG",
        "level": 5,
        "levelDescription": "Takes full responsibility for the definition, approach, facilitation and satisfactory completion of medium-scale projects (typically with direct business impact and firm deadlines). Identifies, assesses and manages risks to the success of the project. Ensures that realistic project plans are maintained and ensures regular and accurate communication to stakeholders, consistent with the methods in use (agile, waterfall, etc). Ensures Quality reviews occur on schedule and according to procedure. Manages the change control procedure, and ensures that project deliverables are completed within agreed cost, timescale and resource budgets, and are signed off. Provides effective leadership to the project team, and takes appropriate action where team performance deviates from agreed tolerances."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change implementation",
        "title": "Project management",
        "description": "The management of projects, typically (but not exclusively) involving the development and implementation of business processes to meet identified business needs, acquiring and utilising the necessary resources and skills, within agreed parameters of cost, timescales, and quality.",
        "code": "PRMG",
        "level": 4,
        "levelDescription": "Defines, documents and carries out small projects or sub-projects (typically less than six months, with  limited budget, limited interdependency with other projects, and no significant strategic impact), alone or with a small team, actively participating in all phases. Identifies, assesses and manages risks to the success of the project. Agrees project approach with stakeholders, and prepares realistic plans (including quality, risk and communications plans) and tracks activities against the project schedule, managing stakeholder involvement as appropriate. Monitors costs, timescales and resources used, and takes action where these deviate from agreed tolerances. Ensures that own projects are formally closed and, where appropriate, subsequently reviewed, and that lessons learned are recorded."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change implementation",
        "title": "Portfolio, programme and project support",
        "description": "The provision of support and guidance on portfolio, programme and project management processes, procedures, tools and techniques. Support includes definition of portfolios, programmes, and projects; advice on the development, production and maintenance of business cases; time, resource, cost and exception plans, and the use of related software tools. Tracking and reporting of programme/project progress and performance are also covered, as is the capability to facilitate all aspects of portfolio/ programme/ project meetings, workshops and documentation.",
        "code": "PROF",
        "level": 5,
        "levelDescription": "Takes responsibility for the provision of portfolio, programme and project support. Advises on the available standards, procedures, methods, tools and techniques. Evaluates project and/or programme performance and recommends changes where necessary. Contributes to reviews and audits of project and programme management to ensure conformance to standards."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change implementation",
        "title": "Portfolio, programme and project support",
        "description": "The provision of support and guidance on portfolio, programme and project management processes, procedures, tools and techniques. Support includes definition of portfolios, programmes, and projects; advice on the development, production and maintenance of business cases; time, resource, cost and exception plans, and the use of related software tools. Tracking and reporting of programme/project progress and performance are also covered, as is the capability to facilitate all aspects of portfolio/ programme/ project meetings, workshops and documentation.",
        "code": "PROF",
        "level": 4,
        "levelDescription": "Takes responsibility for the provision of support services to projects. Uses and recommends project control solutions for planning, scheduling and tracking projects. Sets up and provides detailed guidance on project management software, procedures, processes, tools and techniques. Supports programme or project control boards, project assurance teams and quality review meetings. Provides basic guidance on individual project proposals. May be involved in aspects of supporting a programme by providing a cross programme view on risk, change, quality, finance or configuration management."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change implementation",
        "title": "Portfolio, programme and project support",
        "description": "The provision of support and guidance on portfolio, programme and project management processes, procedures, tools and techniques. Support includes definition of portfolios, programmes, and projects; advice on the development, production and maintenance of business cases; time, resource, cost and exception plans, and the use of related software tools. Tracking and reporting of programme/project progress and performance are also covered, as is the capability to facilitate all aspects of portfolio/ programme/ project meetings, workshops and documentation.",
        "code": "PROF",
        "level": 3,
        "levelDescription": "Uses recommended portfolio, programme and project control solutions for planning, scheduling and tracking. Sets up project files, compiles and distributes reports. Provides administrative services to project boards, project assurance teams and quality review meetings. Provides guidance on project management software, procedures, processes, tools and techniques."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change implementation",
        "title": "Portfolio, programme and project support",
        "description": "The provision of support and guidance on portfolio, programme and project management processes, procedures, tools and techniques. Support includes definition of portfolios, programmes, and projects; advice on the development, production and maintenance of business cases; time, resource, cost and exception plans, and the use of related software tools. Tracking and reporting of programme/project progress and performance are also covered, as is the capability to facilitate all aspects of portfolio/ programme/ project meetings, workshops and documentation.",
        "code": "PROF",
        "level": 2,
        "levelDescription": "Assists with the compilation of portfolio, programme and project management reports. Maintains programme and project files from supplied actual and forecast data."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change implementation",
        "title": "Portfolio, programme and project support",
        "description": "The provision of support and guidance on portfolio, programme and project management processes, procedures, tools and techniques. Support includes definition of portfolios, programmes, and projects; advice on the development, production and maintenance of business cases; time, resource, cost and exception plans, and the use of related software tools. Tracking and reporting of programme/project progress and performance are also covered, as is the capability to facilitate all aspects of portfolio/ programme/ project meetings, workshops and documentation.",
        "code": "PROF",
        "level": 6,
        "levelDescription": "Defines the approach / policy and sets standards for the support provided for managing and monitoring portfolios, programmes, and projects. This can also include: the governance / management of resources,  directing and leading the implementation and on-going operation of an effective service organisation, ensuring delivery of effective services / resources in line with current and planned demand and reviewing the effective provision."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Business analysis",
        "description": "The methodical investigation, analysis, review and documentation of all or part of a business in terms of business functions and processes, the information used and the data on which the information is based. The definition of requirements for improving processes and systems, reducing their costs, enhancing their sustainability, and the quantification of potential business benefits. The collaborative creation and iteration of viable specifications and acceptance criteria in preparation for the deployment of information and communication systems.",
        "code": "BUAN",
        "level": 6,
        "levelDescription": "Takes full responsibility for business analysis within a significant segment of an organisation where the advice given and decisions made will have a measurable impact on the profitability or effectiveness of the organisation. Establishes the contribution that technology can make to business objectives, defining strategies, validating and justifying business needs, conducting feasibility studies, producing high-level and detailed business models, preparing business cases, overseeing development and implementation of solutions, taking into account the implications of change on the organisation and all stakeholders. Guides senior management towards accepting change brought about through process and organisational change."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Business analysis",
        "description": "The methodical investigation, analysis, review and documentation of all or part of a business in terms of business functions and processes, the information used and the data on which the information is based. The definition of requirements for improving processes and systems, reducing their costs, enhancing their sustainability, and the quantification of potential business benefits. The collaborative creation and iteration of viable specifications and acceptance criteria in preparation for the deployment of information and communication systems.",
        "code": "BUAN",
        "level": 5,
        "levelDescription": "Takes responsibility for investigative work to determine business requirements and specify effective business processes, through improvements in information systems, information management, practices, procedures, and organisation change. Applies and monitors the use of modelling and analysis tools, methods and standards, giving special consideration to business perspectives. Collaborates with stakeholders at all levels, in the conduct of investigations for strategy studies, business requirements specifications and feasibility studies. Prepares business cases which define potential benefits, options for achieving these benefits through development of new or changed processes, and associated business risks."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Business analysis",
        "description": "The methodical investigation, analysis, review and documentation of all or part of a business in terms of business functions and processes, the information used and the data on which the information is based. The definition of requirements for improving processes and systems, reducing their costs, enhancing their sustainability, and the quantification of potential business benefits. The collaborative creation and iteration of viable specifications and acceptance criteria in preparation for the deployment of information and communication systems.",
        "code": "BUAN",
        "level": 4,
        "levelDescription": "Investigates operational requirements, problems, and opportunities, seeking effective business solutions through improvements in automated and non-automated components of new or changed processes. Assists in the analysis of stakeholder objectives, and the underlying issues arising from investigations into business requirements and problems, and identifies options for consideration. Works iteratively with stakeholders, to identify potential benefits and available options for consideration, and in defining acceptance tests."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Business analysis",
        "description": "The methodical investigation, analysis, review and documentation of all or part of a business in terms of business functions and processes, the information used and the data on which the information is based. The definition of requirements for improving processes and systems, reducing their costs, enhancing their sustainability, and the quantification of potential business benefits. The collaborative creation and iteration of viable specifications and acceptance criteria in preparation for the deployment of information and communication systems.",
        "code": "BUAN",
        "level": 3,
        "levelDescription": "Investigates operational needs and problems, and opportunities, contributing to the recommendation of improvements in automated and non-automated components of new or changed processes and organisation. Assists in defining acceptance tests for these recommendations."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Requirements definition and management",
        "description": "The definition and management of the business goals and scope of change initiatives. The specification of business requirements to a level that enables effective delivery of agreed changes.",
        "code": "REQM",
        "level": 6,
        "levelDescription": "Determines policy on discovery, analysis and documentation of requirements. Defines requirements standards and quality targets for an organisation in agreement with key stakeholders. Organises scoping and business priority setting for strategic business changes involving business policy-makers and direction setters."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Requirements definition and management",
        "description": "The definition and management of the business goals and scope of change initiatives. The specification of business requirements to a level that enables effective delivery of agreed changes.",
        "code": "REQM",
        "level": 5,
        "levelDescription": "Facilitates scoping and business priority setting for large or complex changes, engaging senior stakeholders as required. Selects the most appropriate means of representing business requirements in the context of a specific change initiative. Drives the requirements elicitation process where necessary, identifying what stakeholder input is required. Obtains formal agreement from a large and diverse range of potentially senior stakeholders and recipients to the scope and requirements, plus the establishment of a base-line on which delivery of a solution can commence. Takes responsibility for the investigation and application of changes to programme scope. Identifies the impact on business requirements of external impacts affecting a programme or project."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Requirements definition and management",
        "description": "The definition and management of the business goals and scope of change initiatives. The specification of business requirements to a level that enables effective delivery of agreed changes.",
        "code": "REQM",
        "level": 4,
        "levelDescription": "Facilitates scoping and business priority-setting for change initiatives of medium size and complexity. Contributes to selection of the most appropriate means of representing business requirements in the context of a specific change initiative, ensuring traceability back to source. Discovers and analyses requirements for fitness for purpose as well as adherence to business objectives and consistency, challenging positively as appropriate. Obtains formal agreement by stakeholders and recipients to scope and requirements and establishes a base-line on which delivery of a solution can commence. Manages requests for and the application of changes to base-lined requirements. Identifies the impact on business requirements of interim (e.g. migration) scenarios as well as the required end position."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Requirements definition and management",
        "description": "The definition and management of the business goals and scope of change initiatives. The specification of business requirements to a level that enables effective delivery of agreed changes.",
        "code": "REQM",
        "level": 3,
        "levelDescription": "Defines scope and business priorities for small-scale changes and may assist in larger scale scoping exercises. Elicits and discovers requirements from operational management and other stakeholders. Selects appropriate techniques for the elicitation of detailed requirements taking into account the nature of the required changes, established practice and the characteristics and culture of those providing the requirements. Specifies and documents business requirements as directed, ensuring traceability back to source. Analyses them for adherence to business objectives and for consistency, challenging positively as appropriate. Works with stakeholders to prioritise requirements."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Requirements definition and management",
        "description": "The definition and management of the business goals and scope of change initiatives. The specification of business requirements to a level that enables effective delivery of agreed changes.",
        "code": "REQM",
        "level": 2,
        "levelDescription": "Uses established techniques as directed to identify current problems and elicit, specify and document business functional, data and non-functional requirements for simple subject areas with clearly-defined boundaries. Assists in more complex requirements activities and with the processes for establishing agreed baselines for change and managing the assessment and application of requested changes to those requirements."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Business process testing",
        "description": "The planning, design, management, execution and reporting of business process tests and usability evaluations. The application of evaluation skills to the assessment of the ergonomics, usability and fitness for purpose of defined processes. This includes the synthesis of test tasks to be performed (from statement of user needs and user interface specification), the design of an evaluation programme, the selection of user samples, the analysis of performance, and inputting results to the development team.",
        "code": "BPTS",
        "level": 6,
        "levelDescription": "Is responsible for organisational commitment to high standards in human factors. Specifies ergonomics standards and methods to meet organisational objectives. Sets the policy and standards for business process testing. Manages the design and execution of business process tests, usability evaluations, network and business trials, confidence tests. Maintains an overview of the business environment, required outcomes and potential exposures."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Business process testing",
        "description": "The planning, design, management, execution and reporting of business process tests and usability evaluations. The application of evaluation skills to the assessment of the ergonomics, usability and fitness for purpose of defined processes. This includes the synthesis of test tasks to be performed (from statement of user needs and user interface specification), the design of an evaluation programme, the selection of user samples, the analysis of performance, and inputting results to the development team.",
        "code": "BPTS",
        "level": 5,
        "levelDescription": "Designs and manages tests of new/updated processes. Specifies test environment for whole life-cycle testing (e.g. using model office concept). Manages selection/creation of relevant scenarios for testing and ensures that tests reflect realistic operational business conditions. Ensure tests and results are documented, reported to stakeholders and are available for specification of user instructions. Highlights issues and risks identified during testing to business stakeholders. Provides specialist guidance and advice to less experienced colleagues and users to ensure that test are conducted in an appropriate manner."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Business process testing",
        "description": "The planning, design, management, execution and reporting of business process tests and usability evaluations. The application of evaluation skills to the assessment of the ergonomics, usability and fitness for purpose of defined processes. This includes the synthesis of test tasks to be performed (from statement of user needs and user interface specification), the design of an evaluation programme, the selection of user samples, the analysis of performance, and inputting results to the development team.",
        "code": "BPTS",
        "level": 4,
        "levelDescription": "Specifies and develops test scenarios to test that new/updated processes deliver improved ways of working for the end user at the same time as delivering efficiencies and planned business benefits. Records and analyses test results, and reports any unexpected or unsatisfactory outcomes. Uses test plans and outcomes to specify user instructions."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Change implementation planning and management",
        "description": "The definition and management of the process for deploying and integrating new digital capabilities into the business in a way that is sensitive to and fully compatible with business operations.",
        "code": "CIPM",
        "level": 6,
        "levelDescription": "Ensures that there is a business perspective on how any new technical capabilities will be integrated into the business, including planning around key business cycles, selecting appropriate customers for migration, etc. Initiates the business implementation plan, including all the activities that the business needs to do to prepare for new technical components and technologies. Ensures sites deliver site implementation plans that align with the overall plan. Tracks and reports against these activities to ensure progress. Defines and manages the activities to ensure achievement of the projected business benefits after delivery. Outlines key business engagement messages that need to be communicated throughout the programme/project."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Change implementation planning and management",
        "description": "The definition and management of the process for deploying and integrating new digital capabilities into the business in a way that is sensitive to and fully compatible with business operations.",
        "code": "CIPM",
        "level": 5,
        "levelDescription": "Creates the business readiness plan, taking into consideration IT deployment, data migration, capability deployment (training and engagement activities) and any business activities required to integrate new digital processes or jobs into the \"business as usual\" environment. Determines the readiness levels of business users with regard to upcoming changes; uncovers readiness gaps and creates and implements action plans to close the gaps prior to going live. Assists the user community in the provision of transition support and change planning, and liaises with the project team. Monitors and reports progress on business readiness targets, business engagement activity, training design and deployment activities, key operational metrics and return to productivity measures. Defines the series and sequence of activities to bring stakeholders to the required level of commitment, prior to going live."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Organisation design and implementation",
        "description": "The design and implementation of an integrated organisation structure, role profiles, culture, performance measurements, competencies and skills, to facilitate strategies for change and for training to enable the change. The identification of key attributes of the culture and the key principles and factors for addressing location strategy.",
        "code": "ORDI",
        "level": 6,
        "levelDescription": "Anticipates major changes affecting the organisation, and mobilises resources to implement changes. Advises business managers about the implications of planned IT-enabled change on the business, on processes, on staff and on customers. Initiates the definition of new organisation boundaries, and creates future organisation design, including location strategy and the number of locations required. Outlines performance measurement objectives and the high level implementation approach."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Organisation design and implementation",
        "description": "The design and implementation of an integrated organisation structure, role profiles, culture, performance measurements, competencies and skills, to facilitate strategies for change and for training to enable the change. The identification of key attributes of the culture and the key principles and factors for addressing location strategy.",
        "code": "ORDI",
        "level": 5,
        "levelDescription": "Conducts business impact assessment to identify how the changes from the \"as-is\" processes, systems, and structures to the \"to-be\" processes, systems and structures impact specific organisations and roles. Outlines how the organisation structure, jobs, teams and roles and staff development need to change to enable the future business processes. Aligns existing jobs/organisational structures to new processes."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Benefits management",
        "description": "Monitoring for the emergence and effective realisation of anticipated benefits (typically specified as part of the business case for a change programme or project). Action (typically by the programme management team) to optimise the business impact of individual and combined benefits.",
        "code": "BENM",
        "level": 6,
        "levelDescription": "Promotes the change programme vision to staff at all levels of the business operation, brings order to complex situations, and keeps a focus on business objectives. Works with senior people responsible for the line business operation, to ensure maximum improvements are made in the business operations as groups of projects deliver their products into operational use. Maintains the business case for funding the programme and confirms continuing business viability of the programme at regular intervals."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Benefits management",
        "description": "Monitoring for the emergence and effective realisation of anticipated benefits (typically specified as part of the business case for a change programme or project). Action (typically by the programme management team) to optimise the business impact of individual and combined benefits.",
        "code": "BENM",
        "level": 5,
        "levelDescription": "Identifies specific measures and mechanisms by which benefits can be measured, and plans to activate these mechanisms at the required time. Monitors benefits against what was predicted in the business case and ensures that all participants are informed and involved throughout the change programme and fully prepared to exploit the new operational business environment once it is in place. Supports senior management to ensure that all plans, work packages and deliverables are aligned to the expected benefits and leads activities required in the realisation of the benefits of each part of the change programme."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Business modelling",
        "description": "The production of abstract or distilled representations of real world, business or gaming situations in traditional or trans-media applications, to aid the communication and understanding of existing, conceptual or proposed scenarios. Predominantly focused around the representation of processes, roles, data, organisation and time. Models may be used to represent a subject at varying levels of detail and decomposition.",
        "code": "BSMO",
        "level": 6,
        "levelDescription": "Defines modelling standards and quality targets for an organisation. Has continuing responsibility for the maintenance of models for a designated function. Initiates organisation-wide modelling improvement activities and obtains customer buy-in to general changes. May represent own organisation as a modelling expert in industry initiatives."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Business modelling",
        "description": "The production of abstract or distilled representations of real world, business or gaming situations in traditional or trans-media applications, to aid the communication and understanding of existing, conceptual or proposed scenarios. Predominantly focused around the representation of processes, roles, data, organisation and time. Models may be used to represent a subject at varying levels of detail and decomposition.",
        "code": "BSMO",
        "level": 5,
        "levelDescription": "Produces models in support of business strategy. Has in-depth knowledge of a broad range of industry-wide modelling techniques. Advises on the choice of techniques and approach and influences customers accordingly. Capable of developing bespoke models for unusual contexts. Responsible for planning and co-ordinating team modelling activities and for ensuring the quality of their work."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Business modelling",
        "description": "The production of abstract or distilled representations of real world, business or gaming situations in traditional or trans-media applications, to aid the communication and understanding of existing, conceptual or proposed scenarios. Predominantly focused around the representation of processes, roles, data, organisation and time. Models may be used to represent a subject at varying levels of detail and decomposition.",
        "code": "BSMO",
        "level": 4,
        "levelDescription": "Conducts advanced modelling activities for significant change programmes and across multiple business functions. Has an in-depth knowledge of organisation-standard techniques. Plans own modelling activities, selecting appropriate techniques and the correct level of detail for meeting assigned objectives. May contribute to discussions about the choice of the modelling approach to be used. Obtains input from and communicates modelling results to senior managers for agreement."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Business modelling",
        "description": "The production of abstract or distilled representations of real world, business or gaming situations in traditional or trans-media applications, to aid the communication and understanding of existing, conceptual or proposed scenarios. Predominantly focused around the representation of processes, roles, data, organisation and time. Models may be used to represent a subject at varying levels of detail and decomposition.",
        "code": "BSMO",
        "level": 3,
        "levelDescription": "Conversant with techniques covering full range of modelling situations. Models current and desired scenarios as directed. Selects appropriate modelling techniques for meeting assigned objectives. Gains agreement from subject matter experts to models produced. Reviews resulting models with stakeholders and gains resolution to resultant issues."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Business modelling",
        "description": "The production of abstract or distilled representations of real world, business or gaming situations in traditional or trans-media applications, to aid the communication and understanding of existing, conceptual or proposed scenarios. Predominantly focused around the representation of processes, roles, data, organisation and time. Models may be used to represent a subject at varying levels of detail and decomposition.",
        "code": "BSMO",
        "level": 2,
        "levelDescription": "Understands the purpose and benefits of modelling. Uses established techniques as directed to model simple subject areas with clearly-defined boundaries. May assist in more complex modelling activities. Develops models with input from subject matter experts and communicates the results back to them for review and confirmation."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Sustainability assessment",
        "description": "The evaluation of the sustainability of operational or planned services, devices and day-to-day operations such as travel. The establishment of a model or scheme to track changes in consumption over time and to generate feedback to enable improvements in energy or resource efficiency. The identification of areas requiring attention, and the initiation of actions to change or control the procurement of energy or other resources, so as to improve sustainability.",
        "code": "SUAS",
        "level": 6,
        "levelDescription": "Determines the organisation's approach to the assessment of sustainability and to the monitoring of the effectiveness of activities intended to cause improvements. Provides overall leadership in assessment activity around the organisation."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Sustainability assessment",
        "description": "The evaluation of the sustainability of operational or planned services, devices and day-to-day operations such as travel. The establishment of a model or scheme to track changes in consumption over time and to generate feedback to enable improvements in energy or resource efficiency. The identification of areas requiring attention, and the initiation of actions to change or control the procurement of energy or other resources, so as to improve sustainability.",
        "code": "SUAS",
        "level": 5,
        "levelDescription": "Leads the introduction and management of measures to assess and report on sustainability and the impact of conservation activities. Ensures that the effectiveness and accuracy of the monitoring actions is kept under review, and that appropriate improvements are made."
    },
    {
        "category": "Change and transformation",
        "subCategory": "Business change management",
        "title": "Sustainability assessment",
        "description": "The evaluation of the sustainability of operational or planned services, devices and day-to-day operations such as travel. The establishment of a model or scheme to track changes in consumption over time and to generate feedback to enable improvements in energy or resource efficiency. The identification of areas requiring attention, and the initiation of actions to change or control the procurement of energy or other resources, so as to improve sustainability.",
        "code": "SUAS",
        "level": 4,
        "levelDescription": "Assesses, records and reports on utilisation of energy and other resources, showing expertise in a given area such as a class of computing devices, or business travel. Provides advice on the improvement of sustainability in that area of expertise."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Systems development management",
        "description": "The management of resources in order to plan, estimate and carry out programmes of solution development work to time, budget and quality targets and in accordance with appropriate standards, methods and procedures (including secure software development).The facilitation of improvements by changing approaches and working practices, typically using recognised models, best practices, standards and methodologies. The provision of advice, assistance and leadership in improving the quality of software development, by focusing on process definition, management, repeatability and measurement.",
        "code": "DLMG",
        "level": 7,
        "levelDescription": "Sets strategy for resource management within solution development, authorises the allocation of resources for solution development programmes, and maintains an overview of the contribution of such programmes to organisational success. Continuously seeks to improve solution development processes and/or develops new approaches to achieving improvement. Liaises with client functions to establish business requirements and identifies, proposes, initiates and leads significant solution development programmes. Manages the quality and appropriateness of the work performed and delivers measurable business benefits."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Systems development management",
        "description": "The management of resources in order to plan, estimate and carry out programmes of solution development work to time, budget and quality targets and in accordance with appropriate standards, methods and procedures (including secure software development).The facilitation of improvements by changing approaches and working practices, typically using recognised models, best practices, standards and methodologies. The provision of advice, assistance and leadership in improving the quality of software development, by focusing on process definition, management, repeatability and measurement.",
        "code": "DLMG",
        "level": 6,
        "levelDescription": "Sets policy and standards for solution development projects. Promotes the benefits of addressing all security issues during solution development and ensures secure development improvement practices. Identifies, proposes, and initiates software process improvement activities within the organisation, devising solutions. Takes action to exploit opportunities that will have a measurable effect on process effectiveness, with associated benefits to the business. Identifies and manages the resources necessary for all stages (planning, estimation, execution) of solution development projects, ensuring that technical, financial and quality targets are met."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Systems development management",
        "description": "The management of resources in order to plan, estimate and carry out programmes of solution development work to time, budget and quality targets and in accordance with appropriate standards, methods and procedures (including secure software development).The facilitation of improvements by changing approaches and working practices, typically using recognised models, best practices, standards and methodologies. The provision of advice, assistance and leadership in improving the quality of software development, by focusing on process definition, management, repeatability and measurement.",
        "code": "DLMG",
        "level": 5,
        "levelDescription": "Defines solution development projects which support the organisation's objectives and plans. Ensures that senior management is both aware of and able to provide the required resources. Contributes effectively to improving solution development processes within the organisation justified by measurable business benefits. Facilitates availability and optimum utilisation of resources, especially in Agile projects. Monitors and reports on the progress of development projects, ensuring that projects are carried out in accordance with agreed standards, methods and procedures (including secure software development). Applies secure development improvement practices."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Data analysis",
        "description": "The investigation, evaluation, interpretation and classification of data, in order to define and clarify information structures which describe the relationships between real world entities. Such structures facilitate the development of software systems, links between systems or retrieval activities.",
        "code": "DTAN",
        "level": 5,
        "levelDescription": "Sets standards for data analysis tools and techniques, advises on their application, and ensures compliance. Manages the investigation of corporate data requirements, and co-ordinates the application of data analysis and data modelling techniques, based upon a detailed understanding of the corporate information requirements, in order to establish, modify or maintain data structures and their associated components (entity descriptions, relationship descriptions, attribute definitions)."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Data analysis",
        "description": "The investigation, evaluation, interpretation and classification of data, in order to define and clarify information structures which describe the relationships between real world entities. Such structures facilitate the development of software systems, links between systems or retrieval activities.",
        "code": "DTAN",
        "level": 4,
        "levelDescription": "Investigates corporate data requirements, and applies data analysis, data modelling and quality assurance techniques, to establish, modify or maintain data structures and their associated components (entity descriptions, relationship descriptions, attribute definitions). Provides advice and guidance to database designers and others using the data structures and associated components."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Data analysis",
        "description": "The investigation, evaluation, interpretation and classification of data, in order to define and clarify information structures which describe the relationships between real world entities. Such structures facilitate the development of software systems, links between systems or retrieval activities.",
        "code": "DTAN",
        "level": 3,
        "levelDescription": "Applies data analysis, data modelling, and quality assurance techniques, based upon a detailed understanding of business processes, to establish, modify or maintain data structures and associated components (entity descriptions, relationship descriptions, attribute definitions). Advises database designers and other application development team members on the details of data structures and associated components."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Data analysis",
        "description": "The investigation, evaluation, interpretation and classification of data, in order to define and clarify information structures which describe the relationships between real world entities. Such structures facilitate the development of software systems, links between systems or retrieval activities.",
        "code": "DTAN",
        "level": 2,
        "levelDescription": "Applies data analysis and data modelling techniques to establish, modify or maintain a data structure and its associated components (entity descriptions, relationship descriptions, attribute definitions)."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Systems design",
        "description": "The specification and design of information systems to meet defined business needs in any public or private context, including commercial, industrial, scientific, gaming and entertainment. The identification of concepts and their translation into implementable design. The design or selection of components. The retention of compatibility with enterprise and solution architectures, and the adherence to corporate standards within constraints of cost, security and sustainability.",
        "code": "DESN",
        "level": 6,
        "levelDescription": "Controls system design practice within an enterprise or industry architecture. Influences industry-based models for the development of new technology applications. Develops effective implementation and procurement strategies, consistent with business needs. Ensures adherence to relevant technical strategies, policies, standards and practices (including security)."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Systems design",
        "description": "The specification and design of information systems to meet defined business needs in any public or private context, including commercial, industrial, scientific, gaming and entertainment. The identification of concepts and their translation into implementable design. The design or selection of components. The retention of compatibility with enterprise and solution architectures, and the adherence to corporate standards within constraints of cost, security and sustainability.",
        "code": "DESN",
        "level": 5,
        "levelDescription": "Specifies and designs large or complex systems. Selects appropriate design standards, methods and tools, consistent with agreed enterprise and solution architectures and ensures they are applied effectively. Reviews others' systems designs to ensure selection of appropriate technology, efficient use of resources, and integration of multiple systems and technology. Contributes to policy for selection of architecture components. Evaluates and undertakes impact analysis on major design options and assesses and manages associated risks. Ensures that the system design balances functional, service quality, security and systems management requirements."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Systems design",
        "description": "The specification and design of information systems to meet defined business needs in any public or private context, including commercial, industrial, scientific, gaming and entertainment. The identification of concepts and their translation into implementable design. The design or selection of components. The retention of compatibility with enterprise and solution architectures, and the adherence to corporate standards within constraints of cost, security and sustainability.",
        "code": "DESN",
        "level": 4,
        "levelDescription": "Recommends/designs structures and tools for systems which meet business needs and takes into account target environment, performance  security requirements and existing systems. Delivers technical visualisation of proposed applications for approval by customer and execution by system developers. Translates logical designs into physical designs, and produces detailed design documentation. Maps work to user specification and removes errors and deviations from specification to achieve user-friendly processes."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Systems design",
        "description": "The specification and design of information systems to meet defined business needs in any public or private context, including commercial, industrial, scientific, gaming and entertainment. The identification of concepts and their translation into implementable design. The design or selection of components. The retention of compatibility with enterprise and solution architectures, and the adherence to corporate standards within constraints of cost, security and sustainability.",
        "code": "DESN",
        "level": 3,
        "levelDescription": "Specifies user/system interfaces, and translates logical designs into physical designs taking account of target environment, performance  security requirements and existing systems. Produces detailed designs and documents all work using required standards, methods and tools, including prototyping tools where appropriate."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Systems design",
        "description": "The specification and design of information systems to meet defined business needs in any public or private context, including commercial, industrial, scientific, gaming and entertainment. The identification of concepts and their translation into implementable design. The design or selection of components. The retention of compatibility with enterprise and solution architectures, and the adherence to corporate standards within constraints of cost, security and sustainability.",
        "code": "DESN",
        "level": 2,
        "levelDescription": "Undertakes complete design of simple applications using simple templates and tools. Assists as part of a team on design of components of larger systems. Produces detailed designs including for example: physical data flows, file layouts, common routines and utilities, program specifications or prototypes, and backup, recovery and restart procedures."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Network design",
        "description": "The production of network designs and design policies, strategies, architectures and documentation, covering voice, data, text, e-mail, facsimile and image, to support strategy and business requirements for connectivity, capacity, interfacing, security, resilience, recovery, access and remote access. This may incorporate all aspects of the communications infrastructure, internal and external, mobile, public and private, Internet, Intranet and call centres.",
        "code": "NTDS",
        "level": 6,
        "levelDescription": "Takes responsibility for major aspects of network specification and design within the organisation. Produces network design policies, philosophies and criteria covering connectivity, capacity, interfacing, security, resilience, recovery, access and remote access."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Network design",
        "description": "The production of network designs and design policies, strategies, architectures and documentation, covering voice, data, text, e-mail, facsimile and image, to support strategy and business requirements for connectivity, capacity, interfacing, security, resilience, recovery, access and remote access. This may incorporate all aspects of the communications infrastructure, internal and external, mobile, public and private, Internet, Intranet and call centres.",
        "code": "NTDS",
        "level": 5,
        "levelDescription": "Produces outline system designs and specifications, and overall architectures, topologies, configuration databases and design documentation of networks and networking technology within the organisation. Specifies user/system interfaces, including validation and error correction procedures, processing rules, access, security and audit controls. Assesses associated risks, and specifies recovery routines and contingency procedures. Translates logical designs into physical designs."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Database design",
        "description": "The specification, design and maintenance of mechanisms for storage and access to both structured and unstructured information, in support of business information needs.",
        "code": "DBDS",
        "level": 6,
        "levelDescription": "Sets strategies for effective use of database technology taking account of the complex interrelations between hardware/software. Provides specialist expertise in the development, use or operation of database management system tools and facilities. Provides expert knowledge in the selection, provision and use of database architectures, software and facilities, typically taking responsibility for a team of technical staff."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Database design",
        "description": "The specification, design and maintenance of mechanisms for storage and access to both structured and unstructured information, in support of business information needs.",
        "code": "DBDS",
        "level": 5,
        "levelDescription": "Maintains and applies up to date, specialist knowledge of database concepts, object and data modelling techniques and design principles, and a detailed knowledge of the full range of database architectures, software and facilities available. Analyses data requirements, to establish, modify or maintain a data model. Takes account of specialist requirements (e.g. geocoding, for geographic information systems). Interprets the model into an appropriate database schema within set policies. Demonstrates, installs and commissions selected products."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Database design",
        "description": "The specification, design and maintenance of mechanisms for storage and access to both structured and unstructured information, in support of business information needs.",
        "code": "DBDS",
        "level": 4,
        "levelDescription": "Develops and maintains specialist knowledge of database concepts, object and data modelling techniques and design principles and a detailed knowledge of database architectures, software and facilities. Analyses data requirements to establish, modify or maintain object/data models. Evaluates potential solutions, demonstrating, installing and commissioning selected products."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Database design",
        "description": "The specification, design and maintenance of mechanisms for storage and access to both structured and unstructured information, in support of business information needs.",
        "code": "DBDS",
        "level": 3,
        "levelDescription": "Develops specialist knowledge of database concepts, object and data modelling techniques and design principles. Translates object and data models into appropriate database schemas within design constraints. Interprets installation standards to meet project needs and produces database components as required. Evaluates potential solutions, demonstrating, installing and commissioning selected products."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Database design",
        "description": "The specification, design and maintenance of mechanisms for storage and access to both structured and unstructured information, in support of business information needs.",
        "code": "DBDS",
        "level": 2,
        "levelDescription": "Translates and implements simple development project requirements into physical database structures. Assesses proposed changes to object and data structures and implements these changes in physical databases. Assists in database management system support activities for operational database systems."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Programming/software development",
        "description": "The design, creation, testing and documenting of new and amended software components from supplied specifications in accordance with agreed development and security standards and processes.",
        "code": "PROG",
        "level": 5,
        "levelDescription": "Sets local or team-based standards for programming tools and techniques, including security guidelines, and the selection of appropriate development methods. Advises on application of standards and methods and ensures compliance. Takes technical responsibility for all stages and/or iterations in a software development project, providing method specific technical advice and guidance to project stakeholders. Assigns work packages, monitors performance and manages change control dynamically, to optimise productivity. Provides advice, guidance and assistance to less experienced colleagues as required."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Programming/software development",
        "description": "The design, creation, testing and documenting of new and amended software components from supplied specifications in accordance with agreed development and security standards and processes.",
        "code": "PROG",
        "level": 4,
        "levelDescription": "Designs, codes, tests, corrects and documents complex programs and scripts from agreed specifications, and subsequent iterations, using agreed standards and tools, to achieve a well engineered result. Takes part in reviews of own work and leads reviews of colleagues' work."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Programming/software development",
        "description": "The design, creation, testing and documenting of new and amended software components from supplied specifications in accordance with agreed development and security standards and processes.",
        "code": "PROG",
        "level": 3,
        "levelDescription": "Designs, codes, tests, corrects, and documents moderately complex programs and scripts from agreed specifications and subsequent iterations, using agreed standards and tools. Collaborates in reviews of specifications, with others as appropriate."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Programming/software development",
        "description": "The design, creation, testing and documenting of new and amended software components from supplied specifications in accordance with agreed development and security standards and processes.",
        "code": "PROG",
        "level": 2,
        "levelDescription": "Designs, codes, tests, corrects, and documents simple programs, or scripts and assists in the implementation of software which forms part of a properly engineered information or communications system."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Animation development",
        "description": "The architecture, design and development of animated and interactive systems such as games and simulations.",
        "code": "ADEV",
        "level": 6,
        "levelDescription": "Provides overall creative direction in the conception and design of animation products such as games and simulations."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Animation development",
        "description": "The architecture, design and development of animated and interactive systems such as games and simulations.",
        "code": "ADEV",
        "level": 5,
        "levelDescription": "Develops conceptual structures into design blueprints, typically using tools such as interaction diagrams and wireframes, to create high-level structures and runtime architectures for websites. Manages iterations of level design and storytelling, documenting overall flow and architecture of a game or similar system."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Animation development",
        "description": "The architecture, design and development of animated and interactive systems such as games and simulations.",
        "code": "ADEV",
        "level": 4,
        "levelDescription": "Uses design tools (such as wireframes) to evolve rapid prototypes of web pages, and assess the viability of design concepts. Using complex visual design tools, employs organic modelling techniques, such as boned rigs to create and animate virtual characters within the context of a game (or similar system) design. Builds visual and audio components and integrates them into the system structure, typically using a games engine."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Animation development",
        "description": "The architecture, design and development of animated and interactive systems such as games and simulations.",
        "code": "ADEV",
        "level": 3,
        "levelDescription": "Uses design tools (such as wireframes) to evolve prototypes of web pages. Using complex visual design tools, employs organic modelling techniques, such as boned rigs to create and animate virtual characters within the context of a game (or similar system) design. Builds visual and audio components."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Safety engineering",
        "description": "The application of appropriate methods to assure safety during all lifecycle phases of safety-related systems developments, including maintenance and re-use. These include safety hazard and risk analysis, safety requirements specification, safety-related system architectural design, formal method design, safety validation and verification, and safety case preparation.",
        "code": "SFEN",
        "level": 6,
        "levelDescription": "Takes full responsibility for hazard analysis and risk assessment, safety-related system architectural design, safety assurance planning and compliance and safety case preparation on systems up to the highest safety integrity levels. Takes responsibility for the safety-related aspects of multiple complex or high safety integrity level projects, providing effective leadership to team members."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Safety engineering",
        "description": "The application of appropriate methods to assure safety during all lifecycle phases of safety-related systems developments, including maintenance and re-use. These include safety hazard and risk analysis, safety requirements specification, safety-related system architectural design, formal method design, safety validation and verification, and safety case preparation.",
        "code": "SFEN",
        "level": 5,
        "levelDescription": "Identifies and analyses hazards and contributes to the identification and evaluation of risk reduction measures, ensuring these are adequately documented. Specifies safety-related systems architectures up to the highest safety integrity levels. Develops and maintains project safety assurance plans, monitors compliance and ensures that safety assurance evidence is gathered for safety case preparation."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Safety engineering",
        "description": "The application of appropriate methods to assure safety during all lifecycle phases of safety-related systems developments, including maintenance and re-use. These include safety hazard and risk analysis, safety requirements specification, safety-related system architectural design, formal method design, safety validation and verification, and safety case preparation.",
        "code": "SFEN",
        "level": 4,
        "levelDescription": "Contributes to the identification, analysis and documentation of hazards, and to the capture, evaluation and specification of safety requirements. Analyses and documents safety validation results. Contributes to the development and maintenance of project safety assurance plans, and gathers safety assurance evidence for safety case preparation."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Safety engineering",
        "description": "The application of appropriate methods to assure safety during all lifecycle phases of safety-related systems developments, including maintenance and re-use. These include safety hazard and risk analysis, safety requirements specification, safety-related system architectural design, formal method design, safety validation and verification, and safety case preparation.",
        "code": "SFEN",
        "level": 3,
        "levelDescription": "Assists with the collection of safety assurance evidence, undertaking all work in accordance with agreed safety, technical and quality standards, using appropriate methods and tools. Documents the results of hazard and risk analysis activities."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Sustainability engineering",
        "description": "The development and application of appropriate knowledge and methods to assure sustainability in all phases of the life cycle of energy- or materials-consuming systems and services, including maintenance and re-use. These include such things as energy supply risk analysis, specification of guidelines for sustainable procurement of assets and materials, energy efficiency and sustainability factors influencing system design, system design for sustainable operation and use, efficient coding design and adoption of re-use/sharing principles, achieving behaviour change to more sustainable ways of working, and the verification of energy and resource efficiency in operation.",
        "code": "SUEN",
        "level": 6,
        "levelDescription": "Creates models/ develops technical architectures to ensure that new systems and services are designed so as to maximise their positive sustainability impacts and energy and carbon savings for the organisation, including the optimisation in use and recycling of materials and assets. Defines and promulgates best practices in sustainability. \nInfluences organisation's recognition of current and upcoming regulatory sustainability and efficiency obligations, national and international standards, and marketplace capabilities.\nPromotes and advocates for the organisation's sustainability strategy for use of IT and Digital services including levels of sustainability, and encompassing, amongst other dimensions, travel, energy supply, consumables, waste and  office provision, strategies, procurements  and processes."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Sustainability engineering",
        "description": "The development and application of appropriate knowledge and methods to assure sustainability in all phases of the life cycle of energy- or materials-consuming systems and services, including maintenance and re-use. These include such things as energy supply risk analysis, specification of guidelines for sustainable procurement of assets and materials, energy efficiency and sustainability factors influencing system design, system design for sustainable operation and use, efficient coding design and adoption of re-use/sharing principles, achieving behaviour change to more sustainable ways of working, and the verification of energy and resource efficiency in operation.",
        "code": "SUEN",
        "level": 5,
        "levelDescription": "Takes overall design responsibility for a project/system, ensuring that sustainability criteria, standards and best practices are adopted at all levels in the project, from the coding, hosting and tools used in building the system to the mechanisms adopted for testing and backing up the system in operation and how the project is run (eg team meetings etc.). Ensures business case options for design address sustainability and energy efficiency impacts."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Sustainability engineering",
        "description": "The development and application of appropriate knowledge and methods to assure sustainability in all phases of the life cycle of energy- or materials-consuming systems and services, including maintenance and re-use. These include such things as energy supply risk analysis, specification of guidelines for sustainable procurement of assets and materials, energy efficiency and sustainability factors influencing system design, system design for sustainable operation and use, efficient coding design and adoption of re-use/sharing principles, achieving behaviour change to more sustainable ways of working, and the verification of energy and resource efficiency in operation.",
        "code": "SUEN",
        "level": 4,
        "levelDescription": "Investigates and recommends components and subsystems that meet sustainability criteria and levels."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Information content authoring",
        "description": "The management and application of the principles and practices of designing, creation and presentation of textual information, supported where necessary by graphical content for interactive and digital uses. \nThe adoption of workflow principles and definition of user roles and engagement and training of content providers. \nThis material may be delivered electronically (for example, as collections of web pages) or otherwise. This skill includes managing the quality assurance and authoring processes for the material being produced.",
        "code": "INCA",
        "level": 6,
        "levelDescription": "Manages content development, ensuring that adequate procedures, standards, tools and resources are in place and implemented to ensure the appropriate quality of material developed by content creators within the organisation. Champions the use of plain English and sets the standards for quality and drafting, consistently demonstrating these in own work. Manages relationships with stakeholders, ensuring that they receive the information that they need. Manages reviews of draft content."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Information content authoring",
        "description": "The management and application of the principles and practices of designing, creation and presentation of textual information, supported where necessary by graphical content for interactive and digital uses. \nThe adoption of workflow principles and definition of user roles and engagement and training of content providers. \nThis material may be delivered electronically (for example, as collections of web pages) or otherwise. This skill includes managing the quality assurance and authoring processes for the material being produced.",
        "code": "INCA",
        "level": 5,
        "levelDescription": "Provides overall editorial control across the team or teams of content designers, to ensure appropriate content, tone, brevity, consistency and re-use. Advises on appropriate content formats and publishing platforms to enable requirements to be satisfied. Develops content plans and strategies, showing how the identified user need will be met. Organises reviews of draft material."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Information content authoring",
        "description": "The management and application of the principles and practices of designing, creation and presentation of textual information, supported where necessary by graphical content for interactive and digital uses. \nThe adoption of workflow principles and definition of user roles and engagement and training of content providers. \nThis material may be delivered electronically (for example, as collections of web pages) or otherwise. This skill includes managing the quality assurance and authoring processes for the material being produced.",
        "code": "INCA",
        "level": 4,
        "levelDescription": "Engages with senior content owners, using objective evidence to determine the content needs of users. Controls, monitors and evaluates web content to ensure quality, consistency and accessibility of messages. Designs the content and appearance of complex information deliverables (e.g. web pages) in collaboration with clients/users. Moderates content and ensures it can be reused. Creates and tests complex, well-engineered deliverables to support simple, clear, fast services. Interprets analytics data to optimise content so that it meets user needs and is optimised for search engines. Reviews work of other content designers for consistency and accuracy, and takes responsibility for its publication. Understand the implications of publishing content and manages the risks of doing so."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Information content authoring",
        "description": "The management and application of the principles and practices of designing, creation and presentation of textual information, supported where necessary by graphical content for interactive and digital uses. \nThe adoption of workflow principles and definition of user roles and engagement and training of content providers. \nThis material may be delivered electronically (for example, as collections of web pages) or otherwise. This skill includes managing the quality assurance and authoring processes for the material being produced.",
        "code": "INCA",
        "level": 3,
        "levelDescription": "Liaises with clients/users to clarify details of requirements. Designs, creates and tests moderately complex subject matter, using easily understood language. Designs content for search engine optimisation, making informed decisions about the best way to present information to users. Ensures that content is accurate, relevant and current and takes into account user needs."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Information content authoring",
        "description": "The management and application of the principles and practices of designing, creation and presentation of textual information, supported where necessary by graphical content for interactive and digital uses. \nThe adoption of workflow principles and definition of user roles and engagement and training of content providers. \nThis material may be delivered electronically (for example, as collections of web pages) or otherwise. This skill includes managing the quality assurance and authoring processes for the material being produced.",
        "code": "INCA",
        "level": 2,
        "levelDescription": "Develops a broad understanding of technical publication concepts, tools and methods and the way in which these are implemented. Develops an understanding of content development support activities, such as information gathering, user task analysis, creating draft content, illustration, printing and publishing. Works with colleagues and clients to understand audience needs and to assimilate source material. Presents information clearly, concisely and accurately in appropriate plain language, which meets the needs of the user as clearly, simply and quickly as possible."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Information content authoring",
        "description": "The management and application of the principles and practices of designing, creation and presentation of textual information, supported where necessary by graphical content for interactive and digital uses. \nThe adoption of workflow principles and definition of user roles and engagement and training of content providers. \nThis material may be delivered electronically (for example, as collections of web pages) or otherwise. This skill includes managing the quality assurance and authoring processes for the material being produced.",
        "code": "INCA",
        "level": 1,
        "levelDescription": "Contributes, under instruction, to the production and distribution of content, to testing the content and layout of specific deliverables, and to the configuration of content items and files. Moderates online user content to ensure conformance to guidelines and escalates where appropriate."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Testing",
        "description": "The planning, design, management, execution and reporting of tests, using appropriate testing tools and techniques and conforming to agreed process standards and industry specific regulations. The purpose of testing is to ensure that new and amended systems, configurations, packages, or services, together with any interfaces, perform as specified (including security requirements) , and that the risks associated with deployment are adequately understood and documented. Testing includes the process of engineering, using and maintaining testware (test cases, test scripts, test reports, test plans, etc) to measure and improve the quality of the software being tested.",
        "code": "TEST",
        "level": 6,
        "levelDescription": "Determines testing policy, and owns the supporting processes including software security testing. Takes responsibility for the management of all testing activities within a development or integration project or programme. Manages all risks associated with the testing and takes preventative action when any risks become unacceptable. Assesses and advises on the practicality of testing process alternatives, including automated testing. Initiates improvements to test processes and directs their implementation. Assesses suppliers' development and testing capabilities. Determines project testing standards for all phases, influencing all parties to conform to those standards. Manages client relationships with respect to all testing matters."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Testing",
        "description": "The planning, design, management, execution and reporting of tests, using appropriate testing tools and techniques and conforming to agreed process standards and industry specific regulations. The purpose of testing is to ensure that new and amended systems, configurations, packages, or services, together with any interfaces, perform as specified (including security requirements) , and that the risks associated with deployment are adequately understood and documented. Testing includes the process of engineering, using and maintaining testware (test cases, test scripts, test reports, test plans, etc) to measure and improve the quality of the software being tested.",
        "code": "TEST",
        "level": 5,
        "levelDescription": "Coordinates and manages planning of the system and/or acceptance tests,  including software security testing, within a development or integration project or programme. Takes responsibility for integrity of testing and acceptance activities and coordinates the execution of these activities. Provides authoritative advice and guidance on any aspect of test planning and execution. Defines and communicates the test strategy for the project. Manages all test processes, including test plans, resources, costs, timescales, test deliverables and traceability. Manages client relationships with respect to testing matters. Identifies process improvements, and contributes to corporate testing standards and definition of best practice."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Testing",
        "description": "The planning, design, management, execution and reporting of tests, using appropriate testing tools and techniques and conforming to agreed process standards and industry specific regulations. The purpose of testing is to ensure that new and amended systems, configurations, packages, or services, together with any interfaces, perform as specified (including security requirements) , and that the risks associated with deployment are adequately understood and documented. Testing includes the process of engineering, using and maintaining testware (test cases, test scripts, test reports, test plans, etc) to measure and improve the quality of the software being tested.",
        "code": "TEST",
        "level": 4,
        "levelDescription": "Accepts responsibility for creation of test cases using own in-depth technical analysis of both functional and non-functional specifications (such as reliability, efficiency, usability, maintainability and portability). Creates traceability records, from test cases back to requirements. Produces test scripts, materials and regression test packs to test new and amended software or services. Specifies requirements for environment, data, resources and tools. Interprets, executes and documents complex test scripts using agreed methods and standards. Records and analyses actions and results, and maintains a defect register. Reviews test results and modifies tests if necessary. Provides reports on progress, anomalies, risks and issues associated with the overall project. Reports on system quality and collects metrics on test cases. Provides specialist advice to support others."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Testing",
        "description": "The planning, design, management, execution and reporting of tests, using appropriate testing tools and techniques and conforming to agreed process standards and industry specific regulations. The purpose of testing is to ensure that new and amended systems, configurations, packages, or services, together with any interfaces, perform as specified (including security requirements) , and that the risks associated with deployment are adequately understood and documented. Testing includes the process of engineering, using and maintaining testware (test cases, test scripts, test reports, test plans, etc) to measure and improve the quality of the software being tested.",
        "code": "TEST",
        "level": 3,
        "levelDescription": "Reviews requirements and specifications, and defines test conditions. Designs test cases and test scripts under own direction, mapping back to pre-determined criteria, recording and reporting outcomes. Analyses and reports test activities and results. Identifies and reports issues and risks associated with own work."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Testing",
        "description": "The planning, design, management, execution and reporting of tests, using appropriate testing tools and techniques and conforming to agreed process standards and industry specific regulations. The purpose of testing is to ensure that new and amended systems, configurations, packages, or services, together with any interfaces, perform as specified (including security requirements) , and that the risks associated with deployment are adequately understood and documented. Testing includes the process of engineering, using and maintaining testware (test cases, test scripts, test reports, test plans, etc) to measure and improve the quality of the software being tested.",
        "code": "TEST",
        "level": 2,
        "levelDescription": "Defines test conditions for given requirements. Designs test cases and creates test scripts and supporting data, working to the specifications provided. Interprets, executes and records test cases in accordance with project test plans. Analyses and reports test activities and results. Identifies and reports issues and risks."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Systems development",
        "title": "Testing",
        "description": "The planning, design, management, execution and reporting of tests, using appropriate testing tools and techniques and conforming to agreed process standards and industry specific regulations. The purpose of testing is to ensure that new and amended systems, configurations, packages, or services, together with any interfaces, perform as specified (including security requirements) , and that the risks associated with deployment are adequately understood and documented. Testing includes the process of engineering, using and maintaining testware (test cases, test scripts, test reports, test plans, etc) to measure and improve the quality of the software being tested.",
        "code": "TEST",
        "level": 1,
        "levelDescription": "Executes given test scripts under supervision. Records results and reports issues. Develops an understanding of the role of testing within system development, as a tool for design improvement as well as a validation process."
    },
    {
        "category": "Development and implementation",
        "subCategory": "User experience",
        "title": "User experience analysis",
        "description": "The identification, analysis, clarification and communication of the context of use in which applications will operate, and of the goals of  products, systems or services. Analysis and prioritisation of stakeholders' 'user experience' needs and definition of required system behaviour and performance. Resolution of potential conflicts between user requirements and determination of usability objectives",
        "code": "UNAN",
        "level": 5,
        "levelDescription": "Analyses the implications of the context of use for system development. Advises on tools and methods to be used and clarifies and communicates the user experience, users' characteristics and tasks, and the technical, organisational and physical environment in which products or systems will operate. Advises on interpretation of the organisation's branding for new digital environments."
    },
    {
        "category": "Development and implementation",
        "subCategory": "User experience",
        "title": "User experience analysis",
        "description": "The identification, analysis, clarification and communication of the context of use in which applications will operate, and of the goals of  products, systems or services. Analysis and prioritisation of stakeholders' 'user experience' needs and definition of required system behaviour and performance. Resolution of potential conflicts between user requirements and determination of usability objectives",
        "code": "UNAN",
        "level": 4,
        "levelDescription": "Analyses qualitative data (e.g. from site visits) and presents the data in ways that can be used to drive design (e.g. personas, red routes, user journey maps). Describes the user/ stakeholder objectives for the system, and identifies the roles of affected stakeholder groups. Defines the required behaviour and performance of the system in terms of the total use experience (e.g. in the form of scenarios of use), resolving potential conflicts between user requirements, (e.g. between accuracy and speed).Specifies measurable criteria for the required usability of the system."
    },
    {
        "category": "Development and implementation",
        "subCategory": "User experience",
        "title": "User experience analysis",
        "description": "The identification, analysis, clarification and communication of the context of use in which applications will operate, and of the goals of  products, systems or services. Analysis and prioritisation of stakeholders' 'user experience' needs and definition of required system behaviour and performance. Resolution of potential conflicts between user requirements and determination of usability objectives",
        "code": "UNAN",
        "level": 3,
        "levelDescription": "Identifies and engages with users/ stakeholders, defines relevant characteristics (e.g. 'personas') and describes users goals and tasks (e.g. as 'user stories'). Describes the environment within which the system will be used. Identifies and describes requirements of users with special needs (e.g. resulting from physical disabilities)."
    },
    {
        "category": "Development and implementation",
        "subCategory": "User experience",
        "title": "User experience design",
        "description": "The iterative development of user tasks, interaction and interfaces to meet user requirements, considering the whole user experience. Refinement of design solutions in response to user-centred evaluation and feedback and communication of the design to those responsible for implementation.",
        "code": "HCEV",
        "level": 6,
        "levelDescription": "Controls user experience design practice within an enterprise or industry architecture. Specifies, and ensures adherence to, relevant technical strategies, policies, standards and practices (including security) to meet organisation's digital user experience design objectives. Provides leadership in defining and shaping successful digital transformation projects, by specifying a manageable scope of work, developing a credible delivery roadmap, and establishing a sustainable delivery model."
    },
    {
        "category": "Development and implementation",
        "subCategory": "User experience",
        "title": "User experience design",
        "description": "The iterative development of user tasks, interaction and interfaces to meet user requirements, considering the whole user experience. Refinement of design solutions in response to user-centred evaluation and feedback and communication of the design to those responsible for implementation.",
        "code": "HCEV",
        "level": 5,
        "levelDescription": "Develops visual user experiences across digital assets by guiding project teams to evolve  key elements of a digital proposition. Combines understanding of customers and market conditions, with knowledge of digital trends, to create concepts that are both user-centred and competitively differentiating.   Facilitates the generation of new concepts and ideas and illustrates concepts with impact. Manages client expectations, explaining the costs and benefits of user experience activities, and advising on risks resulting from poor user experience."
    },
    {
        "category": "Development and implementation",
        "subCategory": "User experience",
        "title": "User experience design",
        "description": "The iterative development of user tasks, interaction and interfaces to meet user requirements, considering the whole user experience. Refinement of design solutions in response to user-centred evaluation and feedback and communication of the design to those responsible for implementation.",
        "code": "HCEV",
        "level": 4,
        "levelDescription": "Collaborates with colleagues from other disciplines to define technology objectives, assess solution options and devise architectural solutions that both achieve strategic business goals and meet operational requirements. Creates design briefs for new web and digital projects or refreshes of existing projects. Develops visual user experiences across digital assets, working with project teams to present propositions and strategies. Rapidly translates digital concepts into hi-fidelity visual outputs and interactive prototypes. Captures multi-disciplinary requirements, and translates those requirements into user experiences, prototypes and final assets. Plans and costs UX activities, building in time for iteration, user feedback and design changes, and articulating the costs and benefits of different design approaches."
    },
    {
        "category": "Development and implementation",
        "subCategory": "User experience",
        "title": "User experience design",
        "description": "The iterative development of user tasks, interaction and interfaces to meet user requirements, considering the whole user experience. Refinement of design solutions in response to user-centred evaluation and feedback and communication of the design to those responsible for implementation.",
        "code": "HCEV",
        "level": 3,
        "levelDescription": "Develops visual user experiences across digital assets (web and other digital channels). Works as part of a team to translate digital concepts into consistent graphical representations under creative direction. Supports the capture of business requirements from clients and users, and translates requirements into design briefs. Produces accessible user experiences, prototypes and final assets. Defines cost effective and efficient digital solutions, proactively resolves technical problems and ensures that technical solutions continue to meet business requirements."
    },
    {
        "category": "Development and implementation",
        "subCategory": "User experience",
        "title": "User experience design",
        "description": "The iterative development of user tasks, interaction and interfaces to meet user requirements, considering the whole user experience. Refinement of design solutions in response to user-centred evaluation and feedback and communication of the design to those responsible for implementation.",
        "code": "HCEV",
        "level": 2,
        "levelDescription": "Based on understanding of how web page look and feel is controlled through CSS and page templates, uses agreed procedures for uploading and use of images, icons and video. Applies the principles of page layout and use of headlines and sub-heads to meet audience needs."
    },
    {
        "category": "Development and implementation",
        "subCategory": "User experience",
        "title": "User experience evaluation",
        "description": "Evaluation of systems, products or services, to assure that the stakeholder and organisational requirements have been met, required practice has been followed, and systems in use continue to meet organisational and user needs. Iterative assessment (from early prototypes to final live implementation) of effectiveness, efficiency, user satisfaction, health and safety, and accessibility to measure or improve the usability of new or existing processes, with the intention of achieving optimum levels of product or service usability.",
        "code": "USEV",
        "level": 5,
        "levelDescription": "Advises on achievement of usability (including health and safety and accessibility) of specific visual design approaches and their suitability for different audiences. Advises on what to evaluate and type of evaluation. Manages evaluation of systems, products or services, to assure that the stakeholder and organisational requirements have been met, required practice has been followed, and systems in use continue to meet organisational and user needs. Evaluates design aspects of web tenders and a proposals including wireframes and mockups. Ensures that the results of evaluations are understood by system developers. Influences design teams to take action on the findings of usability tests"
    },
    {
        "category": "Development and implementation",
        "subCategory": "User experience",
        "title": "User experience evaluation",
        "description": "Evaluation of systems, products or services, to assure that the stakeholder and organisational requirements have been met, required practice has been followed, and systems in use continue to meet organisational and user needs. Iterative assessment (from early prototypes to final live implementation) of effectiveness, efficiency, user satisfaction, health and safety, and accessibility to measure or improve the usability of new or existing processes, with the intention of achieving optimum levels of product or service usability.",
        "code": "USEV",
        "level": 4,
        "levelDescription": "Plans and performs all types of evaluation, in order to check that stakeholder and organisational requirements have been met, choosing between formative and summative usability tests. Selects and administers moderated or unmoderated usability tests. Tests developing systems to ensure compatibility with user requirements, tasks and environment, as defined in agreed specifications. Checks systems in use for changes in organisational, user, other stakeholder, and usability needs and to ensure that these needs continue to be met. Assesses the stability of requirements against changes in context of use. Interprets and presents results of evaluations to design team(s), prioritising usability issues."
    },
    {
        "category": "Development and implementation",
        "subCategory": "User experience",
        "title": "User experience evaluation",
        "description": "Evaluation of systems, products or services, to assure that the stakeholder and organisational requirements have been met, required practice has been followed, and systems in use continue to meet organisational and user needs. Iterative assessment (from early prototypes to final live implementation) of effectiveness, efficiency, user satisfaction, health and safety, and accessibility to measure or improve the usability of new or existing processes, with the intention of achieving optimum levels of product or service usability.",
        "code": "USEV",
        "level": 3,
        "levelDescription": "Evaluate prototypes to obtain user feedback on requirements of developing systems. Tests the usability of component systems, and alternative designs, administering formative and summative usability tests, logging and analysing data. Check systems for adherence to applicable human science knowledge, style guides, guidelines, standards and legislation. Evaluates the usability of existing or competitor systems to provide benchmark values and as input to design."
    },
    {
        "category": "Development and implementation",
        "subCategory": "User experience",
        "title": "User experience evaluation",
        "description": "Evaluation of systems, products or services, to assure that the stakeholder and organisational requirements have been met, required practice has been followed, and systems in use continue to meet organisational and user needs. Iterative assessment (from early prototypes to final live implementation) of effectiveness, efficiency, user satisfaction, health and safety, and accessibility to measure or improve the usability of new or existing processes, with the intention of achieving optimum levels of product or service usability.",
        "code": "USEV",
        "level": 2,
        "levelDescription": "Assists in the preparations for evaluations and in the operation of the test environment. Assists in collection of feedback on the developing design, from end users and other representative sources. Maintains the test environment."
    },
    {
        "category": "Development and implementation",
        "subCategory": "User experience",
        "title": "User experience evaluation",
        "description": "Evaluation of systems, products or services, to assure that the stakeholder and organisational requirements have been met, required practice has been followed, and systems in use continue to meet organisational and user needs. Iterative assessment (from early prototypes to final live implementation) of effectiveness, efficiency, user satisfaction, health and safety, and accessibility to measure or improve the usability of new or existing processes, with the intention of achieving optimum levels of product or service usability.",
        "code": "USEV",
        "level": 6,
        "levelDescription": "Is responsible for organisational commitment to high standards in all aspects of the interaction between users and deployed technology - the user experience. Specifies ergonomics standards and methods to meet organisational objectives. Acts to influence the perception of the organisation, in relation to ergonomics, and the user experience of deployed products and systems, and to ensure that this is addressed in future design."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Installation and integration",
        "title": "Systems integration",
        "description": "The incremental and logical integration and testing of components and/or subsystems and their interfaces in order to create operational services.",
        "code": "SINT",
        "level": 6,
        "levelDescription": "Establishes standards and procedures across the IT service lifecycle (including the development lifecycle) in the areas of systems integration and testing and ensures that practitioners adhere to them. Manages resources to ensure that the systems integration function operates effectively."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Installation and integration",
        "title": "Systems integration",
        "description": "The incremental and logical integration and testing of components and/or subsystems and their interfaces in order to create operational services.",
        "code": "SINT",
        "level": 5,
        "levelDescription": "Designs and builds integration components and interfaces. Leads practical integration work under the technical direction of the system /service designer. May contribute to the overall design of the service. May define the technical criteria for product/component selection. Contributes to decisions about tools, methods and approaches."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Installation and integration",
        "title": "Systems integration",
        "description": "The incremental and logical integration and testing of components and/or subsystems and their interfaces in order to create operational services.",
        "code": "SINT",
        "level": 4,
        "levelDescription": "Defines the integration build, accepts software modules from software developers, and produces software builds for loading onto the target environment. Configures the hardware environment, produces integration test specifications, and conducts tests, recording details of any failures and carrying out fault diagnosis."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Installation and integration",
        "title": "Systems integration",
        "description": "The incremental and logical integration and testing of components and/or subsystems and their interfaces in order to create operational services.",
        "code": "SINT",
        "level": 3,
        "levelDescription": "Defines the integration build and produces a build definition for generation of the software. Accepts software modules from software developers, and produces software builds for loading onto the target hardware from software source code. Configures the hardware environment, produces integration test specifications, conducts tests and records the details of any failures. Carries out and reports fault diagnosis relating to moderately complex problems."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Installation and integration",
        "title": "Systems integration",
        "description": "The incremental and logical integration and testing of components and/or subsystems and their interfaces in order to create operational services.",
        "code": "SINT",
        "level": 2,
        "levelDescription": "Produces software builds from software source code. Conducts tests as defined in an integration test specification, records the details of any failures, and carries out fault diagnosis relating to simple failures, reporting the results of the diagnosis in a clear and concise manner."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Installation and integration",
        "title": "Porting/software configuration",
        "description": "The configuration of software products into new or existing software environments/platforms.",
        "code": "PORT",
        "level": 6,
        "levelDescription": "Ensures the availability of hardware, software, and resources for the systems testing of platform-specific versions of one or more software products. Defines configurations required for testing with reference to agreed testing standards. Evaluates new developments in the organisation and the industry and advises senior management on potential growth, problem areas and resourcing needs. Ensures adherence to agreed standards and good practice."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Installation and integration",
        "title": "Porting/software configuration",
        "description": "The configuration of software products into new or existing software environments/platforms.",
        "code": "PORT",
        "level": 5,
        "levelDescription": "Leads a team, providing expert technical knowledge in the systems testing of platform-specific versions of the software products, on varying platforms. Provides specialist guidance information to support, systems testing and quality assurance functions to assist in improving procedures."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Installation and integration",
        "title": "Porting/software configuration",
        "description": "The configuration of software products into new or existing software environments/platforms.",
        "code": "PORT",
        "level": 4,
        "levelDescription": "Configures software and equipment and tests platform-specific versions of one or more software products. Reports the outcome of testing and identifies potential improvements to the process and to the software products according to agreed designs and standards."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Installation and integration",
        "title": "Porting/software configuration",
        "description": "The configuration of software products into new or existing software environments/platforms.",
        "code": "PORT",
        "level": 3,
        "levelDescription": "Assists in the configuration of software and equipment and the systems testing of platform-specific versions of one or more software products. Documents faults, implements resolutions and retests to agreed standards."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Installation and integration",
        "title": "Hardware design",
        "description": "The specification and design of computing and communications equipment (such as semiconductor processors, HPC architectures and DSP and graphics processor chips), typically for integration into, or connection to an IT infrastructure or network. The identification of concepts and their translation into implementable design. The selection and integration, or design and prototyping of components. The adherence to industry standards including compatibility, security and sustainability.",
        "code": "HWDE",
        "level": 4,
        "levelDescription": "Designs computing and communications equipment, taking account of target environment, performance, security and sustainability requirements. Translates logical designs into physical designs, and delivers technical prototypes of proposed components for approval by customer and execution by technicians. Designs tests to measure performance of prototypes and production output against specification and inform iterative development."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Installation and integration",
        "title": "Hardware design",
        "description": "The specification and design of computing and communications equipment (such as semiconductor processors, HPC architectures and DSP and graphics processor chips), typically for integration into, or connection to an IT infrastructure or network. The identification of concepts and their translation into implementable design. The selection and integration, or design and prototyping of components. The adherence to industry standards including compatibility, security and sustainability.",
        "code": "HWDE",
        "level": 5,
        "levelDescription": "Specifies and designs complex hardware components/ systems. Selects appropriate design standards, methods and tools, consistent with agreed enterprise policies, and ensures they are applied effectively. Reviews others' designs to ensure selection of appropriate technology, efficient use of resources, and effective integration of multiple systems and technology. Contributes to policy for selection of components. Evaluates and undertakes impact analysis on major design options and assesses and manages associated risks. Ensures that hardware designs balance functional, service quality, security, systems management and sustainability requirements."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Installation and integration",
        "title": "Hardware design",
        "description": "The specification and design of computing and communications equipment (such as semiconductor processors, HPC architectures and DSP and graphics processor chips), typically for integration into, or connection to an IT infrastructure or network. The identification of concepts and their translation into implementable design. The selection and integration, or design and prototyping of components. The adherence to industry standards including compatibility, security and sustainability.",
        "code": "HWDE",
        "level": 6,
        "levelDescription": "Controls hardware design practice within an enterprise. Influences industry-based models for the development of new technology components. Develops effective procurement strategies, consistent with business needs. Ensures adherence to that relevant technical strategies, policies, standards and practices."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Installation and integration",
        "title": "Systems installation/decommissioning",
        "description": "The installation, testing, implementation or decommissioning and removal of cabling, wiring, equipment, hardware and associated software, following plans and instructions and in accordance with agreed standards. The testing of hardware and software components, resolution of malfunctions, and recording of results. The reporting of details of hardware and software installed so that configuration management records can be updated.",
        "code": "HSIN",
        "level": 5,
        "levelDescription": "Takes responsibility for installation projects, providing effective team leadership, including information flow to and from the customer during project work. Develops and implements quality plans and method statements. Monitors the effectiveness of installations and ensures that appropriate recommendations for change are made."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Installation and integration",
        "title": "Systems installation/decommissioning",
        "description": "The installation, testing, implementation or decommissioning and removal of cabling, wiring, equipment, hardware and associated software, following plans and instructions and in accordance with agreed standards. The testing of hardware and software components, resolution of malfunctions, and recording of results. The reporting of details of hardware and software installed so that configuration management records can be updated.",
        "code": "HSIN",
        "level": 4,
        "levelDescription": "Undertakes routine installations and de-installations of items of hardware and/or software. Takes action to ensure targets are met within established safety and quality procedures, including, where appropriate, handover to the client. Conducts tests of hardware and/or software using supplied test procedures and diagnostic tools. Corrects malfunctions, calling on other experienced colleagues and external resources if required. Documents details of all hardware/software items that have been installed and removed so that configuration management records can be updated. Develops installation procedures and standards, and schedules installation work. Provides specialist guidance and advice to less experienced colleagues to ensure best use is made of available assets, and to maintain or improve the installation service."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Installation and integration",
        "title": "Systems installation/decommissioning",
        "description": "The installation, testing, implementation or decommissioning and removal of cabling, wiring, equipment, hardware and associated software, following plans and instructions and in accordance with agreed standards. The testing of hardware and software components, resolution of malfunctions, and recording of results. The reporting of details of hardware and software installed so that configuration management records can be updated.",
        "code": "HSIN",
        "level": 3,
        "levelDescription": "Installs or removes hardware and/or software, using supplied installation instructions and tools including, where appropriate, handover to the client. Conducts tests, corrects malfunctions, and documents results in accordance with agreed procedures. Reports details of all hardware/software items that have been installed and removed so that configuration management records can be updated. Provides assistance to users in a professional manner following agreed procedures for further help or escalation. Reviews change requests. Maintains accurate records of user requests, contact details and outcomes. Contributes to the development of installation procedures and standards."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Installation and integration",
        "title": "Systems installation/decommissioning",
        "description": "The installation, testing, implementation or decommissioning and removal of cabling, wiring, equipment, hardware and associated software, following plans and instructions and in accordance with agreed standards. The testing of hardware and software components, resolution of malfunctions, and recording of results. The reporting of details of hardware and software installed so that configuration management records can be updated.",
        "code": "HSIN",
        "level": 2,
        "levelDescription": "Installs or removes hardware and/or software, and associated connections, using supplied installation instructions and tools. Conducts tests and corrects malfunctions. Documents results in accordance with agreed procedures. Assists with the evaluation of change requests. Contributes, as required, to investigations of problems and faults concerning the installation of hardware and/or software and confirms the correct working of installations."
    },
    {
        "category": "Development and implementation",
        "subCategory": "Installation and integration",
        "title": "Systems installation/decommissioning",
        "description": "The installation, testing, implementation or decommissioning and removal of cabling, wiring, equipment, hardware and associated software, following plans and instructions and in accordance with agreed standards. The testing of hardware and software components, resolution of malfunctions, and recording of results. The reporting of details of hardware and software installed so that configuration management records can be updated.",
        "code": "HSIN",
        "level": 1,
        "levelDescription": "Following agreed procedures, performs simple installations, replaces consumable items, checks correct working of installations, and documents and reports on work done."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service design",
        "title": "Availability management",
        "description": "The definition, analysis, planning, measurement, maintenance and improvement of all aspects of the availability of services, including the availability of power. The overall control and management of service availability to ensure that the level of service delivered in all services is matched to or exceeds the current and future agreed needs of the business, in a cost effective manner.",
        "code": "AVMT",
        "level": 6,
        "levelDescription": "Sets policy and develops strategies, plans and processes for the design, monitoring, measurement, maintenance, reporting and continuous improvement of service and component availability, including the development and implementation of new availability techniques and methods."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service design",
        "title": "Availability management",
        "description": "The definition, analysis, planning, measurement, maintenance and improvement of all aspects of the availability of services, including the availability of power. The overall control and management of service availability to ensure that the level of service delivered in all services is matched to or exceeds the current and future agreed needs of the business, in a cost effective manner.",
        "code": "AVMT",
        "level": 5,
        "levelDescription": "Provides advice, assistance and leadership associated with the planning, design and improvement of service and component availability, including the investigation of all breaches of availability targets and service non-availability, with the instigation of remedial activities. Plans arrangements for disaster recovery together with supporting processes and manages the testing of such plans."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service design",
        "title": "Availability management",
        "description": "The definition, analysis, planning, measurement, maintenance and improvement of all aspects of the availability of services, including the availability of power. The overall control and management of service availability to ensure that the level of service delivered in all services is matched to or exceeds the current and future agreed needs of the business, in a cost effective manner.",
        "code": "AVMT",
        "level": 4,
        "levelDescription": "Contributes to the availability management process and its operation and performs defined availability management tasks. Analyses service and component availability, reliability, maintainability and serviceability. Ensures that services and components meet and continue to meet all of their agreed performance targets and service levels. Implements arrangements for disaster recovery and documents recovery procedures. Conducts testing of recovery procedures."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service design",
        "title": "Service level management",
        "description": "The planning, implementation, control, review and audit of service provision, to meet customer business requirements. This includes negotiation, implementation and monitoring of service level agreements, and the ongoing management of operational facilities to provide the agreed levels of service, seeking continually and proactively to improve service delivery and sustainability targets.",
        "code": "SLMO",
        "level": 7,
        "levelDescription": "Sets strategies for service delivery that support the strategic needs of the client organisation. Authorises allocation of resources for monitoring service delivery arrangements. Provides leadership within the industry on the identification of future trends (e.g. technical, market, industrial, socioeconomic, legislative). Develops relationships with customers at the highest level to identify potential areas of mutual commercial interest for future development, maintains an overview of the contribution of service delivery arrangements to organisational success. foo"
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service design",
        "title": "Service level management",
        "description": "The planning, implementation, control, review and audit of service provision, to meet customer business requirements. This includes negotiation, implementation and monitoring of service level agreements, and the ongoing management of operational facilities to provide the agreed levels of service, seeking continually and proactively to improve service delivery and sustainability targets.",
        "code": "SLMO",
        "level": 6,
        "levelDescription": "Ensures that a catalogue of available services is created and maintained and that service level agreements are complete and cost effective. Ensures that service delivery is monitored effectively and that identified actions to maintain or improve levels of service are implemented. Ensures that operational methods, procedures, facilities and tools are established, reviewed and maintained. Negotiates with relevant parties in respect of disruptions and major amendments to the provision of services. Reviews service delivery to ensure that agreed targets are met and prepares proposals to meet forecast changes in the level or type of service."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service design",
        "title": "Service level management",
        "description": "The planning, implementation, control, review and audit of service provision, to meet customer business requirements. This includes negotiation, implementation and monitoring of service level agreements, and the ongoing management of operational facilities to provide the agreed levels of service, seeking continually and proactively to improve service delivery and sustainability targets.",
        "code": "SLMO",
        "level": 5,
        "levelDescription": "Ensures that service delivery meets agreed service levels. Creates and maintains a catalogue of available services. In consultation with the customer negotiates service level requirements and agrees service levels. Diagnoses service delivery problems and initiates actions to maintain or improve levels of service. Establishes and maintains operational methods, procedures and facilities in assigned area of responsibility and reviews them regularly for effectiveness and efficiency."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service design",
        "title": "Service level management",
        "description": "The planning, implementation, control, review and audit of service provision, to meet customer business requirements. This includes negotiation, implementation and monitoring of service level agreements, and the ongoing management of operational facilities to provide the agreed levels of service, seeking continually and proactively to improve service delivery and sustainability targets.",
        "code": "SLMO",
        "level": 4,
        "levelDescription": "Performs defined tasks to monitor service delivery against service level agreements and maintains records of relevant information. Analyses service records against agreed service levels regularly to identify actions required to maintain or improve levels of service, and initiates or reports these actions."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service design",
        "title": "Service level management",
        "description": "The planning, implementation, control, review and audit of service provision, to meet customer business requirements. This includes negotiation, implementation and monitoring of service level agreements, and the ongoing management of operational facilities to provide the agreed levels of service, seeking continually and proactively to improve service delivery and sustainability targets.",
        "code": "SLMO",
        "level": 3,
        "levelDescription": "Monitors service delivery performance metrics and liaises with managers and customers to ensure that service level agreements are not breached without the stakeholders being given the opportunity of planning for a deterioration in service."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service design",
        "title": "Service level management",
        "description": "The planning, implementation, control, review and audit of service provision, to meet customer business requirements. This includes negotiation, implementation and monitoring of service level agreements, and the ongoing management of operational facilities to provide the agreed levels of service, seeking continually and proactively to improve service delivery and sustainability targets.",
        "code": "SLMO",
        "level": 2,
        "levelDescription": "Monitors and logs the actual service provided, compared to that required by service level agreements."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service transition",
        "title": "Service acceptance",
        "description": "The achievement of formal confirmation that service acceptance criteria have been met, and that the service provider is ready to operate the new service when it has been deployed. (Service acceptance criteria are used to ensure that a service meets the defined service requirements, including functionality, operational support, performance and quality requirements).",
        "code": "SEAC",
        "level": 6,
        "levelDescription": "Owns the transition process, develops the organisation's approach and defines the acceptance criteria for service transition. Promotes and monitors project quality outputs to ensure they are fit for purpose and fit for use within operational service.\n\nActively engages with technical design and project managers to promote awareness and compliance with service transition quality plans and processes. Agrees the service acceptance criteria with project/programme managers."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service transition",
        "title": "Service acceptance",
        "description": "The achievement of formal confirmation that service acceptance criteria have been met, and that the service provider is ready to operate the new service when it has been deployed. (Service acceptance criteria are used to ensure that a service meets the defined service requirements, including functionality, operational support, performance and quality requirements).",
        "code": "SEAC",
        "level": 5,
        "levelDescription": "Engages with technical design and project managers or Project Management Office, to ensure correct products are produced, in a timely fashion. Evaluates the quality of project outputs against agreed service acceptance criteria."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service transition",
        "title": "Service acceptance",
        "description": "The achievement of formal confirmation that service acceptance criteria have been met, and that the service provider is ready to operate the new service when it has been deployed. (Service acceptance criteria are used to ensure that a service meets the defined service requirements, including functionality, operational support, performance and quality requirements).",
        "code": "SEAC",
        "level": 4,
        "levelDescription": "Engages with project management to confirm that products developed meet the service acceptance criteria and are to the required standard. Feeds into change management processes."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service transition",
        "title": "Configuration management",
        "description": "The lifecycle planning, control and management of the assets of an organisation (such as documentation, software and service assets, including information relating to those assets and their relationships. This involves identification, classification and specification of all configuration items (CIs) and the interfaces to other processes and data. Required information relates to storage, access, service relationships, versions, problem reporting and change control of CIs. The application of status accounting and auditing, often in line with acknowledged external criteria such as ISO 9000, ISO/IEC 20000, ISO/IEC 27000 and security throughout all stages of the CI lifecycle, including the early stages of system development.",
        "code": "CFMG",
        "level": 6,
        "levelDescription": "Manages the organisation's configuration management system and champions the business value and company policies for secure configuration management. Ensures that processes are in place for consistent classification and management of CIs, and for verification and audit of configuration records. Contributes strongly to the business service knowledge management system. Manages the research and development of tools, processes and techniques."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service transition",
        "title": "Configuration management",
        "description": "The lifecycle planning, control and management of the assets of an organisation (such as documentation, software and service assets, including information relating to those assets and their relationships. This involves identification, classification and specification of all configuration items (CIs) and the interfaces to other processes and data. Required information relates to storage, access, service relationships, versions, problem reporting and change control of CIs. The application of status accounting and auditing, often in line with acknowledged external criteria such as ISO 9000, ISO/IEC 20000, ISO/IEC 27000 and security throughout all stages of the CI lifecycle, including the early stages of system development.",
        "code": "CFMG",
        "level": 5,
        "levelDescription": "Manages configuration items (CIs) and related information. Investigates and implements tools, techniques and processes for managing CIs and verifies that related information is complete, current and accurate."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service transition",
        "title": "Configuration management",
        "description": "The lifecycle planning, control and management of the assets of an organisation (such as documentation, software and service assets, including information relating to those assets and their relationships. This involves identification, classification and specification of all configuration items (CIs) and the interfaces to other processes and data. Required information relates to storage, access, service relationships, versions, problem reporting and change control of CIs. The application of status accounting and auditing, often in line with acknowledged external criteria such as ISO 9000, ISO/IEC 20000, ISO/IEC 27000 and security throughout all stages of the CI lifecycle, including the early stages of system development.",
        "code": "CFMG",
        "level": 4,
        "levelDescription": "Maintains secure configuration, applying and maintaining tools, techniques and processes to identify, track, log and maintain accurate, complete and current information."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service transition",
        "title": "Configuration management",
        "description": "The lifecycle planning, control and management of the assets of an organisation (such as documentation, software and service assets, including information relating to those assets and their relationships. This involves identification, classification and specification of all configuration items (CIs) and the interfaces to other processes and data. Required information relates to storage, access, service relationships, versions, problem reporting and change control of CIs. The application of status accounting and auditing, often in line with acknowledged external criteria such as ISO 9000, ISO/IEC 20000, ISO/IEC 27000 and security throughout all stages of the CI lifecycle, including the early stages of system development.",
        "code": "CFMG",
        "level": 3,
        "levelDescription": "Applies tools, techniques and processes to track, log and correct information related to CIs, ensuring protection of assets and components from unauthorised change, diversion and inappropriate use."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service transition",
        "title": "Configuration management",
        "description": "The lifecycle planning, control and management of the assets of an organisation (such as documentation, software and service assets, including information relating to those assets and their relationships. This involves identification, classification and specification of all configuration items (CIs) and the interfaces to other processes and data. Required information relates to storage, access, service relationships, versions, problem reporting and change control of CIs. The application of status accounting and auditing, often in line with acknowledged external criteria such as ISO 9000, ISO/IEC 20000, ISO/IEC 27000 and security throughout all stages of the CI lifecycle, including the early stages of system development.",
        "code": "CFMG",
        "level": 2,
        "levelDescription": "Applies tools, techniques and processes to track, log, report on and correct configuration items, components and changes."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service transition",
        "title": "Asset management",
        "description": "The management of the lifecycle for all managed assets (hardware, software, intellectual property, licences, warranties etc) including security, inventory, compliance, usage and disposal, aiming to protect and secure the corporate assets portfolio, optimise the total cost of ownership and sustainability by minimising operating costs, improving investment decisions and capitalising on potential opportunities. Knowledge and use of international standards for asset management and close integration with security, change, and configuration management are examples of enhanced asset management development.",
        "code": "ASMG",
        "level": 6,
        "levelDescription": "Promotes the continuing economic and effective provision of services, ensuring that all changes to assets and services are appropriately and accurately controlled and recorded. Provides information and advice on issues such as maintenance of hardware assets, licensing of software, protection of intellectual property, and legal obligations. Promotes awareness of and commitment to asset control. Initiates assessment of consequences and risks arising from decisions to obtain, change or continue the possession or use of an asset, system or service."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service transition",
        "title": "Asset management",
        "description": "The management of the lifecycle for all managed assets (hardware, software, intellectual property, licences, warranties etc) including security, inventory, compliance, usage and disposal, aiming to protect and secure the corporate assets portfolio, optimise the total cost of ownership and sustainability by minimising operating costs, improving investment decisions and capitalising on potential opportunities. Knowledge and use of international standards for asset management and close integration with security, change, and configuration management are examples of enhanced asset management development.",
        "code": "ASMG",
        "level": 5,
        "levelDescription": "Manages and maintains the service compliance of all IT and service assets in line with business and regulatory requirements involving knowledge of financial and technical processes, tools and techniques. Identifies, assesses and communicates associated risks. Ensures asset controllers, infrastructure teams and the business co-ordinate and optimise value, maintain control and maintain appropriate legal compliance."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service transition",
        "title": "Asset management",
        "description": "The management of the lifecycle for all managed assets (hardware, software, intellectual property, licences, warranties etc) including security, inventory, compliance, usage and disposal, aiming to protect and secure the corporate assets portfolio, optimise the total cost of ownership and sustainability by minimising operating costs, improving investment decisions and capitalising on potential opportunities. Knowledge and use of international standards for asset management and close integration with security, change, and configuration management are examples of enhanced asset management development.",
        "code": "ASMG",
        "level": 4,
        "levelDescription": "Controls IT assets in one or more significant areas, ensuring that administration of the acquisition, storage, distribution, movement and disposal of assets is carried out. Produces and analyses registers and histories of authorised assets (including secure master copies of software, documentation, data, licenses and agreements for supply, warranty and maintenance), and verifies that all these assets are in a known state and location. Acts to highlight and resolve potential instances of unauthorised assets such as unlicensed copies of software."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service transition",
        "title": "Change management",
        "description": "The management of change to the service infrastructure including service assets, configuration items and associated documentation. Change management uses requests for change (RFC) for standard or emergency changes, and changes due to incidents or problems to provide effective control and reduction of risk to the availability, performance, security and compliance of the business services impacted by the change.",
        "code": "CHMG",
        "level": 6,
        "levelDescription": "Sets the organisation's policy for the management of change in live services and test environments. Ensures effective control and treatment of risk to the availability, performance, security and compliance of the business services impacted."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service transition",
        "title": "Change management",
        "description": "The management of change to the service infrastructure including service assets, configuration items and associated documentation. Change management uses requests for change (RFC) for standard or emergency changes, and changes due to incidents or problems to provide effective control and reduction of risk to the availability, performance, security and compliance of the business services impacted by the change.",
        "code": "CHMG",
        "level": 5,
        "levelDescription": "Develops implementation plans for complex requests for change. Evaluates risks to the integrity of service environment inherent in proposed implementations (including availability, performance, security and compliance of the business services impacted). Seeks authority for those activities, reviews the effectiveness of change implementation, suggests improvement to organisational procedures governing change management. Leads the assessment, analysis, development, documentation and implementation of changes based on requests for change."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service transition",
        "title": "Change management",
        "description": "The management of change to the service infrastructure including service assets, configuration items and associated documentation. Change management uses requests for change (RFC) for standard or emergency changes, and changes due to incidents or problems to provide effective control and reduction of risk to the availability, performance, security and compliance of the business services impacted by the change.",
        "code": "CHMG",
        "level": 4,
        "levelDescription": "Assesses, analyses, develops, documents and implements changes based on requests for change."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service transition",
        "title": "Change management",
        "description": "The management of change to the service infrastructure including service assets, configuration items and associated documentation. Change management uses requests for change (RFC) for standard or emergency changes, and changes due to incidents or problems to provide effective control and reduction of risk to the availability, performance, security and compliance of the business services impacted by the change.",
        "code": "CHMG",
        "level": 3,
        "levelDescription": "Develops, documents and implements changes based on requests for change. Applies change control procedures."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service transition",
        "title": "Change management",
        "description": "The management of change to the service infrastructure including service assets, configuration items and associated documentation. Change management uses requests for change (RFC) for standard or emergency changes, and changes due to incidents or problems to provide effective control and reduction of risk to the availability, performance, security and compliance of the business services impacted by the change.",
        "code": "CHMG",
        "level": 2,
        "levelDescription": "Documents changes based on requests for change. Applies change control procedures."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service transition",
        "title": "Release and deployment",
        "description": "The management of the processes, systems and functions to package, build, test and deploy changes and updates (which are bounded as 'releases') into a live environment, establishing or continuing the specified Service, to enable controlled and effective handover to Operations and the user community.",
        "code": "RELM",
        "level": 6,
        "levelDescription": "Sets the release policy for the organisation in the context of both development and production/operations. Ensures that management processes, tools, techniques and personnel are in place to ensure that the transition of services, service components and packages are planned and compliant and that test and validation and configuration management are partnered in all release and deployment activities. Provides authorisation for critical release activity and point of escalation."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service transition",
        "title": "Release and deployment",
        "description": "The management of the processes, systems and functions to package, build, test and deploy changes and updates (which are bounded as 'releases') into a live environment, establishing or continuing the specified Service, to enable controlled and effective handover to Operations and the user community.",
        "code": "RELM",
        "level": 5,
        "levelDescription": "Leads the assessment, analysis, planning and design of release packages, including assessment of risk. Liaises with business and IT partners on release scheduling and communication of progress. Conducts post release reviews. Ensures release processes and procedures are applied."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service transition",
        "title": "Release and deployment",
        "description": "The management of the processes, systems and functions to package, build, test and deploy changes and updates (which are bounded as 'releases') into a live environment, establishing or continuing the specified Service, to enable controlled and effective handover to Operations and the user community.",
        "code": "RELM",
        "level": 4,
        "levelDescription": "Assesses and analyses release components. Provides input to scheduling. Carries out the builds and tests in coordination with testers and component specialists maintaining and administering the tools and methods ' manual or automatic - and ensuring, where possible, information exchange with configuration management. Ensures release processes and procedures are maintained."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service transition",
        "title": "Release and deployment",
        "description": "The management of the processes, systems and functions to package, build, test and deploy changes and updates (which are bounded as 'releases') into a live environment, establishing or continuing the specified Service, to enable controlled and effective handover to Operations and the user community.",
        "code": "RELM",
        "level": 3,
        "levelDescription": "Uses the tools and techniques for specific areas of release and deployment activities. Administers the recording of activities, logging of results and documents technical activity undertaken. May carry out early life support activities such as providing support advice to initial users."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "System software",
        "description": "The provision of specialist expertise to facilitate and execute the installation and maintenance of system software such as operating systems, data management products, office automation products and other utility software.",
        "code": "SYSP",
        "level": 5,
        "levelDescription": "Evaluates new system software, reviews system software updates and identifies those that merit action. Ensures that system software is tailored to facilitate the achievement of service objectives. Plans the installation and testing of new versions of system software. Investigates and coordinates the resolution of potential and actual service problems. Ensures that operational documentation for system software is fit for purpose and current. Advises on the correct and effective use of system software."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "System software",
        "description": "The provision of specialist expertise to facilitate and execute the installation and maintenance of system software such as operating systems, data management products, office automation products and other utility software.",
        "code": "SYSP",
        "level": 4,
        "levelDescription": "Reviews system software updates and identifies those that merit action. Tailors system software to maximise hardware functionality. Installs and tests new versions of system software. Investigates and coordinates the resolution of potential and actual service problems. Prepares and maintains operational documentation for system software. Advises on the correct and effective use of system software."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "System software",
        "description": "The provision of specialist expertise to facilitate and execute the installation and maintenance of system software such as operating systems, data management products, office automation products and other utility software.",
        "code": "SYSP",
        "level": 3,
        "levelDescription": "Uses system management software and tools to collect agreed performance statistics. Carries out agreed system software maintenance tasks."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Capacity management",
        "description": "The management of the capability, functionality and sustainability of service components (including hardware, software, network resources and software/infrastructure as a Service) to meet current and forecast needs in a cost efficient manner aligned to the business. This includes predicting both long-term changes and short-term variations in the level of capacity required to execute the service, and deployment, where appropriate, of techniques to control the demand for a particular resource or service.",
        "code": "CPMG",
        "level": 6,
        "levelDescription": "Develops policy and strategies to ensure all the performance measures of IT services meet the needs of the business and performs to any service requirements or service level agreements which may be in place. Carries out forecasts on capacity over the organisation's planning or budgeting cycle. Ensures that the policies and standards for capacity management are fit for purpose, current and are correctly implemented. Reviews new business proposals and provides specialist advice on capacity and demand issues."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Capacity management",
        "description": "The management of the capability, functionality and sustainability of service components (including hardware, software, network resources and software/infrastructure as a Service) to meet current and forecast needs in a cost efficient manner aligned to the business. This includes predicting both long-term changes and short-term variations in the level of capacity required to execute the service, and deployment, where appropriate, of techniques to control the demand for a particular resource or service.",
        "code": "CPMG",
        "level": 5,
        "levelDescription": "Drafts and maintains standards and procedures for service component capacity management. Ensures the correct implementation of standards and procedures. Pro-actively reviews information in conjunction with service level agreements to identify any capacity issues and specifies any required changes. Works with business users to agree and implement short and medium term modifications to demand."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Capacity management",
        "description": "The management of the capability, functionality and sustainability of service components (including hardware, software, network resources and software/infrastructure as a Service) to meet current and forecast needs in a cost efficient manner aligned to the business. This includes predicting both long-term changes and short-term variations in the level of capacity required to execute the service, and deployment, where appropriate, of techniques to control the demand for a particular resource or service.",
        "code": "CPMG",
        "level": 4,
        "levelDescription": "Monitors service component capacity and initiates actions to resolve any shortfalls according to agreed procedures. Applies techniques to control the demand upon a particular resource or service."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Security administration",
        "description": "The provision of operational security management and administrative services. Typically includes the authorisation and monitoring of access to IT facilities or infrastructure, the investigation of unauthorised access and compliance with relevant legislation.",
        "code": "SCAD",
        "level": 6,
        "levelDescription": "Develops policies, standards, processes, guidelines for ensuring the physical and electronic security of automated systems. Ensures that the policy and standards for security administration are fit for purpose, current and are correctly implemented. Reviews new business proposals and provides specialist advice on security issues and implications."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Security administration",
        "description": "The provision of operational security management and administrative services. Typically includes the authorisation and monitoring of access to IT facilities or infrastructure, the investigation of unauthorised access and compliance with relevant legislation.",
        "code": "SCAD",
        "level": 5,
        "levelDescription": "Monitors the application and compliance of security administration procedures and reviews information systems for actual or potential breaches in security. Ensures that all identified breaches in security are promptly and thoroughly investigated and that any system changes required to maintain security are implemented. Ensures that security records are accurate and complete and that request for support are dealt with according to set standards and procedures. Contributes to the creation and maintenance of policy, standards, procedures and documentation for security."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Security administration",
        "description": "The provision of operational security management and administrative services. Typically includes the authorisation and monitoring of access to IT facilities or infrastructure, the investigation of unauthorised access and compliance with relevant legislation.",
        "code": "SCAD",
        "level": 4,
        "levelDescription": "Maintains security administration processes and checks that all requests for support are dealt with according to agreed procedures. Provides guidance in defining access rights and privileges. Investigates security breaches in accordance with established procedures and recommends required actions and supports / follows up to ensure these are implemented."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Security administration",
        "description": "The provision of operational security management and administrative services. Typically includes the authorisation and monitoring of access to IT facilities or infrastructure, the investigation of unauthorised access and compliance with relevant legislation.",
        "code": "SCAD",
        "level": 3,
        "levelDescription": "Investigates minor security breaches in accordance with established procedures. Assists users in defining their access rights and privileges. Performs non-standard security administration tasks and resolves security administration issues."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Security administration",
        "description": "The provision of operational security management and administrative services. Typically includes the authorisation and monitoring of access to IT facilities or infrastructure, the investigation of unauthorised access and compliance with relevant legislation.",
        "code": "SCAD",
        "level": 2,
        "levelDescription": "Receives and responds to routine requests for security support. Maintains records and advises relevant persons of actions taken. Assists in the investigation and resolution of issues relating to access controls and security systems."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Security administration",
        "description": "The provision of operational security management and administrative services. Typically includes the authorisation and monitoring of access to IT facilities or infrastructure, the investigation of unauthorised access and compliance with relevant legislation.",
        "code": "SCAD",
        "level": 1,
        "levelDescription": "Performs simple security administration tasks. Maintains relevant records and documentation."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Penetration testing",
        "description": "The assessment of organisational vulnerabilities through the design and execution of penetration tests that demonstrate how an adversary can either subvert the organisation's security goals (e.g. the protection of specific Intellectual Property) or achieve specific adversarial objectives (e.g. establishment of a covert Command and Control infrastructure). Pen Test results provide deeper insight into the business risks of various vulnerabilities.",
        "code": "PENT",
        "level": 4,
        "levelDescription": "Maintains current knowledge of malware attacks, and other cyber security threats. Creates test cases using in-depth technical analysis of risks and typical vulnerabilities. Produces test scripts, materials and test packs to test new and existing software or services. Specifies requirements for environment, data, resources and tools. Interprets, executes and documents complex test scripts using agreed methods and standards. Records and analyses actions and results. Reviews test results and modifies tests if necessary. Provides reports on progress, anomalies, risks and issues associated with the overall project. Reports on system quality and collects metrics on test cases. Provides specialist advice to support others."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Penetration testing",
        "description": "The assessment of organisational vulnerabilities through the design and execution of penetration tests that demonstrate how an adversary can either subvert the organisation's security goals (e.g. the protection of specific Intellectual Property) or achieve specific adversarial objectives (e.g. establishment of a covert Command and Control infrastructure). Pen Test results provide deeper insight into the business risks of various vulnerabilities.",
        "code": "PENT",
        "level": 5,
        "levelDescription": "Coordinates and manages planning of penetration tests, within a defined area of business activity. Delivers objective insights into the existence of vulnerabilities, the effectiveness of defences and mitigating controls - both those already in place and those planned for future implementation. Takes responsibility for integrity of testing activities and coordinates the execution of these activities. Provides authoritative advice and guidance on the planning and execution of vulnerability tests. Defines and communicates the test strategy. Manages all test processes, and contributes to corporate security testing standards."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Penetration testing",
        "description": "The assessment of organisational vulnerabilities through the design and execution of penetration tests that demonstrate how an adversary can either subvert the organisation's security goals (e.g. the protection of specific Intellectual Property) or achieve specific adversarial objectives (e.g. establishment of a covert Command and Control infrastructure). Pen Test results provide deeper insight into the business risks of various vulnerabilities.",
        "code": "PENT",
        "level": 6,
        "levelDescription": "Takes a comprehensive approach to seeking vulnerabilities across the full spectrum of organisation policies, processes, and defences in order to improve organisational readiness, improve training for defensive practitioners, and inspect current performance levels.\n\nDetermines testing policy, and owns the supporting processes. Takes responsibility for the management of all vulnerability testing activities within the organisation. Assesses and advises on the practicality of testing process alternatives. Initiates improvements to test processes and directs their implementation. Assesses suppliers' development and testing capabilities. Manages client relationships with respect to all testing matters."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Radio frequency engineering",
        "description": "The deployment, integration, calibration, tuning and maintenance of radio frequency (RF) and analogue elements of IT systems.",
        "code": "RFEN",
        "level": 6,
        "levelDescription": "Specifies radio frequency equipment performance requirements and sets maintenance policy."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Radio frequency engineering",
        "description": "The deployment, integration, calibration, tuning and maintenance of radio frequency (RF) and analogue elements of IT systems.",
        "code": "RFEN",
        "level": 5,
        "levelDescription": "Develops maintenance schedules and procedures. Approves equipment upgrades and modifications. Monitors system performance, recommends equipment modifications and changes to operating procedures, servicing methods and schedules."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Radio frequency engineering",
        "description": "The deployment, integration, calibration, tuning and maintenance of radio frequency (RF) and analogue elements of IT systems.",
        "code": "RFEN",
        "level": 4,
        "levelDescription": "Investigates and resolves system-wide fault conditions using a wide range of diagnostic tools and techniques. Reconfigures equipment to circumvent temporary outages."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Radio frequency engineering",
        "description": "The deployment, integration, calibration, tuning and maintenance of radio frequency (RF) and analogue elements of IT systems.",
        "code": "RFEN",
        "level": 3,
        "levelDescription": "Deploys, sets up, tunes and calibrates radio frequency/analogue elements following maintenance schedules and using appropriate tools and test equipment. Incorporates hardware/firmware modifications. Interprets automatic fault/performance indications and resolves faults down to discrete component level or escalates according to given procedures."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Radio frequency engineering",
        "description": "The deployment, integration, calibration, tuning and maintenance of radio frequency (RF) and analogue elements of IT systems.",
        "code": "RFEN",
        "level": 2,
        "levelDescription": "Assists with setting up, tuning and functional checks of radio frequency/analogue elements. Resolves faults down to line replaceable unit (LRU) level or escalates according to given procedures. Carries out user confidence checks and escalates faults according to given procedures."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Application support",
        "description": "The provision of application maintenance and support services, either directly to users of the systems or to service delivery functions. Support typically includes investigation and resolution of issues and may also include performance monitoring. Issues may be resolved by providing advice or training to users, by devising corrections (permanent or temporary) for faults, making general or site-specific modifications, updating documentation, manipulating data, or defining enhancements Support often involves close collaboration with the system's developers and/or with colleagues specialising in different areas, such as Database administration or Network support.",
        "code": "ASUP",
        "level": 5,
        "levelDescription": "Drafts and maintains procedures and documentation for applications support. Manages application enhancements to improve business performance. Advises on application security, licensing, upgrades, backups, and disaster recovery needs. Ensures that all requests for support are dealt with according to set standards and procedures."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Application support",
        "description": "The provision of application maintenance and support services, either directly to users of the systems or to service delivery functions. Support typically includes investigation and resolution of issues and may also include performance monitoring. Issues may be resolved by providing advice or training to users, by devising corrections (permanent or temporary) for faults, making general or site-specific modifications, updating documentation, manipulating data, or defining enhancements Support often involves close collaboration with the system's developers and/or with colleagues specialising in different areas, such as Database administration or Network support.",
        "code": "ASUP",
        "level": 4,
        "levelDescription": "Maintains application support processes, and checks that all requests for support are dealt with according to agreed procedures. Uses application management software and tools to investigate issues, collect performance statistics and create reports."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Application support",
        "description": "The provision of application maintenance and support services, either directly to users of the systems or to service delivery functions. Support typically includes investigation and resolution of issues and may also include performance monitoring. Issues may be resolved by providing advice or training to users, by devising corrections (permanent or temporary) for faults, making general or site-specific modifications, updating documentation, manipulating data, or defining enhancements Support often involves close collaboration with the system's developers and/or with colleagues specialising in different areas, such as Database administration or Network support.",
        "code": "ASUP",
        "level": 3,
        "levelDescription": "Identifies and resolves issues with applications, following agreed procedures. Uses application management software and tools to collect agreed performance statistics. Carries out agreed applications maintenance tasks."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Application support",
        "description": "The provision of application maintenance and support services, either directly to users of the systems or to service delivery functions. Support typically includes investigation and resolution of issues and may also include performance monitoring. Issues may be resolved by providing advice or training to users, by devising corrections (permanent or temporary) for faults, making general or site-specific modifications, updating documentation, manipulating data, or defining enhancements Support often involves close collaboration with the system's developers and/or with colleagues specialising in different areas, such as Database administration or Network support.",
        "code": "ASUP",
        "level": 2,
        "levelDescription": "Assists in the investigation and resolution of issues relating to applications. Assists with specified maintenance procedures."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "IT Infrastructure",
        "description": "The operation and control of the IT infrastructure (typically hardware, software, data stored on various media, and all equipment within wide and local area networks) required to deliver and support IT services and products to meet the needs of a business. Includes preparation for new or changed services, operation of the change process, the maintenance of regulatory, legal and professional standards, the building and management of systems and components in virtualised computing environments and the monitoring of performance of systems and services in relation to their contribution to business performance, their security and their sustainability.",
        "code": "ITOP",
        "level": 4,
        "levelDescription": "Provides technical expertise to enable the correct application of operational procedures. Uses network management tools to determine network load and performance statistics. Contributes to the planning and implementation of maintenance and installation work, including building and management of systems and components in virtualised computing environments. Implements agreed network changes and maintenance routines. Identifies operational problems and contributes to their resolution, checking that they are managed in accordance with agreed standards and procedures. Provides reports and proposals for improvement, to specialists, users and managers."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "IT Infrastructure",
        "description": "The operation and control of the IT infrastructure (typically hardware, software, data stored on various media, and all equipment within wide and local area networks) required to deliver and support IT services and products to meet the needs of a business. Includes preparation for new or changed services, operation of the change process, the maintenance of regulatory, legal and professional standards, the building and management of systems and components in virtualised computing environments and the monitoring of performance of systems and services in relation to their contribution to business performance, their security and their sustainability.",
        "code": "ITOP",
        "level": 3,
        "levelDescription": "Carries out agreed operational procedures, including network configuration, installation and maintenance. Uses network management tools to collect and report on network load and performance statistics. Contributes to the implementation of maintenance and installation work. Uses standard procedures and tools to carry out defined system backups, restoring data where necessary. Identifies operational problems and contributes to their resolution."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "IT Infrastructure",
        "description": "The operation and control of the IT infrastructure (typically hardware, software, data stored on various media, and all equipment within wide and local area networks) required to deliver and support IT services and products to meet the needs of a business. Includes preparation for new or changed services, operation of the change process, the maintenance of regulatory, legal and professional standards, the building and management of systems and components in virtualised computing environments and the monitoring of performance of systems and services in relation to their contribution to business performance, their security and their sustainability.",
        "code": "ITOP",
        "level": 2,
        "levelDescription": "Carries out agreed operational procedures of a routine nature. Contributes to maintenance, installation and problem resolution."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "IT Infrastructure",
        "description": "The operation and control of the IT infrastructure (typically hardware, software, data stored on various media, and all equipment within wide and local area networks) required to deliver and support IT services and products to meet the needs of a business. Includes preparation for new or changed services, operation of the change process, the maintenance of regulatory, legal and professional standards, the building and management of systems and components in virtualised computing environments and the monitoring of performance of systems and services in relation to their contribution to business performance, their security and their sustainability.",
        "code": "ITOP",
        "level": 1,
        "levelDescription": "Contributes, under instruction, to system operation."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Database administration",
        "description": "The installation, configuration, upgrade, administration, monitoring and maintenance of databases.",
        "code": "DBAD",
        "level": 5,
        "levelDescription": "Drafts and maintains procedures and documentation for databases. Manages database configuration including installing and upgrading software and maintaining relevant documentation. Contributes to the setting of standards for definition, security and integrity of database objects and ensures conformance to these standards. Monitors database activity and resource usage. Optimises database performance and plans for forecast resource needs."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Database administration",
        "description": "The installation, configuration, upgrade, administration, monitoring and maintenance of databases.",
        "code": "DBAD",
        "level": 4,
        "levelDescription": "Uses database management system software and tools, and knowledge of logical database schemata, to investigate problems and collect performance statistics and create reports. Carries out routine configuration/installation and reconfiguration of database and related products."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Database administration",
        "description": "The installation, configuration, upgrade, administration, monitoring and maintenance of databases.",
        "code": "DBAD",
        "level": 3,
        "levelDescription": "Uses database management system software and tools to collect agreed performance statistics. Carries out agreed database maintenance and administration tasks."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Database administration",
        "description": "The installation, configuration, upgrade, administration, monitoring and maintenance of databases.",
        "code": "DBAD",
        "level": 2,
        "levelDescription": "Assists in database support activities."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Storage management",
        "description": "The planning, implementation, configuration and tuning of storage hardware and software covering online, offline, remote and offsite data storage (backup, archiving and recovery) and ensuring compliance with regulatory and security requirements.",
        "code": "STMG",
        "level": 6,
        "levelDescription": "Develops strategies for managing storage and data based on level of criticality of information, managing compliance with regulatory and security requirements. Drafts and maintains policies and standards for the corporate data management practice and align storage investments and data management policies to meet the business goals based on the information value, classification of data, recovery point and recovery time objectives."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Storage management",
        "description": "The planning, implementation, configuration and tuning of storage hardware and software covering online, offline, remote and offsite data storage (backup, archiving and recovery) and ensuring compliance with regulatory and security requirements.",
        "code": "STMG",
        "level": 5,
        "levelDescription": "Manages the storage and backup systems to provide agreed service levels. Responsible for creating, improving, and supporting quality IT services with optimal utilisation of storage resources, ensuring data security, availability and integrity of business data. Drafts standards, procedures and guidelines for implementing data protection and disaster recovery functionality for all business applications and business data using different online and offline storage devices."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Storage management",
        "description": "The planning, implementation, configuration and tuning of storage hardware and software covering online, offline, remote and offsite data storage (backup, archiving and recovery) and ensuring compliance with regulatory and security requirements.",
        "code": "STMG",
        "level": 4,
        "levelDescription": "Reviews capacity, performance, availability and other operational metrics and take appropriate action to ensure corrective and proactive maintenance of storage and backup systems to support the requirement to protect and secure business information. Creates reports and proposals for improvement and contributes to the planning and implementation of new installations and scheduled maintenance and changes within the system. Prepares and maintains operational procedures and provides technical expertise and appropriate information to the management."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Storage management",
        "description": "The planning, implementation, configuration and tuning of storage hardware and software covering online, offline, remote and offsite data storage (backup, archiving and recovery) and ensuring compliance with regulatory and security requirements.",
        "code": "STMG",
        "level": 3,
        "levelDescription": "Performs regular high-performance, scalable backups and restores on a schedule and tracks offsite storage. Carries out documented configuration for allocation of storage, installation and maintenance of secure storage systems as per the agreed operational procedure (e.g. using replication software to allow resilience). Identifies operational problems and contributes to their resolution (e.g. monitoring SAN for disk failures and replacing). Uses standard management and reporting tools to collect and report on storage utilisation, performance and backup statistics."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Network support",
        "description": "The provision of network maintenance and support services. Support may be provided both to users of the systems and to service delivery functions. Support typically takes the form of investigating and resolving problems and providing information about the systems. It may also include monitoring their performance. Problems may be resolved by providing advice or training to users about the network's functionality, correct operation or constraints, by devising work-arounds, correcting faults, or making general or site-specific modifications.",
        "code": "NTAS",
        "level": 5,
        "levelDescription": "Drafts and maintains procedures and documentation for network support. Makes a significant contribution to the investigation, diagnosis and resolution of network problems. Ensures that all requests for support are dealt with according to set standards and procedures."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Network support",
        "description": "The provision of network maintenance and support services. Support may be provided both to users of the systems and to service delivery functions. Support typically takes the form of investigating and resolving problems and providing information about the systems. It may also include monitoring their performance. Problems may be resolved by providing advice or training to users about the network's functionality, correct operation or constraints, by devising work-arounds, correcting faults, or making general or site-specific modifications.",
        "code": "NTAS",
        "level": 4,
        "levelDescription": "Maintains the network support process and checks that all requests for support are dealt with according to agreed procedures. Uses network management software and tools to investigate and diagnose network problems, collect performance statistics and create reports, working with users, other staff and suppliers as appropriate."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Network support",
        "description": "The provision of network maintenance and support services. Support may be provided both to users of the systems and to service delivery functions. Support typically takes the form of investigating and resolving problems and providing information about the systems. It may also include monitoring their performance. Problems may be resolved by providing advice or training to users about the network's functionality, correct operation or constraints, by devising work-arounds, correcting faults, or making general or site-specific modifications.",
        "code": "NTAS",
        "level": 3,
        "levelDescription": "Identifies and resolves network problems following agreed procedures. Uses network management software and tools to collect agreed performance statistics. Carries out agreed network maintenance tasks."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Network support",
        "description": "The provision of network maintenance and support services. Support may be provided both to users of the systems and to service delivery functions. Support typically takes the form of investigating and resolving problems and providing information about the systems. It may also include monitoring their performance. Problems may be resolved by providing advice or training to users about the network's functionality, correct operation or constraints, by devising work-arounds, correcting faults, or making general or site-specific modifications.",
        "code": "NTAS",
        "level": 2,
        "levelDescription": "Assists in investigation and resolution of network problems. Assists with specified maintenance procedures."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Problem management",
        "description": "The resolution (both reactive and proactive) of problems throughout the information system lifecycle, including classification, prioritisation and initiation of action, documentation of root causes and implementation of remedies to prevent future incidents.",
        "code": "PBMG",
        "level": 5,
        "levelDescription": "Ensures that appropriate action is taken to anticipate, investigate and resolve problems in systems and services. Ensures that such problems are fully documented within the relevant reporting system(s). Enables development of problem solutions. Coordinates the implementation of agreed remedies and preventative measures. Analyses patterns and trends."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Problem management",
        "description": "The resolution (both reactive and proactive) of problems throughout the information system lifecycle, including classification, prioritisation and initiation of action, documentation of root causes and implementation of remedies to prevent future incidents.",
        "code": "PBMG",
        "level": 4,
        "levelDescription": "Initiates and monitors actions to investigate and resolve problems in systems, processes and services. Determines problem fixes/remedies. Assists with the implementation of agreed remedies and preventative measures."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Problem management",
        "description": "The resolution (both reactive and proactive) of problems throughout the information system lifecycle, including classification, prioritisation and initiation of action, documentation of root causes and implementation of remedies to prevent future incidents.",
        "code": "PBMG",
        "level": 3,
        "levelDescription": "Investigates problems in systems, processes and services. Assists with the implementation of agreed remedies and preventative measures."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Incident management",
        "description": "The processing and coordination of appropriate and timely responses to incident reports, including channelling requests for help to appropriate functions for resolution, monitoring resolution activity, and keeping clients appraised of progress towards service restoration.",
        "code": "USUP",
        "level": 5,
        "levelDescription": "Ensures that incidents are handled according to agreed procedures. Investigates escalated incidents to responsible service owners and seeks resolution. Facilitates recovery, following resolution of incidents. Ensures that resolved incidents are properly documented and closed. Analyses causes of incidents, and informs service owners in order to minimise probability of recurrence, and contribute to service improvement. Analyses metrics and reports on performance of incident management process."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Incident management",
        "description": "The processing and coordination of appropriate and timely responses to incident reports, including channelling requests for help to appropriate functions for resolution, monitoring resolution activity, and keeping clients appraised of progress towards service restoration.",
        "code": "USUP",
        "level": 4,
        "levelDescription": "Prioritises and diagnoses incidents according to agreed procedures. \nInvestigates causes of incidents and seeks resolution.\nEscalates unresolved incidents. \nFacilitates recovery, following resolution of incidents.\nDocuments and closes resolved incidents according to agreed procedures."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Incident management",
        "description": "The processing and coordination of appropriate and timely responses to incident reports, including channelling requests for help to appropriate functions for resolution, monitoring resolution activity, and keeping clients appraised of progress towards service restoration.",
        "code": "USUP",
        "level": 3,
        "levelDescription": "Following agreed procedures, identifies, registers and categorises incidents. \nGathers information to enable incident resolution and promptly allocates incidents as appropriate. \nMaintains records and advises relevant persons of actions taken."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Incident management",
        "description": "The processing and coordination of appropriate and timely responses to incident reports, including channelling requests for help to appropriate functions for resolution, monitoring resolution activity, and keeping clients appraised of progress towards service restoration.",
        "code": "USUP",
        "level": 2,
        "levelDescription": "Following agreed procedures, identifies, registers and categorises incidents. \nGathers information to enable incident resolution and promptly allocates incidents as appropriate."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Facilities management",
        "description": "The planning, control and management of all the facilities which, collectively, make up the IT estate. This involves provision and management of the physical environment, including space and power allocation, and environmental monitoring to provide statistics on energy usage. Encompasses physical access control, and adherence to all mandatory policies and regulations concerning health and safety at work.",
        "code": "DCMA",
        "level": 6,
        "levelDescription": "Sets the organisational policy for the management of the IT estate and ensures that policy is reflected using best practice. Develops strategies to ensure future requirements for data centre space can be forecast and fulfilled. Takes overall responsibility for adherence to health  safety regulations and electrical safety policy. Seeks out and ensures use of industry best practice to ensure future plans are aligned to meet corporate sustainability targets."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Facilities management",
        "description": "The planning, control and management of all the facilities which, collectively, make up the IT estate. This involves provision and management of the physical environment, including space and power allocation, and environmental monitoring to provide statistics on energy usage. Encompasses physical access control, and adherence to all mandatory policies and regulations concerning health and safety at work.",
        "code": "DCMA",
        "level": 5,
        "levelDescription": "Develops and maintains the standards, processes and documentation for data centres. Optimises efficiency in population of data centre space. Ensures adherence to all relevant policies and processes. Uses data centre management tools to plan, record and manage the types of infrastructure installed and the associated power, space and cooling capabilities, usage and actions to meet corporate sustainability targets."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Facilities management",
        "description": "The planning, control and management of all the facilities which, collectively, make up the IT estate. This involves provision and management of the physical environment, including space and power allocation, and environmental monitoring to provide statistics on energy usage. Encompasses physical access control, and adherence to all mandatory policies and regulations concerning health and safety at work.",
        "code": "DCMA",
        "level": 4,
        "levelDescription": "Uses data centre management tools to produce management information on power, cooling and space and investigate issues where necessary. Carries out routine audit and checks to ensure adherence to policies and procedures. Facilitates the implementation of mandatory electrical safety testing."
    },
    {
        "category": "Delivery and operation",
        "subCategory": "Service operation",
        "title": "Facilities management",
        "description": "The planning, control and management of all the facilities which, collectively, make up the IT estate. This involves provision and management of the physical environment, including space and power allocation, and environmental monitoring to provide statistics on energy usage. Encompasses physical access control, and adherence to all mandatory policies and regulations concerning health and safety at work.",
        "code": "DCMA",
        "level": 3,
        "levelDescription": "Monitors compliance against agreed processes and investigates, assesses and resolves incidents of non-compliance, escalating where necessary. Grants users required physical accesses and monitors and reports on overall access control."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Skill management",
        "title": "Learning and development management",
        "description": "The provision of learning and development processes (including learning management systems) in order to develop the professional, business and/or technical skills required by the organisation.",
        "code": "ETMG",
        "level": 7,
        "levelDescription": "Develops and controls the learning  development strategy for the organisation, ensuring the needs of the organisation are met, both at strategic and tactical level."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Skill management",
        "title": "Learning and development management",
        "description": "The provision of learning and development processes (including learning management systems) in order to develop the professional, business and/or technical skills required by the organisation.",
        "code": "ETMG",
        "level": 6,
        "levelDescription": "Determines the learning and development programme and delivery mechanisms needed to grow staff skills in line with business needs. Identifies appropriate accreditation and qualification paths, applicable to individuals within the organisation. Evaluates learning outcomes. Manages the development and provision of all learning, taking account of the strategic aims of the employing organisation."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Skill management",
        "title": "Learning and development management",
        "description": "The provision of learning and development processes (including learning management systems) in order to develop the professional, business and/or technical skills required by the organisation.",
        "code": "ETMG",
        "level": 5,
        "levelDescription": "Manages the provision of learning and development, ensuring optimum use of resources. Maintains, publicises and promotes catalogue of learning and development activities. Ensures that courses are up to date and accredited (when required). Arranges facilities and schedules with learning and development providers as appropriate."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Skill management",
        "title": "Learning and development management",
        "description": "The provision of learning and development processes (including learning management systems) in order to develop the professional, business and/or technical skills required by the organisation.",
        "code": "ETMG",
        "level": 4,
        "levelDescription": "Contributes to the development and maintenance of a catalogue of learning and development resources. Books and organises learning events. Updates and controls training records, including attainment of certificates and accreditations."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Skill management",
        "title": "Learning and development management",
        "description": "The provision of learning and development processes (including learning management systems) in order to develop the professional, business and/or technical skills required by the organisation.",
        "code": "ETMG",
        "level": 3,
        "levelDescription": "Contributes to the maintenance and updates of training records and training catalogue."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Skill management",
        "title": "Learning assessment and evaluation",
        "description": "The assessment of knowledge, skills and behaviour by any means whether formal or informal against capability and qualification frameworks such as SFIA. The evaluation of learning or education programmes against defined outcomes.",
        "code": "LEDA",
        "level": 6,
        "levelDescription": "Specifies methods, tools and standards for assessing knowledge, skill and behaviour of learners. Specifies the methods, tools and standards for evaluating the impact of a learning programme against defined outcomes."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Skill management",
        "title": "Learning assessment and evaluation",
        "description": "The assessment of knowledge, skills and behaviour by any means whether formal or informal against capability and qualification frameworks such as SFIA. The evaluation of learning or education programmes against defined outcomes.",
        "code": "LEDA",
        "level": 5,
        "levelDescription": "Administers and ensures the accuracy of knowledge, skill and behavioural assessments based on specified methods and according to specified standards. Conducts analysis and evaluation of learning programmes using tools, methods and following standards."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Skill management",
        "title": "Learning assessment and evaluation",
        "description": "The assessment of knowledge, skills and behaviour by any means whether formal or informal against capability and qualification frameworks such as SFIA. The evaluation of learning or education programmes against defined outcomes.",
        "code": "LEDA",
        "level": 4,
        "levelDescription": "Performs routine and non-routine assessments of knowledge, skills and behaviour using specified methods and according to specified standards. Gathers inputs for the analysis and evaluation of learning programmes."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Skill management",
        "title": "Learning assessment and evaluation",
        "description": "The assessment of knowledge, skills and behaviour by any means whether formal or informal against capability and qualification frameworks such as SFIA. The evaluation of learning or education programmes against defined outcomes.",
        "code": "LEDA",
        "level": 3,
        "levelDescription": "Performs routine assessments of knowledge and experience using specified methods and according to specified standards."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Skill management",
        "title": "Learning design and development",
        "description": "The specification, design, creation, packaging and maintenance of materials and resources for use in learning and development in the workplace or in compulsory, further or higher education. Typically involves the assimilation of information from existing sources, selection and re-presentation in a form suitable to the intended purpose and audience. Includes instructional design, content development, configuration and testing of learning environments, and use of appropriate current technologies such as audio, video, simulation and assessment. May include third party accreditation.",
        "code": "TMCR",
        "level": 5,
        "levelDescription": "Specifies the content and structure of learning and development materials. Takes responsibility for design, creation, packaging and maintenance and manages development to deliver agreed outcomes. Where required, designs, configures and tests learning environments, including population of simulated databases, and replication of external systems, interfaces, and assessment systems. Secures external accreditations as appropriate."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Skill management",
        "title": "Learning design and development",
        "description": "The specification, design, creation, packaging and maintenance of materials and resources for use in learning and development in the workplace or in compulsory, further or higher education. Typically involves the assimilation of information from existing sources, selection and re-presentation in a form suitable to the intended purpose and audience. Includes instructional design, content development, configuration and testing of learning environments, and use of appropriate current technologies such as audio, video, simulation and assessment. May include third party accreditation.",
        "code": "TMCR",
        "level": 4,
        "levelDescription": "Designs, creates, develops, customises and maintains learning materials and resources to deliver agreed outcomes, and meet accreditation requirements if appropriate. Assists with design, configuration and testing of learning environments, including creation of simulated data, and replication of external systems, interfaces and assessment systems."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Skill management",
        "title": "Learning design and development",
        "description": "The specification, design, creation, packaging and maintenance of materials and resources for use in learning and development in the workplace or in compulsory, further or higher education. Typically involves the assimilation of information from existing sources, selection and re-presentation in a form suitable to the intended purpose and audience. Includes instructional design, content development, configuration and testing of learning environments, and use of appropriate current technologies such as audio, video, simulation and assessment. May include third party accreditation.",
        "code": "TMCR",
        "level": 6,
        "levelDescription": "The specification of solutions for use in learning and development programs in the workplace or in compulsory, further or higher education. Commissions the development of learning materials, allocates resources to learning teams, defines learning outcomes. Leads learning programs, recommends and specifies learning interventions for design, development and deployment according to learning outcomes."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Skill management",
        "title": "Learning delivery",
        "description": "The transfer of business and/or technical skills and knowledge and the promotion of professional attitudes in order to facilitate learning and development. Uses a range of techniques, resources and media (which might include eLearning, on-line virtual environments, self-assessment, peer-assisted learning, simulation, and other current methods).",
        "code": "ETDL",
        "level": 5,
        "levelDescription": "Plans and schedules the delivery of learning activities, based on learning objectives. Manages the delivery of programmes of learning. Customises formal and informal learning activities, incorporating relevant business scenarios and case studies. Designs appropriate environments, and delivers learning activities to specialist audiences. Advises/coaches others in learning delivery techniques and options."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Skill management",
        "title": "Learning delivery",
        "description": "The transfer of business and/or technical skills and knowledge and the promotion of professional attitudes in order to facilitate learning and development. Uses a range of techniques, resources and media (which might include eLearning, on-line virtual environments, self-assessment, peer-assisted learning, simulation, and other current methods).",
        "code": "ETDL",
        "level": 4,
        "levelDescription": "Prepares or customises and delivers learning activities to a variety of audiences."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Skill management",
        "title": "Learning delivery",
        "description": "The transfer of business and/or technical skills and knowledge and the promotion of professional attitudes in order to facilitate learning and development. Uses a range of techniques, resources and media (which might include eLearning, on-line virtual environments, self-assessment, peer-assisted learning, simulation, and other current methods).",
        "code": "ETDL",
        "level": 3,
        "levelDescription": "Delivers learning activities to a variety of audiences."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Skill management",
        "title": "Teaching and subject formation",
        "description": "The specification, design, development, delivery and assessment of curricula for computing and for information technology (including electronic communication), at any level of the education system from primary through to tertiary (all age ranges) and in the workplace. \nThe topics addressed are those of the fundamental and more advanced areas of computing and the common skills needed to make productive use of computers and IT systems for both computing and IT professionals and competent users of IT based systems including the ideas of computational thinking and the application of computational concepts to everyday and professional life. Special attention is paid to the methods, techniques and pedagogy (the study of being a teacher, tutor or lecturer, and the process of teaching) of computing  IT education.",
        "code": "TEAC",
        "level": 6,
        "levelDescription": "Leads specification, development and delivery of computing and IT curricula in either a formal educational context, from primary through to tertiary level or in the workplace. Specialises in the advanced aspects of delivering Computing and IT education at the relevant educational level. Uses current techniques and methods to evaluate and critique research in computing and IT education and leads the development of good practice in learning content design, development and delivery."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Skill management",
        "title": "Teaching and subject formation",
        "description": "The specification, design, development, delivery and assessment of curricula for computing and for information technology (including electronic communication), at any level of the education system from primary through to tertiary (all age ranges) and in the workplace. \nThe topics addressed are those of the fundamental and more advanced areas of computing and the common skills needed to make productive use of computers and IT systems for both computing and IT professionals and competent users of IT based systems including the ideas of computational thinking and the application of computational concepts to everyday and professional life. Special attention is paid to the methods, techniques and pedagogy (the study of being a teacher, tutor or lecturer, and the process of teaching) of computing  IT education.",
        "code": "TEAC",
        "level": 5,
        "levelDescription": "Delivers computing and IT curricula either in a formal educational context from primary through to tertiary level or in the workplace. Specialises in delivering Computing and IT education at the relevant educational level. Is aware of the techniques and methods used to evaluate and critique research in computing and IT education and applies good practice in learning content design, development and delivery."
    },
    {
        "category": "Skills and quality",
        "subCategory": "People management",
        "title": "Performance management",
        "description": "The optimisation of performance of people, including determination of capabilities, integration into teams, allocation of tasks, direction, support, guidance, motivation, and management of performance.",
        "code": "PEMT",
        "level": 4,
        "levelDescription": "Supervises individuals and teams. Allocates routine tasks and/or project work. Provides direction, support and guidance as necessary, in line with individuals' skills and abilities. Monitors progress against agreed quality and performance criteria. Acts to facilitate effective working relationships between team members."
    },
    {
        "category": "Skills and quality",
        "subCategory": "People management",
        "title": "Performance management",
        "description": "The optimisation of performance of people, including determination of capabilities, integration into teams, allocation of tasks, direction, support, guidance, motivation, and management of performance.",
        "code": "PEMT",
        "level": 5,
        "levelDescription": "Manages individuals and groups. Allocates responsibilities and/or packages of work. Provides support and guidance as required, in line with individuals' abilities. Delegates responsibilities as appropriate. Advises individuals on career paths, and encourages pro-active development of skills and capabilities. Sets performance targets, and monitors progress against agreed quality and performance criteria. Provides effective feedback, throughout the performance management cycle, to ensure optimum performance. Mentors individuals, possibly within other parts of the organisation. Participates, as appropriate, in formal processes such as compensation negotiations and disciplinary procedures."
    },
    {
        "category": "Skills and quality",
        "subCategory": "People management",
        "title": "Performance management",
        "description": "The optimisation of performance of people, including determination of capabilities, integration into teams, allocation of tasks, direction, support, guidance, motivation, and management of performance.",
        "code": "PEMT",
        "level": 6,
        "levelDescription": "Manages individuals within change and/or service delivery environments. Allocates management and supervisory responsibilities. Provides coaching and support and delegates responsibilities where possible, in order to achieve corporate objectives. Mentors and influences senior individuals in consideration of their career opportunities and contribution to the organisation. Sets performance objectives, and monitors progress against agreed quality and performance criteria. Initiates, develops and monitors effective performance management processes. Leads on formal processes such as compensation negotiations and disciplinary procedures."
    },
    {
        "category": "Skills and quality",
        "subCategory": "People management",
        "title": "Resourcing",
        "description": "The overall resource management of the workforce to enable effective operation of the organisation. Provision of advice on any aspect of acquiring resources, including employees, consultants and contractors.",
        "code": "RESC",
        "level": 6,
        "levelDescription": "Develops and communicates resource management policy, standards and guidelines in line with the organisation's strategic human resource plans. Takes overall responsibility for resource planning, recruitment, selection, assessment, on-boarding and transitioning of resources. Leads the development of plans to ensure that the organisation has appropriately skilled resources to meet organisational objectives and commitments. Ensures that expert support is provided as required. Audits and assesses the ongoing success and effectiveness of resource management processes such as retention analysis, media and supplier assessment, customer satisfaction and validation of selection methods."
    },
    {
        "category": "Skills and quality",
        "subCategory": "People management",
        "title": "Resourcing",
        "description": "The overall resource management of the workforce to enable effective operation of the organisation. Provision of advice on any aspect of acquiring resources, including employees, consultants and contractors.",
        "code": "RESC",
        "level": 5,
        "levelDescription": "Develops plans to ensure that the organisation has appropriately skilled resources to meet organisational objectives and commitments. Manages the effective implementation of resource planning, recruitment, selection, assessment, on-boarding and transitioning of resources. Advises on standards, methods and tools for resource management. Ensures compliance with relevant statutory or external regulations and codes of good practice. Contributes to the development of resource management policies, standards and guidelines and to audits and assessment of resource management processes."
    },
    {
        "category": "Skills and quality",
        "subCategory": "People management",
        "title": "Resourcing",
        "description": "The overall resource management of the workforce to enable effective operation of the organisation. Provision of advice on any aspect of acquiring resources, including employees, consultants and contractors.",
        "code": "RESC",
        "level": 4,
        "levelDescription": "Implements resource plans, including conducting recruitment interviews. Facilitates selection, assessment and on-boarding processes, and internal resource allocation. Contributes to transitioning of resources, complying with relevant statutory or external regulations and codes of good practice."
    },
    {
        "category": "Skills and quality",
        "subCategory": "People management",
        "title": "Professional development",
        "description": "The facilitation of the professional development of individuals, including initiation, monitoring, review and validation of learning and development plans in line with organisational or business requirements. The counselling of participants in all relevant aspects of their continual professional development. The identification of appropriate learning/development resources. Liaison with internal and external training providers. The evaluation of the benefits of continual professional development activities.",
        "code": "PDSV",
        "level": 6,
        "levelDescription": "Determines organisational development needs in line with business needs and strategic direction. Generates development strategies to achieve required change. Develops and leads communities of practice, including defining career pathways. Monitors progress and evaluates business benefits achieved from continual professional development."
    },
    {
        "category": "Skills and quality",
        "subCategory": "People management",
        "title": "Professional development",
        "description": "The facilitation of the professional development of individuals, including initiation, monitoring, review and validation of learning and development plans in line with organisational or business requirements. The counselling of participants in all relevant aspects of their continual professional development. The identification of appropriate learning/development resources. Liaison with internal and external training providers. The evaluation of the benefits of continual professional development activities.",
        "code": "PDSV",
        "level": 5,
        "levelDescription": "Determines the required outcomes for learning or development, from organisational development needs training strategies, and agreed career pathways. Mentors assigned practitioners, ensuring alignment with predetermined statements of required development outcomes. Assists each practitioner with the creation of development plans based on the outcome statements. Ensures that each practitioner records evidence of continuing professional development. Validates practitioners' records at the end of each cycle of planned development, to ensure that achievements and enhanced capabilities are correctly recorded and referenced to the outcome statements. May contribute to practitioners' performance appraisals."
    },
    {
        "category": "Skills and quality",
        "subCategory": "People management",
        "title": "Professional development",
        "description": "The facilitation of the professional development of individuals, including initiation, monitoring, review and validation of learning and development plans in line with organisational or business requirements. The counselling of participants in all relevant aspects of their continual professional development. The identification of appropriate learning/development resources. Liaison with internal and external training providers. The evaluation of the benefits of continual professional development activities.",
        "code": "PDSV",
        "level": 4,
        "levelDescription": "Maintains skills framework, or information about access to standard frameworks. Advises on required outcomes for learning or development, from knowledge of skills frameworks and organisational development needs. Assists practitioners with the process of creating development plans based on outcome statements. Monitors practitioners' continuing professional development records, ensuring that achievements and enhanced capabilities are recorded and referenced to the outcome statements."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Quality and conformance",
        "title": "Quality management",
        "description": "The application of techniques for monitoring and improvement of quality to any aspect of a function or process. The achievement of, and maintenance of compliance to, national and international standards, as appropriate, and to internal policies, including those relating to sustainability and security.",
        "code": "QUMG",
        "level": 7,
        "levelDescription": "Sets the quality strategy for approval and adoption by business management. Measures the extent to which the quality policy meets the organisation's needs and objectives and reviews it as necessary. Plans, resources (either directly or indirectly) and monitors the internal quality audit schedule. Defines and reviews quality and environmental systems. Ensures that adequate technology, procedures and resources are in place to support the quality system."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Quality and conformance",
        "title": "Quality management",
        "description": "The application of techniques for monitoring and improvement of quality to any aspect of a function or process. The achievement of, and maintenance of compliance to, national and international standards, as appropriate, and to internal policies, including those relating to sustainability and security.",
        "code": "QUMG",
        "level": 6,
        "levelDescription": "Prioritises areas for quality and/or environmental improvement in light of the strategy, wider business objectives, results from internal and external audits, and advice from colleagues. Initiates the application of appropriate quality management techniques in these areas. Initiates improvements to processes by changing approaches and working practices, typically using recognised models. Achieves and maintains compliance against national and international standards, as appropriate. Identifies and plans systematic corrective action to reduce errors and improve the quality of the systems and services, by examination of the root causes of problems."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Quality and conformance",
        "title": "Quality management",
        "description": "The application of techniques for monitoring and improvement of quality to any aspect of a function or process. The achievement of, and maintenance of compliance to, national and international standards, as appropriate, and to internal policies, including those relating to sustainability and security.",
        "code": "QUMG",
        "level": 5,
        "levelDescription": "Advises on the application of appropriate quality and/or environmental management techniques. Facilitates improvements to processes by changing approaches and working practices, typically using recognised models."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Quality and conformance",
        "title": "Quality management",
        "description": "The application of techniques for monitoring and improvement of quality to any aspect of a function or process. The achievement of, and maintenance of compliance to, national and international standards, as appropriate, and to internal policies, including those relating to sustainability and security.",
        "code": "QUMG",
        "level": 4,
        "levelDescription": "Uses quality management models and techniques to identify areas for improvement.  Determines corrective action to reduce errors and improve the quality of the system and services."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Quality and conformance",
        "title": "Quality assurance",
        "description": "The process of ensuring that the agreed quality standards within an organisation are adhered to and that best practice is promulgated throughout the organisation.",
        "code": "QUAS",
        "level": 6,
        "levelDescription": "Develops organisational commitment to ongoing quality and environmental improvement by ensuring that the quality assurance process is robust and is based on the best industry practice. Considers implications of emerging technological developments, economic and social trends, etc. Plans and resources periodic quality assurance audits. Conducts and/or manages audits of quality requirements, and analyses audit results, to ensure appropriate quality standards and operational definitions are in place. Prepares and delivers formal audit reports."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Quality and conformance",
        "title": "Quality assurance",
        "description": "The process of ensuring that the agreed quality standards within an organisation are adhered to and that best practice is promulgated throughout the organisation.",
        "code": "QUAS",
        "level": 5,
        "levelDescription": "Uses quality standards to review past performance and plan future activities. Conducts audits of quality requirements and produces audit reports. Monitors and reports on the outputs from the quality assurance and audit processes."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Quality and conformance",
        "title": "Quality assurance",
        "description": "The process of ensuring that the agreed quality standards within an organisation are adhered to and that best practice is promulgated throughout the organisation.",
        "code": "QUAS",
        "level": 4,
        "levelDescription": "Investigates and documents the internal control of specified aspects of automated or partly automated processes, and assesses compliance with the relevant standard."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Quality and conformance",
        "title": "Quality assurance",
        "description": "The process of ensuring that the agreed quality standards within an organisation are adhered to and that best practice is promulgated throughout the organisation.",
        "code": "QUAS",
        "level": 3,
        "levelDescription": "Uses appropriate methods and tools in the development, maintenance, control and distribution of quality and environmental standards. Makes technical changes to quality and environmental standards according to documented procedures. Distributes new and revised standards."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Quality and conformance",
        "title": "Quality standards",
        "description": "The development, maintenance, control and distribution of quality standards.",
        "code": "QUST",
        "level": 5,
        "levelDescription": "Takes responsibility for the control, update and distribution of quality standards, and advice on their use."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Quality and conformance",
        "title": "Quality standards",
        "description": "The development, maintenance, control and distribution of quality standards.",
        "code": "QUST",
        "level": 4,
        "levelDescription": "Controls, updates and distributes new and revised quality standards, including technical changes."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Quality and conformance",
        "title": "Quality standards",
        "description": "The development, maintenance, control and distribution of quality standards.",
        "code": "QUST",
        "level": 2,
        "levelDescription": "Supports new and revised quality standards and maintains department and quality group documentation."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Quality and conformance",
        "title": "Quality standards",
        "description": "The development, maintenance, control and distribution of quality standards.",
        "code": "QUST",
        "level": 3,
        "levelDescription": "Controls, updates and distributes new and revised quality standards."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Quality and conformance",
        "title": "Conformance review",
        "description": "The independent assessment of the conformity of any activity, process, deliverable, product or service to the criteria of specified standards, best practice, or other documented requirements. May relate to, for example, asset management, network security tools, firewalls and internet security, sustainability, real-time systems, application design and specific certifications.",
        "code": "CORE",
        "level": 6,
        "levelDescription": "Specifies organisational procedures for the internal or third-party assessment of an activity, process, product or service, against recognised criteria. Develops plans for review of management systems, including the review of implementation and use of standards and the effectiveness of operational and process controls. May manage the review, conduct the review or manage third party reviewers. Identifies areas of risk and specifies interrogation programs. Recommends improvements in processes and control procedures. Authorises the issue of formal reports to management on the extent of compliance of systems with standards, regulations and/or legislation."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Quality and conformance",
        "title": "Conformance review",
        "description": "The independent assessment of the conformity of any activity, process, deliverable, product or service to the criteria of specified standards, best practice, or other documented requirements. May relate to, for example, asset management, network security tools, firewalls and internet security, sustainability, real-time systems, application design and specific certifications.",
        "code": "CORE",
        "level": 5,
        "levelDescription": "Plans formal reviews of activities, processes, products or services. Evaluates and independently appraises the internal control of automated business processes, based on investigative evidence and assessments undertaken by self or team. Ensures that independent appraisals follow agreed procedure and advises others on the review process. Provides advice to management on ways of improving the effectiveness and efficiency of their control mechanisms. Identifies and evaluates associated risks and how they can be reduced."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Quality and conformance",
        "title": "Conformance review",
        "description": "The independent assessment of the conformity of any activity, process, deliverable, product or service to the criteria of specified standards, best practice, or other documented requirements. May relate to, for example, asset management, network security tools, firewalls and internet security, sustainability, real-time systems, application design and specific certifications.",
        "code": "CORE",
        "level": 4,
        "levelDescription": "Conducts formal reviews of activities, processes, products or services. Collects, collates and examines records as part of specified testing strategies for evidence of compliance with management directives, or the identification of abnormal occurrences. Analyses evidence collated and drafts part or all of formal reports commenting on the conformance found to exist in the reviewed part of an information systems environment."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Quality and conformance",
        "title": "Conformance review",
        "description": "The independent assessment of the conformity of any activity, process, deliverable, product or service to the criteria of specified standards, best practice, or other documented requirements. May relate to, for example, asset management, network security tools, firewalls and internet security, sustainability, real-time systems, application design and specific certifications.",
        "code": "CORE",
        "level": 3,
        "levelDescription": "Collects and collates evidence as part of a formally conducted and planned review of activities, processes, products or services. Examines records as part of specified testing strategies for evidence of compliance with management directives, or the identification of abnormal occurrences."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Quality and conformance",
        "title": "Safety assessment",
        "description": "The assessment of safety-related software systems to determine compliance with standards and required levels of safety integrity. This involves making professional judgements on software engineering approaches, including the suitability of design, testing, and validation and verification methods, as well as the identification and evaluation of risks and the means by which they can be reduced. The establishment, maintenance and management of an assessment framework and practices.",
        "code": "SFAS",
        "level": 6,
        "levelDescription": "Leads assessments up to IEC 61508 Safety Integrity level 4 (or equivalent standard) or participates in any level of assessment. Determines assessment methods, techniques and tools that are to be used as appropriate to the integrity levels of the assessments undertaken."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Quality and conformance",
        "title": "Safety assessment",
        "description": "The assessment of safety-related software systems to determine compliance with standards and required levels of safety integrity. This involves making professional judgements on software engineering approaches, including the suitability of design, testing, and validation and verification methods, as well as the identification and evaluation of risks and the means by which they can be reduced. The establishment, maintenance and management of an assessment framework and practices.",
        "code": "SFAS",
        "level": 5,
        "levelDescription": "Participates in assessments up to IEC 61508 Safety Integrity level 3 (or equivalent standard), and undertakes safety analyses on initial designs using HAZOPS, FMEA or similar methods."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Quality and conformance",
        "title": "Digital forensics",
        "description": "The collection, processing, preserving, analysing, and presenting of computer-related evidence in support of security vulnerability mitigation and/or criminal, fraud, counterintelligence, or law enforcement investigations.",
        "code": "DGFS",
        "level": 4,
        "levelDescription": "Contributes to digital forensic investigations. Processes and analyses computer evidence in line with policy, standards and guideline and supports production of forensics findings and reports."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Quality and conformance",
        "title": "Digital forensics",
        "description": "The collection, processing, preserving, analysing, and presenting of computer-related evidence in support of security vulnerability mitigation and/or criminal, fraud, counterintelligence, or law enforcement investigations.",
        "code": "DGFS",
        "level": 5,
        "levelDescription": "Conducts investigations to correctly gather, analyse and present digital evidence to both business and legal audiences. Collates conclusions and recommendations and presents forensics findings to stakeholders. Contributes to the development of policies, standards and guidelines."
    },
    {
        "category": "Skills and quality",
        "subCategory": "Quality and conformance",
        "title": "Digital forensics",
        "description": "The collection, processing, preserving, analysing, and presenting of computer-related evidence in support of security vulnerability mitigation and/or criminal, fraud, counterintelligence, or law enforcement investigations.",
        "code": "DGFS",
        "level": 6,
        "levelDescription": "Sets policies and standards and guidelines for how the organisation conducts digital forensic investigations. Leads and manages complex investigations managing specialists if required. Authorises the release of formal forensics reports."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Stakeholder management",
        "title": "Sourcing",
        "description": "The provision of policy, internal standards and advice on the procurement or commissioning of externally supplied and internally developed products and services. The provision of commercial governance, conformance to legislation and assurance of information security. The implementation of compliant procurement processes, taking full account of the issues and imperatives of both the commissioning and supplier sides. The identification and management of suppliers to ensure successful delivery of products and services required by the business.",
        "code": "SORC",
        "level": 2,
        "levelDescription": "Assists in preparation of pre-qualification questionnaires and tender invitations in response to business cases. Assembles relevant  information for tenders. Produces detailed evaluation criteria for simple tender criteria. Assists in evaluation of tenders. Assists with routine communication between the organisation and suppliers, the collection of supplier performance data and associated reporting."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Stakeholder management",
        "title": "Sourcing",
        "description": "The provision of policy, internal standards and advice on the procurement or commissioning of externally supplied and internally developed products and services. The provision of commercial governance, conformance to legislation and assurance of information security. The implementation of compliant procurement processes, taking full account of the issues and imperatives of both the commissioning and supplier sides. The identification and management of suppliers to ensure successful delivery of products and services required by the business.",
        "code": "SORC",
        "level": 3,
        "levelDescription": "Prepares pre-qualification questionnaires and tender invitations in response to business cases. Recognises the difference between open source and proprietary systems options. Produces detailed evaluation criteria for more complex tenders and assists in evaluation of tenders. Acts as the routine contact point between organisation and supplier. Collects and reports on supplier performance data."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Stakeholder management",
        "title": "Sourcing",
        "description": "The provision of policy, internal standards and advice on the procurement or commissioning of externally supplied and internally developed products and services. The provision of commercial governance, conformance to legislation and assurance of information security. The implementation of compliant procurement processes, taking full account of the issues and imperatives of both the commissioning and supplier sides. The identification and management of suppliers to ensure successful delivery of products and services required by the business.",
        "code": "SORC",
        "level": 4,
        "levelDescription": "Reviews business cases (requirements, potential benefits and options) and determines appropriate procurement routes. e.g., open market or collaborative framework. Using market knowledge to inform specifications, ensures detailed pre-qualification questionnaires and tender invitations are prepared. Collects and collates data to support collaboration and negotiates terms and conditions to reflect the scale of requirements and encourage good performance. Evaluates tenders based on specification and evaluation criteria, prepares acceptance documentation and advises on contracts and service level agreements. Monitors and reports on supplier performance, information security, customer satisfaction, and market intelligence. Investigates, resolves or escalates problems. Implements supplier service improvement actions and programmes."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Stakeholder management",
        "title": "Sourcing",
        "description": "The provision of policy, internal standards and advice on the procurement or commissioning of externally supplied and internally developed products and services. The provision of commercial governance, conformance to legislation and assurance of information security. The implementation of compliant procurement processes, taking full account of the issues and imperatives of both the commissioning and supplier sides. The identification and management of suppliers to ensure successful delivery of products and services required by the business.",
        "code": "SORC",
        "level": 5,
        "levelDescription": "Researches suppliers and markets, and maintains a broad understanding of the commercial environment, to inform and develop commercial strategies and sourcing plans. Advises on the business case for alternative sourcing models, and on policy and procedures covering the selection of suppliers, tendering, and procurement. Leads procurement teams, managing tender, evaluation and acquisition processes. Negotiates with potential partners and suppliers, developing acceptance criteria and procedures. Drafts and places contracts. Carries out benchmarking and ensures that supplier performance is properly monitored and regularly reviewed. Liaises with designated supplier(s), and manages and implements supplier service improvement actions and programmes."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Stakeholder management",
        "title": "Sourcing",
        "description": "The provision of policy, internal standards and advice on the procurement or commissioning of externally supplied and internally developed products and services. The provision of commercial governance, conformance to legislation and assurance of information security. The implementation of compliant procurement processes, taking full account of the issues and imperatives of both the commissioning and supplier sides. The identification and management of suppliers to ensure successful delivery of products and services required by the business.",
        "code": "SORC",
        "level": 6,
        "levelDescription": "Influences policy and procedures covering the selection of suppliers, tendering, procurement and benchmarking. Establishes procurement strategies, standards, methods, processes and good practices that ensure compliance with legislation, regulation and third party information security. Identifies external partners, engaging with professionals in other related disciplines as appropriate. Ensures that terms and conditions are aligned with current legislation and policy. Leads the procurement process, from clarifying requirements through to placing, monitoring and terminating contracts. Measures the perception about how services are delivered, assessing the performance of the supplier, their experience of own organisation's performance, and effectiveness across the supply chain."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Stakeholder management",
        "title": "Sourcing",
        "description": "The provision of policy, internal standards and advice on the procurement or commissioning of externally supplied and internally developed products and services. The provision of commercial governance, conformance to legislation and assurance of information security. The implementation of compliant procurement processes, taking full account of the issues and imperatives of both the commissioning and supplier sides. The identification and management of suppliers to ensure successful delivery of products and services required by the business.",
        "code": "SORC",
        "level": 7,
        "levelDescription": "Takes overall responsibility for conformance to legislation; supply chain management; commercial governance; policy and procedures for selection of suppliers, tendering and procurement (including \"build or buy\" criteria, and benchmarking performance). Determines overall strategies for managing supplier relationships, embracing effective operational relationships at all levels. Is responsible for deployment and review of acquisition processes and for negotiating major contracts. Establishes frameworks to monitor services provided and ensure value for money over the lifetime of contracts. Represents the company in any serious disputes involving suppliers."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Stakeholder management",
        "title": "Contract management",
        "description": "The overall management and control of the operation of formal contracts for supply of products and services.",
        "code": "ITCM",
        "level": 6,
        "levelDescription": "Negotiates and resolves contractual issues, including failure to meet contractual obligations. Promotes change control processes and leads variation negotiations when necessary. Champions continuous improvement programmes, jointly developing strategies and incentives to enhance performance. Undertakes comprehensive financial evaluations. Ensures non-discriminatory behaviour and legal compliance. Ensures that lessons learned from reviews are documented and promoted with all stakeholders. Develops broad industry/ category credentials as 'best practice' champion."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Stakeholder management",
        "title": "Contract management",
        "description": "The overall management and control of the operation of formal contracts for supply of products and services.",
        "code": "ITCM",
        "level": 5,
        "levelDescription": "Oversees and measures the fulfillment of contractual obligations. Uses key performance indicators (KPIs) to monitor and challenge performance and identify opportunities for continuous improvement. Develops strategies to address under-performance and compliance failures, including application of contract terms. Identifies where changes are required, evaluates the impact, and advises stakeholders about the implications and consequences for the business and/or the procurement element of programmes/projects. Negotiates variations and seeks appropriate authorisation. Actively supports and engages with experts and stakeholders to ensure continuous improvements are identified through review and benchmarking processes.\nDevelops and implements change management protocols."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Stakeholder management",
        "title": "Contract management",
        "description": "The overall management and control of the operation of formal contracts for supply of products and services.",
        "code": "ITCM",
        "level": 4,
        "levelDescription": "Sources and collects contract performance data (such as pricing and supply chain costs), and monitors performance against KPIs.  Identifies and reports under-performance and develops opportunities for improvement. Monitors compliance with Terms and Conditions and take appropriate steps to address non-compliance. Pro-actively manages risk and reward mechanisms in the contract. Monitors progress against business objectives specified in the business case. Identifies where change is required, and plans for variations. In consultation with stakeholders, ensures that change management protocols are implemented."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Stakeholder management",
        "title": "Relationship management",
        "description": "The identification, analysis, management and monitoring of relationships with and between stakeholders. (Stakeholders are individuals, groups, or organisations who may affect, be affected by, or perceive themselves to be affected by decisions, activities and outcomes related to products, services or changes to products and services). The clarification of mutual needs and commitments through consultation and consideration of impacts. For example, the coordination of all promotional activities to one or more clients to achieve satisfaction for the client and an acceptable return for the supplier; assistance to the client to ensure that maximum benefit is gained from products and services supplied.",
        "code": "RLMT",
        "level": 7,
        "levelDescription": "Determines the strategic approach to understanding stakeholder objectives and requirements. Works with all interested parties to establish effective relationships between stakeholders, including responsibility for the relationship between technology functions and end users. Establishes and promotes the overall vision for how stakeholder objectives are met and determines organisational roles and alignment. Actively manages relationships with the most senior stakeholders, and is the ultimate escalation point for issue resolution."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Stakeholder management",
        "title": "Relationship management",
        "description": "The identification, analysis, management and monitoring of relationships with and between stakeholders. (Stakeholders are individuals, groups, or organisations who may affect, be affected by, or perceive themselves to be affected by decisions, activities and outcomes related to products, services or changes to products and services). The clarification of mutual needs and commitments through consultation and consideration of impacts. For example, the coordination of all promotional activities to one or more clients to achieve satisfaction for the client and an acceptable return for the supplier; assistance to the client to ensure that maximum benefit is gained from products and services supplied.",
        "code": "RLMT",
        "level": 6,
        "levelDescription": "Builds long-term, strategic relationships with senior stakeholders in the largest client organisations (internal or external). Acts as a single point of contact and facilitates access to colleagues and subject experts. Maintains a strong understanding of clients' industry and business, assists clients in the formation of IT strategies, and acts to ensure that they are offered products and services aligned to these strategies. Negotiates at senior level on technical and commercial issues. Influences the development and enhancement of services, products and systems, and oversees the management and planning of business opportunities. Oversees monitoring of relationships and acts on relevant feedback."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Stakeholder management",
        "title": "Relationship management",
        "description": "The identification, analysis, management and monitoring of relationships with and between stakeholders. (Stakeholders are individuals, groups, or organisations who may affect, be affected by, or perceive themselves to be affected by decisions, activities and outcomes related to products, services or changes to products and services). The clarification of mutual needs and commitments through consultation and consideration of impacts. For example, the coordination of all promotional activities to one or more clients to achieve satisfaction for the client and an acceptable return for the supplier; assistance to the client to ensure that maximum benefit is gained from products and services supplied.",
        "code": "RLMT",
        "level": 5,
        "levelDescription": "Identifies the communications needs of each stakeholder group in conjunction with business owners and subject matter experts. Translates communications / stakeholder engagement strategies into specific tasks. Facilitates open communication and discussion between stakeholders, acting as a single point of contact by developing, maintaining and working to stakeholder engagement strategies and plans. (For example, may oversee the organisation's promotional/selling activities to one or more clients, to ensure that such activities are aligned with corporate marketing objectives). Negotiates with stakeholders at senior levels, ensuring that organisational policy and strategies are adhered to. Provides informed feedback to assess and promote understanding."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Stakeholder management",
        "title": "Relationship management",
        "description": "The identification, analysis, management and monitoring of relationships with and between stakeholders. (Stakeholders are individuals, groups, or organisations who may affect, be affected by, or perceive themselves to be affected by decisions, activities and outcomes related to products, services or changes to products and services). The clarification of mutual needs and commitments through consultation and consideration of impacts. For example, the coordination of all promotional activities to one or more clients to achieve satisfaction for the client and an acceptable return for the supplier; assistance to the client to ensure that maximum benefit is gained from products and services supplied.",
        "code": "RLMT",
        "level": 4,
        "levelDescription": "Implements stakeholder engagement/ communications plans, including, for example; handling of complaints; problems and issues; managing resolutions; corrective actions and lessons learned; collection and dissemination of relevant information. Uses feedback from customers and stakeholders to help measure effectiveness of stakeholder management. Helps develop and enhance customer and stakeholder relationships."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Stakeholder management",
        "title": "Customer service support",
        "description": "The management and operation of one or more customer service or service desk functions.  Acting as a point of contact to support service users and customers reporting issues, requesting information, access, or other services.",
        "code": "CSMG",
        "level": 6,
        "levelDescription": "Influences the strategic direction and takes responsibility for the full range of customer service functions, including organisational frameworks for complaints, service standards and operational agreements. Defines service levels, standards and the monitoring process for customer service or service desk staff. Gives technical leadership to operational staff, and takes responsibility for business continuity and legal compliance."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Stakeholder management",
        "title": "Customer service support",
        "description": "The management and operation of one or more customer service or service desk functions.  Acting as a point of contact to support service users and customers reporting issues, requesting information, access, or other services.",
        "code": "CSMG",
        "level": 5,
        "levelDescription": "Ensures that the inventory of components to be supported is complete and current. Drafts and maintains policy, standards and procedures for the customer service or service desk functions. Responsible for day-to-day management and work allocation to meet agreed service levels. Specifies, agrees and applies standards. Ensures that tracking and monitoring of performance is carried out, metrics and reports are analysed, and issues are resolved."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Stakeholder management",
        "title": "Customer service support",
        "description": "The management and operation of one or more customer service or service desk functions.  Acting as a point of contact to support service users and customers reporting issues, requesting information, access, or other services.",
        "code": "CSMG",
        "level": 4,
        "levelDescription": "Monitors customer service or service desk functions, and collects performance data. Assists with the specification, development, research and evaluation of services standards. Applies these standards to resolve or escalate issues and gives technical briefings to staff members."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Stakeholder management",
        "title": "Customer service support",
        "description": "The management and operation of one or more customer service or service desk functions.  Acting as a point of contact to support service users and customers reporting issues, requesting information, access, or other services.",
        "code": "CSMG",
        "level": 3,
        "levelDescription": "Acts as the routine contact point, receiving and handling requests for support. Responds to a broad range of service requests for support by providing information to fulfill requests or enable resolution. Provides first line investigation and diagnosis and promptly allocates unresolved issues as appropriate. Assists with the development standards, and applies these to track, monitor, report, resolve or escalate issues. Contributes to creation of support documentation."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Stakeholder management",
        "title": "Customer service support",
        "description": "The management and operation of one or more customer service or service desk functions.  Acting as a point of contact to support service users and customers reporting issues, requesting information, access, or other services.",
        "code": "CSMG",
        "level": 1,
        "levelDescription": "Receives and handles requests for service, following agreed procedures. Promptly allocates calls as appropriate. Logs incidents and service requests and maintains relevant records."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Stakeholder management",
        "title": "Customer service support",
        "description": "The management and operation of one or more customer service or service desk functions.  Acting as a point of contact to support service users and customers reporting issues, requesting information, access, or other services.",
        "code": "CSMG",
        "level": 2,
        "levelDescription": "Responds to common requests for service by providing information to enable fulfilment. Promptly allocates unresolved calls as appropriate. Maintains records, informs users about the process and advises relevant persons of actions taken."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Sales and marketing",
        "title": "Digital marketing",
        "description": "Integration of digital marketing with traditional print/broadcast methods, to support the research, analysis and stimulation of potential or existing markets for products and services, both to provide a sound basis for business development and to generate a satisfactory flow of sales enquiries. The management and development of strategies, campaigns and day-to-day marketing activity delivered through web and other appropriate digital channels and technologies.",
        "code": "MKTG",
        "level": 6,
        "levelDescription": "Determines and oversees the marketing and marketing planning strategy for the organisation. Makes strategic decisions regarding marketing plans and the planning process, placing online, web and digital marketing and communications at the hub of customer-centric communications in an increasingly multi-channel environment. Evaluates and responds to key factors relating to the implementation, measurement and review of successful campaigns. Makes a significant contribution to the development and communication of the organisation's strategy for the use of web, digital and social media to engage and involve stakeholders. Uses digital channels for getting the organisation's messages across and delivered to the highest professional standard."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Sales and marketing",
        "title": "Digital marketing",
        "description": "Integration of digital marketing with traditional print/broadcast methods, to support the research, analysis and stimulation of potential or existing markets for products and services, both to provide a sound basis for business development and to generate a satisfactory flow of sales enquiries. The management and development of strategies, campaigns and day-to-day marketing activity delivered through web and other appropriate digital channels and technologies.",
        "code": "MKTG",
        "level": 5,
        "levelDescription": "Devises and manages market research, marketing planning and campaigns within specified budgets to meet agreed objectives. Advises on brand management and promotion of corporate reputation through digital channels. Engages strategic managers in approval of large-scale web and digital marketing and communications strategies, promoting innovative solutions to marketing challenges. Takes overall responsibility for the production of marketing materials and staging of events. Plays an active role in promoting employee engagement through intranet and social media tools. Reviews the effectiveness of digital marketing and communication strategies and services and their impact on business outcomes."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Sales and marketing",
        "title": "Digital marketing",
        "description": "Integration of digital marketing with traditional print/broadcast methods, to support the research, analysis and stimulation of potential or existing markets for products and services, both to provide a sound basis for business development and to generate a satisfactory flow of sales enquiries. The management and development of strategies, campaigns and day-to-day marketing activity delivered through web and other appropriate digital channels and technologies.",
        "code": "MKTG",
        "level": 4,
        "levelDescription": "Appraises factors that influence online marketing activity, carries out market research, and identifies unique selling points and key messages. Investigates and analyses customer and competitor dynamics and uses appropriate channels and technologies for target marketing and engagement. Recognises and uses the similarities and differences between online and traditional marketing concepts and applications, providing advice on channel methodology, effectiveness and implementation. Makes creative use of elements relevant to both digital and traditional environments, and drafts appropriate support materials. Analyses the effectiveness of campaigns and services and their impact on audience behaviour and business outcomes. Organises and participates actively in marketing events."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Sales and marketing",
        "title": "Digital marketing",
        "description": "Integration of digital marketing with traditional print/broadcast methods, to support the research, analysis and stimulation of potential or existing markets for products and services, both to provide a sound basis for business development and to generate a satisfactory flow of sales enquiries. The management and development of strategies, campaigns and day-to-day marketing activity delivered through web and other appropriate digital channels and technologies.",
        "code": "MKTG",
        "level": 3,
        "levelDescription": "Uses customer and employee insight to identify industry trends, needs and sales opportunities. Conducts market research, and maintains relevant information, including lessons learned from previous projects. Develops creative and innovative ideas for campaigns. Applies appropriate strategies and tools, including web and digital, to inform and produce marketing plans. Develops and delivers targeted digital and multi-channel communication campaigns to get key messages across and reinforce the organisation's unique selling points key messages and brand. Applies tools to measure the effectiveness of internal and external web and digital campaigns and recommends appropriate methods to a given situation. Presents and communicates at marketing events."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Sales and marketing",
        "title": "Digital marketing",
        "description": "Integration of digital marketing with traditional print/broadcast methods, to support the research, analysis and stimulation of potential or existing markets for products and services, both to provide a sound basis for business development and to generate a satisfactory flow of sales enquiries. The management and development of strategies, campaigns and day-to-day marketing activity delivered through web and other appropriate digital channels and technologies.",
        "code": "MKTG",
        "level": 2,
        "levelDescription": "Understands the basic principles of digital marketing, and the range of tools for planning, implementing and monitoring their application on behalf of the organisation. Contributes to web and digital marketing and communication planning and implementation activity and suggests creative and innovative ideas for campaigns. Monitors results of web marketing and digital communications. Understands the key messages for both internal and external audiences."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Sales and marketing",
        "title": "Selling",
        "description": "The identification of sales prospects and their qualification, the development of customer interest and the preparation (including managing the bid process), execution and monitoring of the sale of any product or service into an external or internal market.",
        "code": "SALE",
        "level": 6,
        "levelDescription": "Oversees the organisation's sales activities to ensure they are aligned with corporate business objectives (organisation may be a division of a larger enterprise). Approves sales proposals and targets. Negotiates with customer representatives at the most senior level on both technical and contractual issues. Agrees and signs contracts. Develops and implements organisational sales policy and strategy, and contributes significantly to the development of marketing strategy. Initiates, with Marketing, evolution of services, products systems, and standard contracts to support alignment with future customer needs."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Sales and marketing",
        "title": "Selling",
        "description": "The identification of sales prospects and their qualification, the development of customer interest and the preparation (including managing the bid process), execution and monitoring of the sale of any product or service into an external or internal market.",
        "code": "SALE",
        "level": 5,
        "levelDescription": "Designs and implements sales strategies and works with senior management to implement sales plans. Plans, monitors and controls the work of sales teams. Develops and maintains effective customer relationships at executive levels and qualifies new sales leads. Leads the bid process within the organisation. Agrees and signs contracts. Maintains customer contact during and after the selling process to pre-empt any issues and identify further opportunities. Contributes to the development and training of sales teams and product/service development."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Sales and marketing",
        "title": "Selling",
        "description": "The identification of sales prospects and their qualification, the development of customer interest and the preparation (including managing the bid process), execution and monitoring of the sale of any product or service into an external or internal market.",
        "code": "SALE",
        "level": 4,
        "levelDescription": "Collects and uses information in order to achieve sales objectives. Responds to existing sales leads and identifies and qualifies new leads and prospects with a view to developing a pipeline of potential opportunities. Understands customer and needs, and develops and enhances customer relationships, before, during and after the conclusion of agreements/contracts. Key tasks may also include bid management, value analysis, negotiation, presentation and preparation of contracts. Monitors and reports on quota, performance, customer satisfaction, market intelligence and competitors."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Sales and marketing",
        "title": "Sales support",
        "description": "The provision of technical advice and assistance to the sales force, sales agents, reseller/distributor staff and existing or prospective customers, either in support of customer development or sales activity or in fulfilment of sales obligations.",
        "code": "SSUP",
        "level": 6,
        "levelDescription": "Leads the organisation's customer service activities to ensure that they are aligned with corporate objectives and policy. Approves proposals and initiates the implementation of development activity in customer services and systems."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Sales and marketing",
        "title": "Sales support",
        "description": "The provision of technical advice and assistance to the sales force, sales agents, reseller/distributor staff and existing or prospective customers, either in support of customer development or sales activity or in fulfilment of sales obligations.",
        "code": "SSUP",
        "level": 5,
        "levelDescription": "Works closely with the sales team to ensure that customers are assisted and advised properly. Ensures that reliable cost, effort and risk estimates and project plans are produced. Manages all sales support activities, taking full responsibility for the technical content of bids and sales proposals. Establishes metrics to provide data on performance and help with the continuous improvement of sales support activities."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Sales and marketing",
        "title": "Sales support",
        "description": "The provision of technical advice and assistance to the sales force, sales agents, reseller/distributor staff and existing or prospective customers, either in support of customer development or sales activity or in fulfilment of sales obligations.",
        "code": "SSUP",
        "level": 4,
        "levelDescription": "Works closely with the sales team to help prospects to clarify their needs and requirements; devises solutions and assesses their feasibility and practicality. Demonstrates technical feasibility using physical or simulation models. Produces estimates of cost and risk and initial project plans to inform sales proposals. Resolves technical problems."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Sales and marketing",
        "title": "Sales support",
        "description": "The provision of technical advice and assistance to the sales force, sales agents, reseller/distributor staff and existing or prospective customers, either in support of customer development or sales activity or in fulfilment of sales obligations.",
        "code": "SSUP",
        "level": 3,
        "levelDescription": "Provides customer service, including technical advice and guidance on all matters bearing on the successful use of complex products and services. Helps customers to clarify their requirements; documents the conclusions reached, and contributes to preparing and supporting bids and sales proposals."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Sales and marketing",
        "title": "Sales support",
        "description": "The provision of technical advice and assistance to the sales force, sales agents, reseller/distributor staff and existing or prospective customers, either in support of customer development or sales activity or in fulfilment of sales obligations.",
        "code": "SSUP",
        "level": 2,
        "levelDescription": "Communicates effectively with customers by telephone and in person. Assists in the provision of customer service, including technical advice and guidance on matters bearing on the successful use of products and services. Assists in devising solutions to customer requirements and solves straightforward problems."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Sales and marketing",
        "title": "Sales support",
        "description": "The provision of technical advice and assistance to the sales force, sales agents, reseller/distributor staff and existing or prospective customers, either in support of customer development or sales activity or in fulfilment of sales obligations.",
        "code": "SSUP",
        "level": 1,
        "levelDescription": "Able to communicate effectively with customers by telephone and provide information about products and services. Seeks assistance from colleagues for the resolution of more complex customer service queries and complaints. Can use databases to retrieve and enter data."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Sales and marketing",
        "title": "Product management",
        "description": "The active management of a product or service throughout its lifecycle (inception through to retirement) in order to address a market opportunity /customer need and generate the greatest possible value for the business.",
        "code": "PROD",
        "level": 3,
        "levelDescription": "Carries out research and performance monitoring activities for specified products. Develops marketing collateral content and evaluates results and feedback from marketing campaigns."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Sales and marketing",
        "title": "Product management",
        "description": "The active management of a product or service throughout its lifecycle (inception through to retirement) in order to address a market opportunity /customer need and generate the greatest possible value for the business.",
        "code": "PROD",
        "level": 4,
        "levelDescription": "Manages aspects of the product lifecycle, working with colleagues in other disciplines to enable effective marketing and customer support. May act as product owner for one or more lower value products or services. Facilitates product sales by planning development of marketing collateral content, supporting and evaluating campaigns, and monitoring product performance."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Sales and marketing",
        "title": "Product management",
        "description": "The active management of a product or service throughout its lifecycle (inception through to retirement) in order to address a market opportunity /customer need and generate the greatest possible value for the business.",
        "code": "PROD",
        "level": 5,
        "levelDescription": "Acts as owner/advocate for one or more products or services, advising on standards, methods, tools, etc. Manages their lifecycles to ensure that, over time, the needs of customers are profitably met. Liaises with customers and colleagues in other disciplines in determination of product positioning, coordination of product launch, marketing campaigns, and monitoring of product/service performance. Anticipates changes in market dynamics /models, adapts products, and creates product retirement and transitioning strategies."
    },
    {
        "category": "Relationships and engagement",
        "subCategory": "Sales and marketing",
        "title": "Product management",
        "description": "The active management of a product or service throughout its lifecycle (inception through to retirement) in order to address a market opportunity /customer need and generate the greatest possible value for the business.",
        "code": "PROD",
        "level": 6,
        "levelDescription": "Initiates creation of new products. Oversees one or more products or services, monitoring and modifying elements of the marketing mix (the product and its features, the communications strategy, distribution channels and prices). Accountable for product profitability and customer satisfaction over time. Identifies how new products may create new markets. Identifies how to adapt existing products to new markets."
    } 
];

module.exports = {
    'categories' : categories,
    'subCategories': subCategories,
    'skills': skills 
};
