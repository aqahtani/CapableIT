/**
 * This script automatically creates ...
 */

exports.create = {
    
    Organization: [
        {
            "title" : "SASO IT",
            "name" : "SASO",
            "images" : [],
            "createdAt" : "2014-11-15T10:03:28.000Z",
            "location" : {
                "country" : null,
                "name" : null,
                "number" : null,
                "postcode" : null,
                "state" : null,
                "street1" : null,
                "street2" : null,
                "suburb" : null
            },
            "url" : "www.saso.gov.sa",
            __ref: "saso"
        }
    ],
    
    OrgDepartment: [
        {
            "color" : "#e68b00",
            "code" : "ESA",
            "name" : " E-Services & Applications",
            "description" : "",
            "organization" : "saso",
            __ref: "esa"
        },

        {
            "color" : "#b37700",
            "code" : "PMO",
            "name" : "Project Management Office",
            "description" : "",
            "organization" : "saso",
            __ref: "pmo"
        },
        {
            "color" : "#0078d1",
            "code" : "INO",
            "name" : "Infrastructure & Operations",
            "description" : "",
            "organization" : "saso",
            __ref: "ino"
        },
        {
            "color" : "#00c014",
            "code" : "ISC",
            "name" : "Information Security & Communications",
            "description" : "",
            "organization" : "saso",
            __ref: "isc"
        },
        {
            "color" : "#d9004d",
            "code" : "BPM",
            "name" : "Business Process Management",
            "description" : "",
            "organization" : "saso",
            __ref: "bpm"
        }
    ],
    
    OrgFunction: [
        //ESA functions
        {
            "department" : "esa",
            "code" : "SA",
            "name" : "Systems Analysis",
            "description" : "",
            "organization" : "saso"
        },
        {
            "department" : "esa",
            "code" : "AS",
            "name" : "Application Solutions",
            "description" : "",
            "organization" : "saso"
        },
        {
            "department" : "esa",
            "code" : "AT",
            "name" : "Application Testing",
            "description" : "",
            "organization" : "saso"
        },
        {
            "department" : "esa",
            "code" : "A&DS",
            "name" : "Application & Data Support",
            "description" : "",
            "organization" : "saso"
        },
        
        //INO functions
        {
            "department" : "ino",
            "code" : "DC",
            "name" : "Datacenter",
            "description" : "",
            "organization" : "saso"
        },
        {
            "department" : "ino",
            "code" : "TS",
            "name" : "Technical Support",
            "description" : "",
            "organization" : "saso"
        },

        // ISC functions
        {
            "department" : "isc",
            "code" : "NS",
            "name" : "Network Solutions",
            "description" : "",
            "organization" : "saso"
        },

        {
            "department" : "isc",
            "code" : "SG",
            "name" : "Security Governance",
            "description" : "",
            "organization" : "saso"
        },

        {
            "department" : "isc",
            "code" : "SS",
            "name" : "Security Solutions",
            "description" : "",
            "organization" : "saso"
        },

        {
            "department" : "isc",
            "code" : "MS",
            "name" : "Multimedia Solutions",
            "description" : "",
            "organization" : "saso"
        },

        // PMO
        {
            "department" : "pmo",
            "code" : "PG",
            "name" : "Project Governance",
            "description" : "",
            "organization" : "saso"
        },

        {
            "department" : "pmo",
            "code" : "MR",
            "name" : "Monitoring & Reporting",
            "description" : "",
            "organization" : "saso"
        }
    ],
    
    JobTask: [
        {
            "organization": "saso",
            "title": "Acquires business knowledge and have one or more areas of concentrate technical expertise"
        },
        {
            "organization": "saso",
            "title": "Act as 2nd level support for incidents related to applications and work with vendors for Tier 3 issues"
        },
        {
            "organization": "saso",
            "title": "Act as 2nd level support for incidents related to databases and work with vendors for Tier 3 issues"
        },
        {
            "organization": "saso",
            "title": "Act as a change agent to implement and manage best practices across the IT organization"
        },
        {
            "organization": "saso",
            "title": "Act as the interface to end-user in branches on behalf of the service desk (technical support)"
        },
        {
            "organization": "saso",
            "title": "Analyze data/information requirements and design and build databases accordingly"
        },
        {
            "organization": "saso",
            "title": "Analyze, design, propose, and deliver solution architectures appropriate for the business"
        },
        {
            "organization": "saso",
            "title": "Assist in post implementation support and system enhancements"
        },
        {
            "organization": "saso",
            "title": "Assist in the development, implementation, and enforcement of policies and procedures"
        },
        {
            "organization": "saso",
            "title": "Author and communicate user manuals for applications solutions"
        },
        {
            "organization": "saso",
            "title": "Build and maintain project management templates"
        },
        {
            "organization": "saso",
            "title": "Build consistent communication and awareness channels with all end-users in the organization"
        },
        {
            "organization": "saso",
            "title": "Build information security awareness programs for end-users"
        },
        {
            "organization": "saso",
            "title": "Build project management best practices, standards, and processes"
        },
        {
            "organization": "saso",
            "title": "Channel users to service desk for incidents resolution and request fulfillment"
        },
        {
            "organization": "saso",
            "title": "Coach and mentor project managers throughout the IT organization"
        },
        {
            "organization": "saso",
            "title": "Coach and mentor project managers throughout the IT organization on EPM"
        },
        {
            "organization": "saso",
            "title": "Communicate and keep end-users informed of progress "
        },
        {
            "organization": "saso",
            "title": "Communicate decisions and priorities to appropriate levels of management and staff"
        },
        {
            "organization": "saso",
            "title": "Communicate information security programs and policies with end-users"
        },
        {
            "organization": "saso",
            "title": "Conduct business process analysis, design and simulation"
        },
        {
            "organization": "saso",
            "title": "Conduct IT penetration testing and develop/recommend corrective action plans"
        },
        {
            "organization": "saso",
            "title": "Conduct IT security audits and develop/recommend corrective action plans"
        },
        {
            "organization": "saso",
            "title": "Conduct ongoing database administration (performance and fine tuning)"
        },
        {
            "organization": "saso",
            "title": "Conduct ongoing portals and applications administration"
        },
        {
            "organization": "saso",
            "title": "Coordinate activities of A&D support through direct and indirect staff (contractors/consultants)"
        },
        {
            "organization": "saso",
            "title": "Coordinate activities of application testing through direct and indirect staff (contractors/consultants)"
        },
        {
            "organization": "saso",
            "title": "Coordinate activities of datacenter projects through direct/indirect staff (contractors/consultants)"
        },
        {
            "organization": "saso",
            "title": "Coordinate activities of multimedia solutions through direct/indirect staff (contractors/consultants)"
        },
        {
            "organization": "saso",
            "title": "Coordinate activities of network solutions through direct/indirect staff (contractors/consultants)"
        },
        {
            "organization": "saso",
            "title": "Coordinate activities of project governance through direct/indirect staff (contractors/consultants)"
        },
        {
            "organization": "saso",
            "title": "Coordinate activities of project managers through direct/indirect staff (contractors/consultants)"
        },
        {
            "organization": "saso",
            "title": "Coordinate activities of security governance through direct/indirect staff (contractors/consultants)"
        },
        {
            "organization": "saso",
            "title": "Coordinate activities of security solutions through direct/indirect staff (contractors/consultants)"
        },
        {
            "organization": "saso",
            "title": "Coordinate activities of service desk projects through direct/indirect staff (contractors/consultants)"
        },
        {
            "organization": "saso",
            "title": "Coordinate activities of solutions development through direct/indirect staff (contractors/consultants)"
        },
        {
            "organization": "saso",
            "title": "Coordinate activities of systems analysis through direct and indirect staff (contractors/consultants)"
        },
        {
            "organization": "saso",
            "title": "Counsel and lead future use of technology and business process improvement"
        },
        {
            "organization": "saso",
            "title": "Design and build performance dashboards for the IT projects portfolio"
        },
        {
            "organization": "saso",
            "title": "Design and build project performance dashboards"
        },
        {
            "organization": "saso",
            "title": "Design and execute formal test plans to ensure the delivery of quality application solutions"
        },
        {
            "organization": "saso",
            "title": "Design and implement tasks and activities associated with multimedia solutions"
        },
        {
            "organization": "saso",
            "title": "Design and implement tasks and activities associated with network solutions"
        },
        {
            "organization": "saso",
            "title": "Design new processes, develop process performance measures, and plan the transitions"
        },
        {
            "organization": "saso",
            "title": "Design, engineer, and implement tasks and activities associated with business applications"
        },
        {
            "organization": "saso",
            "title": "Design, engineer, and implement tasks and activities associated with data center solutions"
        },
        {
            "organization": "saso",
            "title": "Design, engineer, and implement tasks and activities associated with information security solutions"
        },
        {
            "organization": "saso",
            "title": "Design, engineer, and implement tasks and activities associated with multimedia solutions"
        },
        {
            "organization": "saso",
            "title": "Design, engineer, and implement tasks and activities associated with network solutions"
        },
        {
            "organization": "saso",
            "title": "Develop and communicate organization-wide information security and risk management strategies "
        },
        {
            "organization": "saso",
            "title": "Develop and document workarounds for problems not resolved "
        },
        {
            "organization": "saso",
            "title": "Develop and ensure compliance to project management practice, standards, processes, and templates"
        },
        {
            "organization": "saso",
            "title": "Develop and maintain documentation of databases used"
        },
        {
            "organization": "saso",
            "title": "Develop business cases and request for information/proposals (RFIs/RFPs) for A&D support"
        },
        {
            "organization": "saso",
            "title": "Develop business cases and request for information/proposals (RFIs/RFPs) for application solutions"
        },
        {
            "organization": "saso",
            "title": "Develop business cases and request for information/proposals (RFIs/RFPs) for application testing"
        },
        {
            "organization": "saso",
            "title": "Develop business cases and request for information/proposals (RFIs/RFPs) for datacenter solutions"
        },
        {
            "organization": "saso",
            "title": "Develop business cases and request for information/proposals (RFIs/RFPs) for information security"
        },
        {
            "organization": "saso",
            "title": "Develop business cases and request for information/proposals (RFIs/RFPs) for multimedia solutions"
        },
        {
            "organization": "saso",
            "title": "Develop business cases and request for information/proposals (RFIs/RFPs) for network solutions"
        },
        {
            "organization": "saso",
            "title": "Develop business cases and request for information/proposals (RFIs/RFPs) for project management"
        },
        {
            "organization": "saso",
            "title": "Develop business cases and request for information/proposals (RFIs/RFPs) for security solutions"
        },
        {
            "organization": "saso",
            "title": "Develop business cases and request for information/proposals (RFIs/RFPs) for systems analysis"
        },
        {
            "organization": "saso",
            "title": "Develop enterprise level solutions including major features, enhancements, and interfaces"
        },
        {
            "organization": "saso",
            "title": "Develop information organization-wide security and risk management strategies "
        },
        {
            "organization": "saso",
            "title": "Develop request for information/proposals (RFIs/RFPs) for service desk solutions"
        },
        {
            "organization": "saso",
            "title": "Develop specifications, and produce deliverables related to the projects assigned"
        },
        {
            "organization": "saso",
            "title": "Develop standards and processes in application solutions and architecture"
        },
        {
            "organization": "saso",
            "title": "Develop, implement, and enforce information security policies, standards and processes "
        },
        {
            "organization": "saso",
            "title": "Develop, implement, and enforce IT policies and procedures"
        },
        {
            "organization": "saso",
            "title": "Develop, implement, and enforce other IT policies and procedures"
        },
        {
            "organization": "saso",
            "title": "Direct department decisions, management, performance, and results"
        },
        {
            "organization": "saso",
            "title": "Direct teams in planning, scheduling, policy and standards in information security"
        },
        {
            "organization": "saso",
            "title": "Direct teams in planning, scheduling, policy and standards in project management"
        },
        {
            "organization": "saso",
            "title": "Direct teams in planning, scheduling, policy and standards in project monitoring and reporting"
        },
        {
            "organization": "saso",
            "title": "Direct teams in planning, scheduling, technical direction and standards in A&D support"
        },
        {
            "organization": "saso",
            "title": "Direct teams in planning, scheduling, technical direction and standards in application solutions"
        },
        {
            "organization": "saso",
            "title": "Direct teams in planning, scheduling, technical direction and standards in application testing"
        },
        {
            "organization": "saso",
            "title": "Direct teams in planning, scheduling, technical direction and standards in relation to systems analysis"
        },
        {
            "organization": "saso",
            "title": "Direct teams in planning, scheduling, technical direction and standards in technical support"
        },
        {
            "organization": "saso",
            "title": "Direct teams in planning, scheduling, technical operations and standards in datacenter solutions"
        },
        {
            "organization": "saso",
            "title": "Direct teams in planning, scheduling, technical operations and standards in multimedia solutions"
        },
        {
            "organization": "saso",
            "title": "Direct teams in planning, scheduling, technical operations and standards in network solutions"
        },
        {
            "organization": "saso",
            "title": "Direct teams in planning, scheduling, technical operations and standards in security solutions"
        },
        {
            "organization": "saso",
            "title": "Direct the implementation of project management tools"
        },
        {
            "organization": "saso",
            "title": "Document and communicate business needs and requirements"
        },
        {
            "organization": "saso",
            "title": "Document and maintain application testing scenarios and results"
        },
        {
            "organization": "saso",
            "title": "Document existing processes and identify processes for improvement"
        },
        {
            "organization": "saso",
            "title": "Educate senior business leaders on IT strategy, and educate senior IT leadership on the direction of the business"
        },
        {
            "organization": "saso",
            "title": "Ensure a suitable technical learning environment exists in the organization for all IT and organization members"
        },
        {
            "organization": "saso",
            "title": "Ensure appropriate strategies and controls are in place for information security and risk management"
        },
        {
            "organization": "saso",
            "title": "Ensure compliance to project management practices"
        },
        {
            "organization": "saso",
            "title": "Ensure continuous operations and support of the IT services"
        },
        {
            "organization": "saso",
            "title": "Ensure continuous operations and support of the security, network, and multimedia solutions"
        },
        {
            "organization": "saso",
            "title": "Ensure delivering IT services that achieve business satisfaction"
        },
        {
            "organization": "saso",
            "title": "Ensure handover from implementation and testing phases of application solutions"
        },
        {
            "organization": "saso",
            "title": "Ensure handover from implementation and testing phases of application solutions and databases"
        },
        {
            "organization": "saso",
            "title": "Ensure handover from implementation and testing phases of databases"
        },
        {
            "organization": "saso",
            "title": "Ensure quality assurance and testing of desktops/ peripherals/servers/storage systems "
        },
        {
            "organization": "saso",
            "title": "Ensure quality assurance and testing of information security systems and components"
        },
        {
            "organization": "saso",
            "title": "Ensure quality assurance and testing of multimedia systems and components"
        },
        {
            "organization": "saso",
            "title": "Ensure quality assurance and testing of network links, systems and components"
        },
        {
            "organization": "saso",
            "title": "Ensure release and deployment of application solutions"
        },
        {
            "organization": "saso",
            "title": "Ensure resolution of incidents and fulfillment of requests for all supported IT services"
        },
        {
            "organization": "saso",
            "title": "Ensure strategic plan is cascaded to the IT departments with clear performance metrics and accountabilities"
        },
        {
            "organization": "saso",
            "title": "Ensure that processes meet changing business unit conditions"
        },
        {
            "organization": "saso",
            "title": "Ensure the compliance with all financial legislations as well as organization finance policies and procedures"
        },
        {
            "organization": "saso",
            "title": "Ensures quality assurance and testing of units of application solutions delivered"
        },
        {
            "organization": "saso",
            "title": "Evaluate and develop business process management practice for the overall organization"
        },
        {
            "organization": "saso",
            "title": "Evaluate and develop quality management systems for the overall organization"
        },
        {
            "organization": "saso",
            "title": "Evaluate new application solutions and implement prototypes"
        },
        {
            "organization": "saso",
            "title": "Evaluate new products and services across IT functions"
        },
        {
            "organization": "saso",
            "title": "Foster and maintain a performance management practice in the IT organization"
        },
        {
            "organization": "saso",
            "title": "Foster and maintain a project management practice in the IT organization"
        },
        {
            "organization": "saso",
            "title": "Foster and maintain business process quality, interactions, and improvement"
        },
        {
            "organization": "saso",
            "title": "Foster and maintain business relationships with other business unit leads and influencers"
        },
        {
            "organization": "saso",
            "title": "Fulfill requests from technical support for the application solutions"
        },
        {
            "organization": "saso",
            "title": "Gather and normalize security data/information for assessment and analysis"
        },
        {
            "organization": "saso",
            "title": "Gather, analyze, and normalize information from business processes, functions, and operations"
        },
        {
            "organization": "saso",
            "title": "Handle end-user service requests for fulfilment"
        },
        {
            "organization": "saso",
            "title": "Handle HR activities of the A&D support function such as performance appraisals"
        },
        {
            "organization": "saso",
            "title": "Handle HR activities of the application solutions function such as performance appraisals"
        },
        {
            "organization": "saso",
            "title": "Handle HR activities of the application testing function such as performance appraisals"
        },
        {
            "organization": "saso",
            "title": "Handle HR activities of the datacenter function such as performance appraisals"
        },
        {
            "organization": "saso",
            "title": "Handle HR activities of the multimedia solutions function such as performance appraisals"
        },
        {
            "organization": "saso",
            "title": "Handle HR activities of the network solutions function such as performance appraisals"
        },
        {
            "organization": "saso",
            "title": "Handle HR activities of the project governance function such as performance appraisals"
        },
        {
            "organization": "saso",
            "title": "Handle HR activities of the project monitoring and reporting function such as performance appraisals"
        },
        {
            "organization": "saso",
            "title": "Handle HR activities of the security governance function such as performance appraisals"
        },
        {
            "organization": "saso",
            "title": "Handle HR activities of the security solutions function such as performance appraisals"
        },
        {
            "organization": "saso",
            "title": "Handle HR activities of the systems analysis function such as performance appraisals"
        },
        {
            "organization": "saso",
            "title": "Handle HR activities of the technical support function such as performance appraisals"
        },
        {
            "organization": "saso",
            "title": "Handle software/hardware incidents for resolution as the 1st level of support"
        },
        {
            "organization": "saso",
            "title": "Identify and analyze gaps between current processes and the desired state"
        },
        {
            "organization": "saso",
            "title": "Identify opportunities to employ technology solutions, proactively"
        },
        {
            "organization": "saso",
            "title": "Implement and facilitate quality management initiatives throughout the organization"
        },
        {
            "organization": "saso",
            "title": "Install and maintain desktops and peripherals at user sites"
        },
        {
            "organization": "saso",
            "title": "Maintain a knowledge database of tests and bugs to enhance quality of problem resolutions"
        },
        {
            "organization": "saso",
            "title": "Maintain and disseminate knowledge to management and other IT team members"
        },
        {
            "organization": "saso",
            "title": "Maintain knowledge database and enhances quality of problem resolutions"
        },
        {
            "organization": "saso",
            "title": "Maintain testing, development, and production database platforms"
        },
        {
            "organization": "saso",
            "title": "Make �build vs. buy� decisions and select appropriate technologies and platforms"
        },
        {
            "organization": "saso",
            "title": "Make decisions for technology and platform selection in the data center"
        },
        {
            "organization": "saso",
            "title": "Make recommendations for �build vs. buy� decisions and technology/platform selection"
        },
        {
            "organization": "saso",
            "title": "Make recommendations for �buy versus build� decisions and technology/platform selection"
        },
        {
            "organization": "saso",
            "title": "Make recommendations on selection of application testing solutions, methods, and tools"
        },
        {
            "organization": "saso",
            "title": "Manage and provide coaching and mentoring for his team"
        },
        {
            "organization": "saso",
            "title": "Manage and provide coaching and mentoring for his team of application and database administrators"
        },
        {
            "organization": "saso",
            "title": "Manage and provide coaching and mentoring for his team of application testers/QA"
        },
        {
            "organization": "saso",
            "title": "Manage and provide coaching and mentoring for his team of multimedia specialist(s)"
        },
        {
            "organization": "saso",
            "title": "Manage and provide coaching and mentoring for his team of network engineers"
        },
        {
            "organization": "saso",
            "title": "Manage and provide coaching and mentoring for his team of security analyst(s)"
        },
        {
            "organization": "saso",
            "title": "Manage and provide coaching and mentoring for his team of security engineers"
        },
        {
            "organization": "saso",
            "title": "Manage and provide coaching and mentoring for his team of solution engineers"
        },
        {
            "organization": "saso",
            "title": "Manage and provide coaching and mentoring for his team of support specialists"
        },
        {
            "organization": "saso",
            "title": "Manage and provide coaching and mentoring for his team of systems engineers"
        },
        {
            "organization": "saso",
            "title": "Manage and provide coaching and mentoring for his team, and lead cross-functional teams"
        },
        {
            "organization": "saso",
            "title": "Manage IT procurement including negotiation of bids, and preparation/processing of purchase orders and invoices"
        },
        {
            "organization": "saso",
            "title": "Manage multimedia solutions implementation projects"
        },
        {
            "organization": "saso",
            "title": "Manage stakeholders, understand and communicate their needs, and identify solution opportunities"
        },
        {
            "organization": "saso",
            "title": "Manage supplier relationships and service level administration for vendors"
        },
        {
            "organization": "saso",
            "title": "Manage the project completion process through customer acceptance (UAT)"
        },
        {
            "organization": "saso",
            "title": "Manage the selection, acquisition and monitoring of contract agreements for hardware, software and IT services"
        },
        {
            "organization": "saso",
            "title": "May assist in post implementation support and system enhancements"
        },
        {
            "organization": "saso",
            "title": "Meet scheduled milestones to ensure application A&D support objectives are met in a timely manner"
        },
        {
            "organization": "saso",
            "title": "Meet scheduled milestones to ensure application solutions project objectives are met"
        },
        {
            "organization": "saso",
            "title": "Meet scheduled milestones to ensure application testing project objectives are met in a timely manner"
        },
        {
            "organization": "saso",
            "title": "Meet scheduled milestones to ensure datacenter projects objectives are met"
        },
        {
            "organization": "saso",
            "title": "Meet scheduled milestones to ensure EPM practices and tools projects objectives are met"
        },
        {
            "organization": "saso",
            "title": "Meet scheduled milestones to ensure multimedia solutions projects objectives are met"
        },
        {
            "organization": "saso",
            "title": "Meet scheduled milestones to ensure network solutions projects objectives are met"
        },
        {
            "organization": "saso",
            "title": "Meet scheduled milestones to ensure security governance projects objectives are met"
        },
        {
            "organization": "saso",
            "title": "Meet scheduled milestones to ensure security solutions projects objectives are met"
        },
        {
            "organization": "saso",
            "title": "Meet scheduled milestones to ensure systems analysis project objectives are met in a timely manner"
        },
        {
            "organization": "saso",
            "title": "Meet scheduled milestones to ensure technical support projects objectives are met"
        },
        {
            "organization": "saso",
            "title": "Monitor and report on project performance on a regular basis"
        },
        {
            "organization": "saso",
            "title": "Outline tasks/manuals related to client application installation for desktops (if any)"
        },
        {
            "organization": "saso",
            "title": "Oversee quality control throughout the software development life cycle"
        },
        {
            "organization": "saso",
            "title": "Oversee quality control throughout the software development life cycle and ensure UAT"
        },
        {
            "organization": "saso",
            "title": "Participate in budgeting and quality improvement activities for the IT organization"
        },
        {
            "organization": "saso",
            "title": "Participate in contract negotiation and administration for his department"
        },
        {
            "organization": "saso",
            "title": "Participate in development, implementation, and enforcement of IT policies and procedures"
        },
        {
            "organization": "saso",
            "title": "Participate in IT strategy development"
        },
        {
            "organization": "saso",
            "title": "Participate in managing application vendors and their service level agreements"
        },
        {
            "organization": "saso",
            "title": "Participate in managing vendors and their service level agreements"
        },
        {
            "organization": "saso",
            "title": "Participate in strategy development and change management"
        },
        {
            "organization": "saso",
            "title": "Participate in strategy development and change management for the IT organization"
        },
        {
            "organization": "saso",
            "title": "Participate in the testing and evaluation of new technology solutions and prototypes"
        },
        {
            "organization": "saso",
            "title": "Participate in vendor management and contract negotiation and administration"
        },
        {
            "organization": "saso",
            "title": "Perform archiving, backup, and recovery for application solutions in collaboration with the datacenter"
        },
        {
            "organization": "saso",
            "title": "Perform archiving, backup, and recovery for databases in collaboration with the datacenter"
        },
        {
            "organization": "saso",
            "title": "Perform capacity and resource planning, and assess and design availability of applications"
        },
        {
            "organization": "saso",
            "title": "Perform capacity and resource planning, and assess and design availability of network solutions"
        },
        {
            "organization": "saso",
            "title": "Perform capacity and resource planning, and assess and design availability of security solutions"
        },
        {
            "organization": "saso",
            "title": "Perform capacity and resource planning, and assess and design availability of the data center"
        },
        {
            "organization": "saso",
            "title": "Perform root cause analysis and develop checklists for typical problems related to databases"
        },
        {
            "organization": "saso",
            "title": "Perform root cause analysis and develops checklists for typical problems"
        },
        {
            "organization": "saso",
            "title": "Perform tasks related to application solutions installation in the data center"
        },
        {
            "organization": "saso",
            "title": "Perform tasks relating to data center solutions installation"
        },
        {
            "organization": "saso",
            "title": "Perform tasks relating to information security solutions installation for local and remote locations"
        },
        {
            "organization": "saso",
            "title": "Perform tasks relating to multimedia solutions installation for local and remote locations"
        },
        {
            "organization": "saso",
            "title": "Perform tasks relating to network solutions installation for local and remote locations"
        },
        {
            "organization": "saso",
            "title": "Plan and ensure a quality portfolio and architecture of desktops and data center infrastructure"
        },
        {
            "organization": "saso",
            "title": "Plan and ensure a quality portfolio and architecture of e-services and applications"
        },
        {
            "organization": "saso",
            "title": "Plan and ensure a quality portfolio and architecture of security, network, and multimedia solutions"
        },
        {
            "organization": "saso",
            "title": "Plan and maintain an strategic initiatives and operational projects in an IT roadmap"
        },
        {
            "organization": "saso",
            "title": "Plan and manage portfolio of programs/projects in the IT organization"
        },
        {
            "organization": "saso",
            "title": "Plan and manage the portfolio of programs/projects in the IT organization and the EPM tools"
        },
        {
            "organization": "saso",
            "title": "Plan and prioritize business process re-engineering activities/projects"
        },
        {
            "organization": "saso",
            "title": "Plan information network solutions portfolio and architecture"
        },
        {
            "organization": "saso",
            "title": "Plan information security solutions portfolio and architecture"
        },
        {
            "organization": "saso",
            "title": "Plan multimedia solutions portfolio and architecture"
        },
        {
            "organization": "saso",
            "title": "Plan network solutions portfolio and architecture"
        },
        {
            "organization": "saso",
            "title": "Plan the desktops and data center server and storage portfolio and architecture"
        },
        {
            "organization": "saso",
            "title": "Plan, develop, and track training/development programs of the IT organization"
        },
        {
            "organization": "saso",
            "title": "Prepare and ensure release and deployment of application solutions"
        },
        {
            "organization": "saso",
            "title": "Prepare and ensure release and deployment of data center systems and equipment"
        },
        {
            "organization": "saso",
            "title": "Prepare and ensure release and deployment of information security solutions"
        },
        {
            "organization": "saso",
            "title": "Prepare and ensure release and deployment of multimedia solutions"
        },
        {
            "organization": "saso",
            "title": "Prepare and ensure release and deployment of network solutions"
        },
        {
            "organization": "saso",
            "title": "Prepare IT budget with supporting documentation and justification"
        },
        {
            "organization": "saso",
            "title": "Provide end-user awareness and training on released application solutions"
        },
        {
            "organization": "saso",
            "title": "Provide expertise regarding the integration of systems across the business"
        },
        {
            "organization": "saso",
            "title": "Provide ongoing monitoring, support (2nd level), and operations for data center and desktop solutions"
        },
        {
            "organization": "saso",
            "title": "Provide ongoing monitoring, support (2nd level), and operations for information security solutions"
        },
        {
            "organization": "saso",
            "title": "Provide ongoing monitoring, support (2nd level), and operations for multimedia solutions"
        },
        {
            "organization": "saso",
            "title": "Provide ongoing operations and support for released application and data platforms"
        },
        {
            "organization": "saso",
            "title": "Provide ongoing operations and support for released application platforms"
        },
        {
            "organization": "saso",
            "title": "Provide ongoing operations and support for released database platforms"
        },
        {
            "organization": "saso",
            "title": "Provide technical advice, guidance and training to customers using IT solutions"
        },
        {
            "organization": "saso",
            "title": "Provides technical advice, guidance and training to customers using multimedia solutions"
        },
        {
            "organization": "saso",
            "title": "Qualify IT vendors and maintain an approved vendor database and tracking system for IT"
        },
        {
            "organization": "saso",
            "title": "Recommend procedures and controls for problem prevention"
        },
        {
            "organization": "saso",
            "title": "Recommend procedures and controls for problem prevention in database platforms"
        },
        {
            "organization": "saso",
            "title": "Recommend technology solutions and tools for project management"
        },
        {
            "organization": "saso",
            "title": "Research technology and market trends and determine potential impact on the organization"
        },
        {
            "organization": "saso",
            "title": "Research, evaluate and recommend business applications products and specifications"
        },
        {
            "organization": "saso",
            "title": "Research, evaluate and recommend desktops and data center software/hardware specifications"
        },
        {
            "organization": "saso",
            "title": "Research, evaluate and recommend information security software/hardware product specifications"
        },
        {
            "organization": "saso",
            "title": "Research, evaluate and recommend multimedia software/hardware product specifications"
        },
        {
            "organization": "saso",
            "title": "Research, evaluate and recommend network software/hardware product specifications"
        },
        {
            "organization": "saso",
            "title": "Select and standardize methods and tools for analysis of information and business requirements"
        },
        {
            "organization": "saso",
            "title": "Select appropriate methods and tools for analysis of information and business requirements"
        },
        {
            "organization": "saso",
            "title": "Selecting appropriate methods and tools for information security auditing and analysis "
        },
        {
            "organization": "saso",
            "title": "Serve as a liaison between the business and the IT organization"
        },
        {
            "organization": "saso",
            "title": "Simplify solutions architecture continuously"
        },
        {
            "organization": "saso",
            "title": "Suggest plans to integrate new and existing business processes"
        },
        {
            "organization": "saso",
            "title": "Supervise the preliminary stages of projects assigned"
        },
        {
            "organization": "saso",
            "title": "Understand business requirements that drive the analysis and design of quality solutions"
        },
        {
            "organization": "saso",
            "title": "Work with and lead quality coordinators throughout the organization"
        },
        {
            "organization": "saso",
            "title": "Work with finance and human resources to represent the needs of IT and understand business constraints"
        },
        {
            "organization": "saso",
            "title": "Work with IT directors and business leaders to create the overall IT strategy and ensure alignment with business"
        }
    ]
};