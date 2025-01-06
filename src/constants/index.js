import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
   
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Front End Developer",
        company_name: "Fiverr",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "November 2023 - Present",
        points: [
            "UI/UX Design Implementation: Translated design mockups and wireframes into responsive, interactive web pages using HTML5, CSS3, and JavaScript frameworks.",
            "Responsive Design: Ensured websites were fully responsive and compatible with various devices and screen sizes, improving user experience across platforms.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Cross-Browser Compatibility: Conducted thorough testing and debugging to ensure consistent functionality and appearance across all major browsers (Chrome, Firefox, Safari, Edge).",
        ],
    },
    {
        title: " Driver",
        company_name: "Amazon",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Oct 2021 - Present",
        points: [
            "Transporting and delivering goods and/or items to clients or business in a safe, timely manner.",
            "Examining and reviewing orders before and after delivery to make sure that orders are complete, and clients are satisfied.",
            "Building and maintaining a healthy relationship with clients by answering any questions they may have and handling their complaints.",
        ],
    },
    {
        title: "Driver",
        company_name: "Pizza Hut",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2017 - Aug 2021",
        points: [
            "Checking orders before delivery to ensure that the correct products have been made, and that charges are accurate.",
            "Transporting orders as well as managing cash and card payments upon delivery, as needed.",
            "Adhering to road and traffic regulations.",
            "Anticipating and responding to customers queries and complaints.",
        ],
    },
    {
        title: "eBay Seller",
        company_name: "eBay",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "April 2017 - Present",
        points: [
            "Creating ebay listings including detailed item descriptions",
            "Photographing, Testing, Cleaning and Preparing items",
            "Recording all transactions, costs and deposits",
            "Internet based research of items",
            "High level of familiarity with eBay, Amazon and other online marketplaces",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/GaynorBaby',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/brandon-gaynor-325a521aa',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Kobo Bank App',
        description: 'A seamless and secure banking app designed for money transfers and digital wallet management. Features include Modern UI with dynamic visuals and clear call-to-action buttons. Emphasis on secure payments and 24/7 support to enhance user trust.',
        link: 'https://kobobankapplandingpage.netlify.app',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Nike Website',
        description: 'Recreated the Nike website with a clean and engaging design to showcase products. Focused on responsive layouts, bold visuals, and intuitive navigation. Simplified exploration of featured items and promotional offers.',
        link: 'https://nikewebsitelandingpagetailwind.netlify.app',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Gaming Awards Website',
        description: 'Developed an immersive and interactive platform celebrating achievements in gaming. Includes categories, nominees, winners, and event updates. Designed for a modern and engaging user experience.',
        link: 'https://gamingawardswebsite.netlify.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Discover Local',
        description: 'Created a professional tour guide website for a Costa Rican friend to help grow her business. Features a responsive design, dynamic visuals, and intuitive navigation. Emphasizes product benefits through engaging visuals and social proof.',
        link: 'https://discoverlocal.netlify.app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Xora SaaS Landing Page',
        description: 'A sleek and professional landing page to promote software services. Includes key features, user testimonials, and compelling calls to action. Emphasizes product benefits through engaging visuals and social proof. ',
        link: 'https://xorasaaslandingpage.netlify.app',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'Developed an app that leverages AI to automatically generate concise summaries from long-form text. Ideal for summarizing blogs, articles, or lenghty content with efficiency.',
        link: 'https://projectaisummarizer.netlify.app',
    }
];