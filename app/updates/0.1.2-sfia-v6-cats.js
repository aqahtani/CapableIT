/**
 * Creates v6 categories and subcategories and 
 */

var keystone = require('keystone');

exports.create = {
    
    HardSkillCategory: [
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
    ],
    
    
    HardSkillSubCategory : [
    
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
    ]
};

