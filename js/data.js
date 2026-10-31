/**
 * ====================================================================
 * 🎓 STUDENT PORTFOLIO CONFIGURATION FILE
 * ====================================================================
 * Welcome to your portfolio template! 
 * You do NOT need to touch HTML or complex code.
 * Simply edit the values inside this file to match your background.
 * 
 * 💡 TIPS FOR STUDENTS WITHOUT WORK EXPERIENCE:
 * 1. Emphasize your Projects, Academic coursework, and Campus clubs!
 * 2. Highlight your technical skills, problem-solving, and hackathons.
 * 3. Link your real GitHub and LinkedIn profiles.
 * 4. Keep your CGPA/GPA if it's strong (e.g., > 3.0 / 4.0 or > 7.5 / 10).
 * ====================================================================
 */

const portfolioData = {
  // -------------------------------------------------------------
  // 👤 1. PERSONAL INFORMATION & HERO SECTION
  // -------------------------------------------------------------
  personal: {
    name: "Alex Morgan",
    preferredName: "Alex",
    pronouns: "they/them", // e.g., "he/him", "she/her", "they/them", or ""
    avatar: "assets/images/avatar.svg", // Replace with your photo path (e.g., 'assets/images/my-photo.jpg')
    
    // College & Academic Level
    university: "Tech State University",
    degree: "B.S. in Computer Science",
    graduationYear: "Class of 2026",
    currentYear: "Junior (3rd Year Undergrad)",
    location: "San Francisco, CA / Open to Remote",
    
    // Status Badge shown prominently on top of Hero
    statusBadge: {
      active: true,
      text: "Open to Summer 2025 Internships & Co-ops",
      icon: "sparkles" // lucide icon name
    },

    // Catchy Taglines
    headline: "Aspiring Software Engineer & CS Undergrad",
    tagline: "Passionate about building intuitive web applications, exploring distributed systems, and turning complex problem statements into clean, scalable code.",

    // Links to your Resume and Primary Contact
    resumeUrl: "assets/resume/sample-resume.html", // Replace with 'assets/resume/your-resume.pdf' or your Google Drive link
    email: "alex.morgan.cs@university.edu",
    phone: "+1 (555) 234-5678", // Optional: leave "" if you don't want to show phone
  },

  // -------------------------------------------------------------
  // 📊 2. QUICK STATS (Builds instant credibility!)
  // -------------------------------------------------------------
  quickStats: [
    { label: "Cumulative GPA", value: "3.85 / 4.0", icon: "award", subtext: "Dean's Honor List" },
    { label: "Projects Completed", value: "8+", icon: "code-2", subtext: "Academic & Personal" },
    { label: "LeetCode Solved", value: "250+", icon: "terminal", subtext: "Data Structures & Algos" },
    { label: "Hackathons", value: "3x Participant", icon: "flame", subtext: "1x Category Winner" }
  ],

  // -------------------------------------------------------------
  // 🌐 3. SOCIAL & CODING PROFILES
  // -------------------------------------------------------------
  socials: [
    {
      name: "GitHub",
      url: "https://github.com",
      username: "@alexmorgan-dev",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      username: "in/alexmorgan-cs",
      icon: "linkedin"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com",
      username: "alex_codes",
      icon: "code"
    },
    {
      name: "Twitter / X",
      url: "https://twitter.com",
      username: "@alex_builds",
      icon: "twitter"
    },
    {
      name: "Email",
      url: "mailto:alex.morgan.cs@university.edu",
      username: "alex.morgan.cs@university.edu",
      icon: "mail"
    }
  ],

  // -------------------------------------------------------------
  // 📖 4. ABOUT ME
  // -------------------------------------------------------------
  about: {
    bioParagraphs: [
      "Hello! I am a 3rd-year Computer Science undergraduate at Tech State University. While I don't have corporate full-time experience yet, I have spent the last three years building software through hands-on coursework, hackathons, and self-directed open-source projects.",
      "I love bridging the gap between theoretical computer science and practical products. Recently, I've been fascinated by full-stack web architectures, REST APIs, and database indexing techniques.",
      "When I am not debugging code or grinding algorithmic challenges on LeetCode, you can find me tutoring freshman students in Data Structures or participating in collegiate hackathons."
    ],
    highlights: [
      {
        icon: "book-open",
        title: "Fast Learner",
        description: "Quickly adapt to new frameworks, libraries, and internal tooling within days."
      },
      {
        icon: "users",
        title: "Collaborative Teammate",
        description: "Experienced in Git version control, pull request reviews, and agile team sprints."
      },
      {
        icon: "cpu",
        title: "Strong CS Fundamentals",
        description: "Solid foundation in Data Structures, Algorithms, OOP, Database Systems, and OS."
      },
      {
        icon: "lightbulb",
        title: "Product-Minded",
        description: "Obsessed with clean UI/UX, responsive layouts, and user-centric problem solving."
      }
    ]
  },

  // -------------------------------------------------------------
  // 🎓 5. EDUCATION & ACADEMIC BACKGROUND (Primary Anchor!)
  // -------------------------------------------------------------
  education: [
    {
      institution: "Tech State University",
      location: "San Francisco, CA",
      degree: "Bachelor of Science in Computer Science",
      minor: "Minor in Mathematics", // Optional or ""
      duration: "Aug 2022 – Expected May 2026",
      gpa: "3.85 / 4.0 (Dean's Honor List - All Semesters)",
      status: "Currently Enrolled (Semester 6)",
      
      // Coursework is gold for students without work history!
      relevantCoursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (Java/C++)",
        "Database Management Systems (SQL)",
        "Operating Systems & Concurrency",
        "Computer Networks",
        "Software Engineering Principles",
        "Web Application Development",
        "Discrete Mathematics",
        "Linear Algebra"
      ],

      achievements: [
        "Awarded University Academic Excellence Merit Scholarship (Top 5% of freshman intake)",
        "Dean's List Honoree: Fall 2022, Spring 2023, Fall 2023, Spring 2024",
        "Undergraduate Peer Tutor for CS101: Introduction to Computer Science"
      ]
    },
    {
      institution: "Oakridge High School",
      location: "San Jose, CA",
      degree: "High School Diploma with STEM Honors",
      minor: "",
      duration: "Aug 2018 – May 2022",
      gpa: "3.95 / 4.0",
      status: "Graduated",
      relevantCoursework: [
        "AP Computer Science A (Java)",
        "AP Calculus BC",
        "AP Physics C"
      ],
      achievements: [
        "President of the High School Robotics Club",
        "Valedictorian Nominee"
      ]
    }
  ],

  // -------------------------------------------------------------
  // 💻 6. TECHNICAL SKILLS
  // -------------------------------------------------------------
  skills: {
    categories: [
      {
        name: "Programming Languages",
        icon: "code",
        items: [
          { name: "Python", level: "Proficient", badge: "Primary" },
          { name: "Java", level: "Proficient", badge: "Coursework" },
          { name: "JavaScript (ES6+)", level: "Proficient", badge: "Web" },
          { name: "TypeScript", level: "Intermediate", badge: "" },
          { name: "C / C++", level: "Intermediate", badge: "Systems" },
          { name: "SQL", level: "Proficient", badge: "Databases" },
          { name: "HTML5 / CSS3", level: "Proficient", badge: "" }
        ]
      },
      {
        name: "Frameworks & Libraries",
        icon: "layers",
        items: [
          { name: "React.js", level: "Proficient", badge: "Frontend" },
          { name: "Node.js & Express", level: "Proficient", badge: "Backend" },
          { name: "Tailwind CSS", level: "Proficient", badge: "Styling" },
          { name: "Flask / FastAPI", level: "Intermediate", badge: "Python" },
          { name: "Next.js", level: "Beginner", badge: "Exploring" }
        ]
      },
      {
        name: "Developer Tools & Cloud",
        icon: "wrench",
        items: [
          { name: "Git & GitHub", level: "Proficient", badge: "Essential" },
          { name: "PostgreSQL & SQLite", level: "Intermediate", badge: "" },
          { name: "MongoDB", level: "Intermediate", badge: "" },
          { name: "Postman (API Testing)", level: "Proficient", badge: "" },
          { name: "VS Code", level: "Expert", badge: "" },
          { name: "Docker Basics", level: "Beginner", badge: "Learning" },
          { name: "Linux / Bash CLI", level: "Intermediate", badge: "" },
          { name: "Vercel / Netlify", level: "Proficient", badge: "Deployment" }
        ]
      },
      {
        name: "CS Core Concepts",
        icon: "cpu",
        items: [
          { name: "Data Structures & Algos", level: "Proficient", badge: "LeetCode" },
          { name: "RESTful API Design", level: "Proficient", badge: "" },
          { name: "Relational DB Schema Design", level: "Proficient", badge: "" },
          { name: "OOP & Design Patterns", level: "Proficient", badge: "" },
          { name: "Version Control Workflows", level: "Proficient", badge: "CI/CD" }
        ]
      }
    ]
  },

  // -------------------------------------------------------------
  // 🚀 7. PROJECTS (Your #1 Selling Point!)
  // -------------------------------------------------------------
  // Tip: Categorize your projects so recruiters can filter easily.
  // Categories: 'all', 'web', 'coursework', 'hackathon', 'systems'
  projects: [
    {
      id: "study-sync",
      title: "StudySync – Student Study Group Finder",
      category: "web",
      featured: true,
      tag: "Full-Stack Web App",
      badge: "⭐ Featured Project",
      duration: "Sep 2024 – Nov 2024",
      description: "A collaborative web platform created specifically for college peers to schedule study sessions, share lecture notes, and join subject-specific channels.",
      problemSolved: "College students struggled with scattered WhatsApp/Discord links to find study partners for specific midterm exams.",
      highlights: [
        "Built responsive client with React.js and Tailwind CSS; integrated dark/light theme persistence.",
        "Engineered RESTful backend using Node.js/Express with JWT authentication and bcrypt password hashing.",
        "Implemented PostgreSQL schema supporting relational queries for classes, study slots, and RSVP counts.",
        "Integrated WebSockets to facilitate instant real-time messaging between group members."
      ],
      techStack: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Socket.io"],
      githubUrl: "https://github.com",
      liveDemoUrl: "https://example.com",
      image: "assets/images/project-studysync.svg"
    },
    {
      id: "campus-market",
      title: "CampusMart – Peer-to-Peer Textbook Exchange",
      category: "coursework",
      featured: true,
      tag: "Academic Coursework Capstone",
      badge: "🎓 Database Systems (Grade A)",
      duration: "Feb 2024 – May 2024",
      description: "A secure marketplace allowing university students to buy, sell, or trade used textbooks, dorm essentials, and lab gear verified exclusively via university (.edu) email.",
      problemSolved: "Prevented scams by gating registration behind verified institutional email tokens.",
      highlights: [
        "Designed normalized 3NF database schema handling user profiles, item listings, and trade transactions.",
        "Implemented full-text search with price filtering and category indexing, reducing query response times by 40%.",
        "Wrote comprehensive unit tests using Jest covering all API transaction endpoints.",
        "Recognized by course professor as one of the top 3 standout final semester submissions."
      ],
      techStack: ["JavaScript", "Python", "Flask", "SQLite", "Bootstrap 5", "Jest"],
      githubUrl: "https://github.com",
      liveDemoUrl: "https://example.com",
      image: "assets/images/project-campusmart.svg"
    },
    {
      id: "algo-visualizer",
      title: "AlgoVision – Interactive Algorithm Visualizer",
      category: "web",
      featured: true,
      tag: "Personal Project",
      badge: "🔥 250+ GitHub Stars",
      duration: "Jun 2024 – Jul 2024",
      description: "An intuitive browser-based visualization tool illustrating sorting (QuickSort, MergeSort) and pathfinding algorithms (Dijkstra, A* Search) with adjustable speed controls.",
      problemSolved: "Helps visual learners understand algorithmic complexity, recursion trees, and edge cases.",
      highlights: [
        "Architected smooth 60fps animations using HTML5 Canvas and custom JavaScript step generators.",
        "Added step-by-step pseudo-code highlight sync to let learners view code execution line by line.",
        "Deployed to Vercel with zero latency and 100% Google Lighthouse performance score."
      ],
      techStack: ["JavaScript", "HTML5 Canvas", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com",
      liveDemoUrl: "https://example.com",
      image: "assets/images/project-algovision.svg"
    },
    {
      id: "health-hack",
      title: "NutriSnap – AI Meal Health Assistant",
      category: "hackathon",
      featured: false,
      tag: "Hackathon Entry",
      badge: "🏆 HackTech 2024 Best Health Hack",
      duration: "48-Hour Sprint (Oct 2024)",
      description: "An AI-powered meal snapshot analyzer that estimates caloric intake and macronutrient breakdowns using vision models.",
      problemSolved: "Manual calorie tracking apps are tedious; taking a photo simplifies student meal logging.",
      highlights: [
        "Built and pitched functional prototype with a 4-person team in under 36 hours.",
        "Integrated computer vision API to parse food items and estimate portion weights.",
        "Took 1st place in the 'Best Collegiate Health Hack' category among 65 competing teams."
      ],
      techStack: ["React Native", "FastAPI", "OpenAI Vision API", "Expo"],
      githubUrl: "https://github.com",
      liveDemoUrl: "https://example.com",
      image: "assets/images/project-nutrisnap.svg"
    },
    {
      id: "shell-mini",
      title: "SimpleShell – Custom Unix CLI Shell",
      category: "systems",
      featured: false,
      tag: "Systems Programming",
      badge: "⚙️ Operating Systems Project",
      duration: "Mar 2024 – Apr 2024",
      description: "A lightweight Unix command-line interpreter implementing process piping, redirection, environment variables, and background execution in C.",
      problemSolved: "Deepened practical comprehension of OS kernels, system calls (`fork`, `execvp`, `waitpid`), and POSIX signals.",
      highlights: [
        "Handled child process lifecycles and eliminated zombie processes using POSIX signal handlers (`SIGCHLD`).",
        "Constructed custom tokenization parser supporting input/output redirection (`>`, `<`) and multi-stage pipes (`|`).",
        "Passed 100% of automated test suites with zero memory leaks verified via Valgrind."
      ],
      techStack: ["C", "POSIX API", "Linux", "Valgrind", "Makefile"],
      githubUrl: "https://github.com",
      liveDemoUrl: "",
      image: "assets/images/project-shell.svg"
    }
  ],

  // -------------------------------------------------------------
  // 👥 8. CAMPUS INVOLVEMENT, CLUBS & LEADERSHIP
  // -------------------------------------------------------------
  // This is your equivalent to work experience! 
  // Clubs, student societies, peer mentoring, and hackathon teams.
  campusInvolvement: [
    {
      role: "Technical Lead & Workshop Coordinator",
      organization: "Google Developer Student Club (GDSC) - Campus Chapter",
      duration: "Aug 2023 – Present",
      type: "Student Club Leadership",
      badge: "Leadership",
      highlights: [
        "Organized and hosted 5 hands-on workshops on Git/GitHub and Web Development for over 150+ freshman attendees.",
        "Spearheaded the annual 24-hour campus hackathon portal development, managing team of 4 student coders.",
        "Mentored 20+ first-year students on building their very first open-source project submissions."
      ]
    },
    {
      role: "Undergraduate Peer Tutor",
      organization: "Department of Computer Science, Tech State University",
      duration: "Jan 2024 – Present",
      type: "Academic Mentorship",
      badge: "Teaching",
      highlights: [
        "Provide weekly 6-hour walk-in office hours assisting students with CS 101/102 labs (Python & Java).",
        "Deconstruct confusing concepts like pointers, recursion, and object-oriented inheritance into clear analogies.",
        "Achieved a 4.9/5.0 student satisfaction rating across two consecutive academic quarters."
      ]
    },
    {
      role: "Active Member & Competitor",
      organization: "Competitive Programming & ACM Student Chapter",
      duration: "Oct 2022 – Present",
      type: "Technical Society",
      badge: "Community",
      highlights: [
        "Participate in weekly algorithmic problem-solving sessions focusing on graphs, dynamic programming, and greedy methods.",
        "Represented Tech State University in ICPC Regional Preliminary rounds."
      ]
    }
  ],

  // -------------------------------------------------------------
  // 🏆 9. HONORS, CERTIFICATIONS & ACHIEVEMENTS
  // -------------------------------------------------------------
  achievements: [
    {
      title: "1st Place Winner - Best Health Hack",
      issuer: "HackTech Collegiate Hackathon 2024",
      date: "Oct 2024",
      icon: "trophy",
      description: "Won $1,500 prize among 65 collegiate teams for developing the NutriSnap AI food analyzer."
    },
    {
      title: "Dean's Honor List (4 Consecutive Semesters)",
      issuer: "College of Engineering & Sciences",
      date: "2022 – 2024",
      icon: "award",
      description: "Awarded to students maintaining a semester GPA of 3.80 or higher."
    },
    {
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Coursera / Meta",
      date: "Aug 2024",
      icon: "check-circle-2",
      description: "Rigorous 9-course specialization covering React, JavaScript, HTML/CSS, UI/UX, and testing."
    },
    {
      title: "AWS Certified Cloud Practitioner (Foundational)",
      issuer: "Amazon Web Services",
      date: "Jun 2024",
      icon: "cloud",
      description: "Validated understanding of cloud infrastructure, security, architecture, and pricing models."
    }
  ],

  // -------------------------------------------------------------
  // 💬 10. TESTIMONIALS / PROFESSOR & PEER ENDORSEMENTS (Optional)
  // -------------------------------------------------------------
  testimonials: [
    {
      quote: "Alex has consistently demonstrated remarkable curiosity and clarity in our Data Structures class. Their ability to write clean code and explain difficult logic to peers is exceptional.",
      author: "Dr. Elena Rostova",
      title: "Associate Professor of Computer Science",
      institution: "Tech State University"
    },
    {
      quote: "Working with Alex during HackTech was effortless. They handled our full backend integration under intense time pressure and kept the team energized throughout the 36-hour sprint.",
      author: "Marcus Vance",
      title: "Hackathon Teammate & GDSC President",
      institution: "Computer Engineering '25"
    }
  ],

  // -------------------------------------------------------------
  // 📬 11. CONTACT & FOOTER
  // -------------------------------------------------------------
  contact: {
    heading: "Let's Connect & Collaborate!",
    subheading: "Whether you have an internship opening, a question about my coursework projects, or just want to chat about tech—my inbox is always open!",
    directEmail: "alex.morgan.cs@university.edu",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    twitterUrl: "https://twitter.com",
    discordHandle: "alex_codes#1234",
    availabilityNote: "Currently seeking Summer 2025 Software Engineering Internships (In-Person or Remote)"
  }
};

// Export for module systems if used, or bind to window for vanilla browser scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
} else {
  window.portfolioData = portfolioData;
}
