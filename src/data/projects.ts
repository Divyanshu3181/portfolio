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
        "Engineered a developer-focused social platform featuring a personalized content feed, professional networking",
        "Connection Requests",
        "Real-Time Chat with WebSocket with 40% improved latency",
        "Architected a scalable backend using Node.js, Express.js, and MongoDB, implementing Razorpay payment gateway with 99.9% uptime.",
        "Secure Authentication",
        "Enhanced application performance with Redux Toolkit and custom middleware, reducing data fetch times by 35% and optimizing state management.",
        "Deployed and configured production infrastructure on AWS EC2 with Nginx reverse proxy and PM2, achieving 99.5% system availability",
      ],
      impact:
        "Enhanced networking and collaboration among developers, providing a seamless user experience and efficient state management.",
    },
  },
  {
    title: "Draw-App",
    description:
      "• Engineered a real-time collaborative drawing platform enabling multiple users to draw, erase, and move objects in shared workspaces with WebSocket-based synchronization, achieving <100ms latency.",
    image: "draw-app.png",
    tech: ["Next.js", "TypeScript", "WebSocket", "PostgreSQL", "Node.js", "TurboRepo"],
    github: "https://github.com/Divyanshu3181/draw-app",
    live: "https://www.youtube.com/watch?v=kXMRmq4HHjU",
    details: {
      problem:
        "Real-time collaboration in drawing applications often suffers from latency issues and poor synchronization, limiting team creativity and productivity.",
      solution:
        "Developed a scalable collaborative drawing platform with WebSocket architecture that enables instant synchronization and smooth multi-user interactions.",
      features: [
        "Real-time collaborative drawing with multiple tools",
        "Secure room creation and sharing system",
        "Built-in real-time chat functionality",
        "Object manipulation (move, resize, delete)",
        "Responsive design with dark mode support"
      ],
      impact: 
        "50% reduction in sync latency, 30% faster build times with TurboRepo, Handles 100+ concurrent users per room, 95% code reusability across modules"
      
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
];
