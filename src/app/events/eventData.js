const eventsData = [
  {
    id: "cm5m3znwv0000rzdo7zxtsklp",
    name: "CodeFest",
    description: "A competitive coding event to test your algorithmic skills.",
    date: "21st March 2025",
    venue: "Main Auditorium",
    type: "Individual",
    teamSize: [1],
    image: "/event_images/cryptic-min.jpg",
    background_image: "/event_images/cryptic-min.jpg",
    thumbnail_image: "/event_images/cryptic-min.jpg",
    details: [
      {
        title: "Description",
        content:
          "CodeFest is a challenging programming contest aimed at testing problem-solving and algorithmic abilities. Compete against the best minds and climb the leaderboard.",
      },
      {
        title: "Judging Criteria",
        content:
          "Accuracy of solutions, efficiency of algorithms, and time taken to solve problems.",
      },
      {
        title: "Rules",
        content:
          "1. Each participant will be given a set of problems to solve.\n2. No plagiarism; original code only.\n3. Time limit for each round must be adhered to.",
      },
      {
        title: "Contact",
        content: "John Doe (9876543210)",
      },
    ],
  },
  {
    id: "cm5m3znx20001rzdourekvyz7",
    name: "Hackathon",
    description: "A 24-hour hackathon for building innovative solutions.",
    date: "21st March 2025",
    venue: "Innovation Lab",
    type: "Team",
    teamSize: [2, 4],
    image: "/event_images/cryptic-min.jpg",
    background_image: "/event_images/cryptic-min.jpg",
    thumbnail_image: "/event_images/cryptic-min.jpg",
    details: [
      {
        title: "Description",
        content:
          "A 24-hour adrenaline-pumping hackathon designed for tech enthusiasts. Build innovative solutions, collaborate, and solve real-world problems.",
      },
      {
        title: "Judging Criteria",
        content:
          "Originality, feasibility, technical complexity, and presentation.",
      },
      {
        title: "Rules",
        content:
          "1. Teams must comprise 2-4 members.\n2. All work must be done during the hackathon period.\n3. Use of pre-built templates or solutions is not allowed.",
      },
      {
        title: "Contact",
        content: "Jane Smith (9876543211)",
      },
    ],
  },
  {
    id: "cm5m3znx30002rzdop06ey5yx",
    name: "TechQuiz",
    description: "A quiz event to challenge your tech knowledge.",
    date: "22nd March 2025",
    venue: "Room 101",
    type: "Individual",
    teamSize: [1],
    image: "/event_images/cryptic-min.jpg",
    background_image: "/event_images/cryptic-min.jpg",
    thumbnail_image: "/event_images/cryptic-min.jpg",
    details: [
      {
        title: "Description",
        content:
          "Test your knowledge of the tech world in this exciting quiz event. Challenge yourself across multiple rounds of increasing difficulty.",
      },
      {
        title: "Judging Criteria",
        content: "Accuracy and speed of answers.",
      },
      {
        title: "Rules",
        content:
          "1. Individual participation only.\n2. Use of electronic devices is strictly prohibited.\n3. Decisions by quizmasters will be final.",
      },
      {
        title: "Contact",
        content: "Alice Johnson (9876543212)",
      },
    ],
  },
  {
    id: "cm5m3znx30003rzdou47re9xh",
    name: "DesignSprint",
    description: "A UI/UX design challenge for creative minds.",
    date: "22nd March 2025",
    venue: "Design Studio",
    type: "Team",
    teamSize: [2, 3],
    image: "/event_images/cryptic-min.jpg",
    background_image: "/event_images/cryptic-min.jpg",
    thumbnail_image: "/event_images/cryptic-min.jpg",
    details: [
      {
        title: "Description",
        content:
          "Unleash your creativity in this UI/UX design challenge. Collaborate and present intuitive designs to a panel of judges.",
      },
      {
        title: "Judging Criteria",
        content: "Creativity, usability, and presentation.",
      },
      {
        title: "Rules",
        content:
          "1. Teams must comprise 2-3 members.\n2. Use of pre-built design templates is not allowed.\n3. Designs must be submitted within the time limit.",
      },
      {
        title: "Contact",
        content: "Michael Brown (9876543213)",
      },
    ],
  },
  {
    id: "cm5m3znx40004rzdogqzma9f",
    name: "AI Workshop",
    description: "A hands-on workshop on Artificial Intelligence.",
    date: "23rd March 2025",
    venue: "Seminar Hall",
    type: "Individual",
    teamSize: [1],
    image: "/event_images/cryptic-min.jpg",
    background_image: "/event_images/cryptic-min.jpg",
    thumbnail_image: "/event_images/cryptic-min.jpg",
    details: [
      {
        title: "Description",
        content:
          "Explore the world of Artificial Intelligence in this workshop. Learn from experts and gain hands-on experience with AI tools and frameworks.",
      },
      {
        title: "Judging Criteria",
        content: "Not applicable (workshop event).",
      },
      {
        title: "Rules",
        content:
          "1. Individual participation only.\n2. Bring your own laptop.\n3. Follow the instructions given by the instructor.",
      },
      {
        title: "Contact",
        content: "Emma Wilson (9876543214)",
      },
    ],
  },
  {
    id: "cm5m3znx50005rzdojxio0jc2",
    name: "WebDev Marathon",
    description: "A competition to create stunning web applications.",
    date: "23rd March 2025",
    venue: "Computer Lab",
    type: "Team",
    teamSize: [2, 3],
    image: "/event_images/cryptic-min.jpg",
    background_image: "/event_images/cryptic-min.jpg",
    thumbnail_image: "/event_images/cryptic-min.jpg",
    details: [
      {
        title: "Description",
        content:
          "Show off your web development skills in this exciting competition. Create innovative web apps and impress the judges.",
      },
      {
        title: "Judging Criteria",
        content: "Design, functionality, and creativity.",
      },
      {
        title: "Rules",
        content:
          "1. Teams must comprise 2-3 members.\n2. All code must be written during the event.\n3. Use of pre-built libraries is allowed but must be disclosed.",
      },
      {
        title: "Contact",
        content: "William Davis (9876543215)",
      },
    ],
  },
  {
    id: "cm5m3znx60006rzdoqnco0b91",
    name: "DataDive",
    description: "A data analysis event to showcase your analytical skills.",
    date: "24th March 2025",
    venue: "Analytics Lab",
    type: "Individual",
    teamSize: [1],
    image: "/event_images/cryptic-min.jpg",
    background_image: "/event_images/cryptic-min.jpg",
    thumbnail_image: "/event_images/cryptic-min.jpg",
    details: [
      {
        title: "Description",
        content:
          "Dive into data and uncover insights in this data analysis challenge. Work on datasets and present your findings.",
      },
      {
        title: "Judging Criteria",
        content: "Accuracy of insights, methodology, and presentation.",
      },
      {
        title: "Rules",
        content:
          "1. Individual participation only.\n2. Use of open-source tools is allowed.\n3. Datasets will be provided during the event.",
      },
      {
        title: "Contact",
        content: "Sophia Martinez (9876543216)",
      },
    ],
  },
  {
    id: "cm5m3znx60007rzdogkbqtrl",
    name: "CyberStrike",
    description: "A cybersecurity event to defend against attacks.",
    date: "24th March 2025",
    venue: "Cyber Lab",
    type: "Team",
    teamSize: [2, 4],
    image: "/event_images/cryptic-min.jpg",
    background_image: "/event_images/cryptic-min.jpg",
    thumbnail_image: "/event_images/cryptic-min.jpg",
    details: [
      {
        title: "Description",
        content:
          "Test your cybersecurity skills in this defense challenge. Protect systems and data from simulated cyberattacks.",
      },
      {
        title: "Judging Criteria",
        content: "Effectiveness of defense, response time, and innovation.",
      },
      {
        title: "Rules",
        content:
          "1. Teams must comprise 2-4 members.\n2. Attacks and defenses must stay within the simulated environment.\n3. No unauthorized tools or methods.",
      },
      {
        title: "Contact",
        content: "Liam Taylor (9876543217)",
      },
    ],
  },
];

export default eventsData;
