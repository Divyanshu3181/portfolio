import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "Netflux",
    description:
      "Designed and developed a responsive, movie streaming app, featuring secure login/signup, a cinematic browse page with video trailers, and trending movie sections.",
    image: "netflux1.jpeg",
    tech: ["React", "Redux", "Firebase", "Tailwind CSS"],
    github: "https://github.com/Divyanshu3181/netflux",
    live: "https://netflux-beta.vercel.app/",
    details: {
      problem:
        "Traditional movie recommentations are lack of modern features and user experience",
      solution:
        "Built a streamlinedmovie recommentations with real-time movie updates and movie search functionality",
      features: [
        "Sign In / Sign up feature",
        "Backgroud Trailer streaming",
        "Advanced movie search",
        
      ],
      impact: "Helping thousands of movie seekers find their desire movie",
    },
  },
  {
    title: "My-Tube",
    description: " Developed a Scalable video streaming platform with features like video playback and interactive user engagement.",
    image: "my-tube.jpeg",
    tech: ["React", "Redux", "Tailwind CSS", "API Polling", "Debouncing", "Caching"],
    github: "https://github.com/Divyanshu3181/my-youtube",
    live: "https://www.youtube.com/watch?v=br8Bb7QSFvM",
    details: {
      problem: "Complex Video streaming",
      solution:
        "Developed My-Tube, a scalable video streaming platform with a focus on performance optimization, interactive user engagement, and real-time features. Leveraged advanced techniques like debouncing, caching, and API polling to ensure seamless functionality and reduced latency.",
      features: [
        "Video Playback & Interactive Engagement",
        "De-Bounced Search with Caching",
        "Nested Comment System",
        "Real-Time Live Chat",
        "State Management with Redux",
      ],
      impact: "Improved search efficiency and reduced server load by 30% through debouncing and caching. Real-time features like live chat and nested comments drove 20% higher user retention rates.",
    },
    
  },
  {
    title: "Task-Management Dashboard",
    description: "A Task-management solution",
    image: "task_management.jpeg",
    tech: ["React", "Redux", "Tailwind CSS"],
    github: "https://github.com/Divyanshu3181/task_management",
    live: "https://github.com/Divyanshu3181/task_management",
    details: {
      problem: "Complex Task Management",
      solution:
        "Developed a Task Manager Application to streamline task management with features like dynamic filtering, debounced search, persistent storage, and confirmation modals to ensure user actions are deliberate and secure.",
      features: [
        "Task Creation & Status Management",
        "Dynamic Search with Debouncing",
        "Task Filters for Streamlined Viewing",
        "Confirmation Modals for Secure Actions",
        "Persistent Storage",
      ],
      impact: "Improved Task Management, Enhanced User Experience",
    },
  },
  {
    title: "Expense Tracker",
    description: "Expense Tracker: C++ Command-Line Application",
    image: "expense.jpg",
    tech: ["C++", " File Handling", "OOP", "Data Persistence"],
    github: "https://github.com/Divyanshu3181/Expenses_Tracker",
    live: "https://github.com/Divyanshu3181/Expenses_Tracker",
    details: {
      problem: "Many people struggle to track their personal expenses effectively, leading to poor financial management. Existing tools are often overly feature-heavy or lack the ability to work offline.",
      solution:
        "Built a C++ command-line expense tracker to offer a lightweight, easy-to-use, offline solution for managing personal finances.",
      features: [
        "Expense Management",
        "Summary Reports",
        "Persistent Storage",
        "Offline Usability",
      ],
      impact: "Enabled users to better manage their finances by keeping an organized record of expenses",
    },
    
  },
  
];
