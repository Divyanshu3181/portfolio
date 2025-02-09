import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "DevSpark",
    description:
      "Built a developer-centric social platform with a personalized feed, connection requests, and real-time chat using WebSocket.",
    image: "devspark.png",
    tech: [
      "React", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "WebSocket", "AWS EC2", "Nginx"
    ],
    github: "https://github.com/Divyanshu3181/DevSpark-web",
    live: "https://devspark.divyanshu.site/",
    details: {
      problem:
        "Developers lack a dedicated platform for networking, collaboration, and real-time discussions.",
      solution:
        "Created DevSpark, a social platform tailored for developers with features like real-time chat, personalized feeds, and secure authentication.",
      features: [
        "Personalized Feed",
        "Connection Requests",
        "Real-Time Chat with WebSocket",
        "Secure Authentication",
        "Optimized State Management with Redux Toolkit",
        "Deployed on AWS EC2 with Nginx for Scalability",
      ],
      impact:
        "Enhanced networking and collaboration among developers, providing a seamless user experience and efficient state management.",
    },
  },
  {
    title: "Netflux",
    description:
      "Designed and developed a responsive, movie streaming app, featuring secure login/signup, a cinematic browse page with video trailers, and trending movie sections.",
    image: "netflux1.jpeg",
    tech: ["React", "Redux", "Firebase", "Tailwind CSS"],
    github: "https://github.com/Divyanshu3181/netflux",
    live: "https://netflux-git-main-divyanshu3181s-projects.vercel.app/",
    details: {
      problem:
        "Traditional movie recommendations lack modern features and user experience.",
      solution:
        "Built a streamlined movie recommendation system with real-time movie updates and a movie search functionality.",
      features: [
        "Sign In / Sign up feature",
        "Background Trailer streaming",
        "Advanced movie search",
      ],
      impact: "Helping thousands of movie seekers find their desired movie.",
    },
  },
  {
    title: "My-Tube",
    description: "Developed a scalable video streaming platform with features like video playback and interactive user engagement.",
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
];
