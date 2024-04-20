// export const projects = [
//   {
//     title: "React Reserve",
//     subtitle: "MERN Stack",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
//     image: "./project-1.gif",
//     link: "https://reactbootcamp.com",
//   },
//   {
//     title: "React Tracks",
//     subtitle: "React and Python",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
//     image: "./project-2.gif",
//     link: "https://reactbootcamp.com",
//   },
//   {
//     title: "DevChat",
//     subtitle: "React and Firebase",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
//     image: "./project-3.gif",
//     link: "https://reactbootcamp.com",
//   },
//   {
//     title: "Epic Todo App",
//     subtitle: "React Hooks",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
//     image: "./project-4.gif",
//     link: "https://reactbootcamp.com",
//   },
// ];

export const projects = [
  {
    title: "Study on Procrastination in Students",
    subtitle: "Python | Data Analysis | Natural Language Processing",
    description:
      "Analysed procrastination among students in Python by scraping Reddit posts, performing keyword lemmatization, and conducting sentiment analysis to identify that procrastination is correlated with stress and social media use. Sentiment Analysis revealed common feelings such as anger and sadness associated with posts on procrastination.",
    image: "./data_analysis.png",
    link: "#",
    date: "Apr 2024"
  },
  {
    title: "Database Implementation",
    subtitle: "C++ | Mutex",
    description:
      "Implemented a B+ tree from scratch in C++ for database indexing, supporting operations such as lookup, insertion, and deletion. Utilized concepts like memory management, concurrency control with mutexes to prevent data corruption and race conditions. Additionally, implemented database operators like Select, Projection, Hash Join, Sort, and Hash Aggregation.",
    image: "./project-database-implementation.gif",
    link: "./database.png",
    date: "Oct 2023"
  },
  {
    title: "Weapon Based Threat Detection",
    subtitle: "Python | Pytorch | Deep Learning | Neural Networks | Computer Vision",
    description:
      "Developed a deep learning based multi-class classifier to detect individuals carrying weapons, with potential applications in surveillance. Employed computer vision techniques, data augmentation, hyperparameter tuning, and regularization to enhance accuracy from 70% to 88% while mitigating overfitting.",
    image: "./machineLearning.png",
    link: "#",
    date: "Jun 2023"
  },
  {
    title: "WeDo Task Manager – Full Stack Web App",
    subtitle: "Python | Django | JavaScript | SQLite | HTML | CSS",
    description:
      "Created a dynamic web application serving as a task manager with features including user sign-up and authentication, automatic email reminders, mobile responsiveness, and an alternative calendar view for task visualization. Built with Django framework for the Python backend and SQLite for storage, complemented by a HTML/CSS and JavaScript frontend.",
    image: "./wedo.png",
    link: "#",
    date: "Jan 2023"
  },
  {
    title: "Automation of Wikipedia's Category Annotations",
    subtitle: "Python | Machine Learning | Natural Language Processing",
    description:
      "Analysed supervised and unsupervised learning methods for categorization of Wikepedia Articles into 5 major categories. Scraped Data from Wikipedia, performed Exploratory Data Analysis, created word embeddings, and performed analyses using various technicques like Naive Bayes, Gradient Boosting Classifier and Random Forest methods, and found that gradient boosting classifier offered the best performance in predicting categories with an F1 score of 85%.",
    image: "./nlp.png",
    link: "https://sdidt.github.io/CS7641_Project/",
    date: "Dec 2023"
  },
  {
    title: "Software Defined Network Routing",
    subtitle: "ONOS | Python | Mininet | Java",
    description:
      "Designed firewall and learning switch applications using the Open Networking Operating System (ONOS). Developed a fault-tolerant learning switch leveraging intent-based forwarding within a Software Defined Networking environment.",
    image: "./sdn.png",
    link: "#"
  },
  {
    title: "AlloNUS – Java CLI Application",
    subtitle: "Java | Junit | UML | Scrum",
    description:
      "Devised a command-line interface application to assist students in managing classes, expenses, and contacts. Collaborated in a student scrum team to produce functional code, tests, documentation, and UML diagrams.",
    image: "./cli.png",
    link: "#"
  },
  {
    title: "Laser Tag - Computer Engineering Capstone Project",
    subtitle: "Python | Bluetooth | Multiprocessing | C++",
    description:
      "Constructed a physical laser tag game integrated with 6 Arduino microcontrollers and a central relay laptop communicating over Bluetooth low energy. Monitored game states, player health, and ammunition in real-time.",
    image: "./capstone.png",
    link: "#"
  },
  {
    title: "Real-Time Operating System Based Robot Car",
    subtitle: "ARM Microcontroller | C++ | JavaScript | HTML | CSS",
    description:
      "Developed a robot car on an ARM-based FRDM Development Board, featuring a web application for remote control using an ESP8266 Wi-Fi module. Implemented real-time multitasking to handle sound systems, lighting, driving functions, and obstacle detection.",
    image: "./rtos.png",
    link: "#"
  },
  {
    title: "ALEX Rescue Bot",
    subtitle: "LiDAR | RPI | ROS | Arduino",
    description:
      "Created a teleoperated robot capable of performing environmental mapping with LiDAR, along with color sensing and obstacle detection, aimed at rescue operations.",
    image: "./alex.png",
    link: "#"
  }
];

export const workExp = [
  {
    role: "Software Engineer Intern",
    company: "Continental",
    duration: "May 2022 – Aug 2022",
    tasks: [
      "Developed a Python script to automate project management tasks, reducing developer workload by 20% per iteration by using the Myers Git Diff algorithm to identify and resolve recurring issues in the static analysis tool.",
      "Improved project build consistency and teamwork by enhancing the script to generate Excel reports with an intuitive user interface that allows direct task resolution and automatically syncs changes with the tool.",
      "Utilized Python, Selenium, SQL, Jira, Klocwork, and Git within an Agile development framework, participating in scrum meetings and PI planning."
    ]
  },
  {
    role: "Software Developer Intern",
    company: "Skymech Automation and Engineering",
    duration: "Jun 2021 – Dec 2021",
    tasks: [
      "Acted as the sole developer of Java-based robotic welding software, enhancing operational speed by 15%, improving worker safety, and boosting product revenue by 10%.",
      "Independently designed and implemented REST API calls and a Java Swing-based UI for automated aircraft engine photo capture, reducing manual workload by 3 hours weekly and aiding in a 20% increase in sales.",
      "Gained proficiency in Java core, Swing, networking, multithreading, XMLRPC, and Maven to develop apps.",
      "Ensured seamless integration of software and hardware and conducted comprehensive customer training sessions."
    ]
  }
];


export const teachingExperience = [
  {
    role: "Undergraduate Teaching Assistant",
    company: "National university of Singapore",
    duration: "Aug 2022 – May 2023",
    tasks: [
      	"Undertook the role of a TA for Software Engineering and Object-Oriented Programming course across two semesters.",
      	"Instructed students in concepts in Java, OOP, Unit Testing, UML diagrams, Git and Software Engineering Frameworks.",
      	"Received excellent feedback from students citing technical and communication skills and was nominated for a teaching award."
    ]
  }
];

export const skills = {
  programmingLanguages: [
    "Python", "Java", "C++", "C", "JavaScript", "SQL", "HTML", "CSS", "Markdown"
  ],
  frameworksAndLibraries: [
    "Agile", "Django", "NumPy", "Pandas", "Scikit-learn", "PyTorch", "Celery"
  ],
  toolsAndConcepts: [
    "Linux", "Git", "UML", "Tableau", "Docker", "MySQL", "Postgres", "SQLite", "Wireshark", "Socket", "Rest API", "Ajax"
  ]
};

export const education = [
  {
    institution: "Georgia Institute of Technology",
    location: "Atlanta, Georgia",
    degree: "Master of Science in Computer Science",
    specialization: "Specialization in Computing Systems",
    gpa: "3.75/4",
    duration: "Aug 2023 – May 2025",
    courses: [
      "Database Systems Implementation",
      "Machine Learning",
      "Data Visualization",
      "Information Security",
      "Computer Vision",
      "Social Computing",
      "Computer Networks"
    ],
    image: "GT_logo.png"
  },
  {
    institution: "National University of Singapore (NUS)",
    location: "Singapore",
    degree: "Bachelor of Engineering in Computer Engineering (Honors)",
    // gpa: null, // or simply omit this line if GPA is not applicable
    duration: "Aug 2019 – Jun 2023",
    courses: [
      "Software Engineering and OOP",
      "Machine Learning",
      "Data Structures and Algorithms",
      "Computer Networks",
      "Computer Vision",
      "Database Systems",
      "Internet Architecture",
      "Design and Analysis of Algorithms"
    ],
    image: "NUS_logo.png"
  }
];
