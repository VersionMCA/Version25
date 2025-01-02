//Event Schema
// {
//   id: "Event Id (from db)",
//   name: "Event Name(from db)",
//   description : "Short 2 line description"
//   date: "Event Date as 21st March 2025",
//   venue: "Event Venue",
//   image: "path to poster image",
//   type: "Individual/Team",
//   background_image: "path_to_background_image",
//   thumbnail_image: "path to thumbnail_image",
//   details: [
//     {
//       title : "Description"
//       content : "Event Description in markdown format  ",
//     },
//     {
//       title : "Judging Criteria"
//       content : "Event Judging Criteria in markdown format  ",
//     },
//     {
//       title : "Rules"
//       content : "Event Rules in markdown format  ",
//     },
//     {
//       title : "Contact"
//       content : "Event Contact in markdown format  ",
//     },
//   ],
// },
const events = [
  {
    id: "E001",
    name: "CodeSprint",
    description: "Test your coding skills in this exciting hackathon.",
    date: "21st February 2025",
    venue: "Auditorium Hall A",
    image: "/public/event_images/cryptic-min.jpg",
    type: "Individual",
    background_image: "/event_images/cryptic-min.jpg",
    thumbnail_image: "/public/event_images/cryptic-min.jpg",
    details: [
      {
        title: "Description",
        content: `
### Event Overview  
CodeSprint is a premier coding competition designed for individuals passionate about problem-solving. This event provides challenging problems that will test your coding skills, logical reasoning, and efficiency.

- **Participants:** Individual  
- **Duration:** 3 Hours  
- **Level:** Intermediate to Advanced  
        `,
      },
      {
        title: "Judging Criteria",
        content: `
### How You Will Be Judged  
1. **Correctness:** Accuracy of the solution.  
2. **Efficiency:** Time and space complexity of the code.  
3. **Creativity:** Innovative approaches to solving problems.  

The participant with the highest score and least runtime wins.
        `,
      },
      {
        title: "Rules",
        content: `
### Rules to Follow  
- No external help or pre-written code is allowed.  
- Internet access is restricted during the event.  
- Solutions must be submitted within the allotted time.  
        `,
      },
      {
        title: "Contact",
        content: `
### Need Assistance?  
Email: **codesprint@versionfest.com**  
Phone: **+91 9876543210**  
Reach out for queries regarding registration or problem formats.
        `,
      },
    ],
  },
  {
    id: "E002",
    name: "DesignIt",
    description: "Showcase your UI/UX skills in this design competition.",
    date: "22nd February 2025",
    venue: "Lab 304",
    image: "/images/designit_poster.jpg",
    type: "Team",
    background_image: "/event_images/coding.jpg",
    thumbnail_image: "/images/designit_thumb.jpg",
    details: [
      {
        title: "Description",
        content: `
  ### Event Overview
  DesignIt challenges teams to design innovative UI/UX solutions for real-world applications. Teams will receive a problem statement and must develop wireframes, prototypes, and a complete user journey.

  - **Participants:** Teams of 2-4
  - **Duration:** 4 Hours
          `,
      },
      {
        title: "Judging Criteria",
        content: `
  ### Judging Parameters
  1. **Creativity:** How unique and visually appealing the design is.
  2. **Usability:** User-friendliness and accessibility of the design.
  3. **Execution:** Completeness and presentation quality.
          `,
      },
      {
        title: "Rules",
        content: `
  ### Rules
  - Teams must use design tools provided (e.g., Figma, Adobe XD).
  - Designs must be original and completed during the event.
  - Use of pre-made templates is prohibited.
          `,
      },
      {
        title: "Contact",
        content: `
  ### Need Assistance?
  Email: **designit@versionfest.com**
  Phone: **+91 8765432109**
  Connect for inquiries about tools or team requirements.
          `,
      },
    ],
  },
  {
    id: "E003",
    name: "Data Dive",
    description: "Dive deep into datasets and uncover insights.",
    date: "23rd February 2025",
    venue: "Computer Lab B",
    image: "/images/datadive_poster.jpg",
    type: "Individual",
    background_image: "/event_images/coding2.jpg",
    thumbnail_image: "/images/datadive_thumb.jpg",
    details: [
      {
        title: "Description",
        content: `
  ### Event Overview
  In Data Dive, participants will analyze complex datasets and extract meaningful insights. Prepare reports, visualizations, and actionable recommendations based on the data provided.

  - **Participants:** Individual
  - **Duration:** 5 Hours
  - **Level:** Beginner to Intermediate
          `,
      },
      {
        title: "Judging Criteria",
        content: `
  ### Judging Parameters
  1. **Accuracy:** Correct interpretation of data.
  2. **Visualization:** Clarity and creativity in presenting insights.
  3. **Impact:** Practicality of the recommendations.
          `,
      },
      {
        title: "Rules",
        content: `
  ### Rules
  - Only provided datasets can be used.
  - Participants must use tools like Python, R, or Excel.
  - Collaboration with other participants is not allowed.
          `,
      },
      {
        title: "Contact",
        content: `
  ### Need Assistance?
  Email: **datadive@versionfest.com**
  Phone: **+91 7654321098**
  Reach out for dataset formats or tool usage guidelines.
          `,
      },
    ],
  },
  {
    id: "E004",
    name: "Debugathon",
    description: "Find and fix the bugs in record time.",
    date: "21st February 2025",
    venue: "Lab 205",
    image: "/images/debugathon_poster.jpg",
    type: "Individual",
    background_image: "/event_images/coding.jpg",
    thumbnail_image: "/images/debugathon_thumb.jpg",
    details: [
      {
        title: "Description",
        content: `
  ### Event Overview
  Debugathon tests your debugging skills under pressure. Participants will be provided with buggy code and must identify and fix the errors within the shortest time.

  - **Participants:** Individual
  - **Duration:** 2 Hours
          `,
      },
      {
        title: "Judging Criteria",
        content: `
  ### Judging Parameters
  1. **Speed:** Time taken to debug.
  2. **Accuracy:** Number of bugs fixed correctly.
          `,
      },
      {
        title: "Rules",
        content: `
  ### Rules
  - Only standard IDEs will be provided.
  - Participants cannot use online tools or references.
          `,
      },
      {
        title: "Contact",
        content: `
  ### Need Assistance?
  Email: **debugathon@versionfest.com**
  Phone: **+91 6543210987**
  Reach out for sample bug formats or IDE compatibility.
          `,
      },
    ],
  },
  {
    id: "E005",
    name: "Hack The Future",
    description:
      "An intensive 24-hour hackathon to innovate and create solutions.",
    date: "24th February 2025",
    venue: "Innovation Hub",
    image: "/event_images/coding.jpg",
    type: "Team",
    background_image: "/event_images/coding.jpg",
    thumbnail_image: "/public/event_images/coding.jpg",
    details: [
      {
        title: "Description",
        content: `
  ### Event Overview
  Hack The Future brings together innovators to create cutting-edge solutions for modern challenges. Work in teams to design, develop, and pitch your ideas.

  - **Participants:** Teams of 3-5
  - **Duration:** 24 Hours
        `,
      },
      {
        title: "Judging Criteria",
        content: `
  ### Judging Parameters
  1. **Innovation:** Creativity and uniqueness of the idea.
  2. **Feasibility:** Practicality and implementation potential.
  3. **Presentation:** Clarity and persuasiveness of the pitch.
        `,
      },
      {
        title: "Rules",
        content: `
  ### Rules
  - Teams must work on provided problem statements.
  - Solutions must be built during the event duration.
        `,
      },
      {
        title: "Contact",
        content: `
  ### Need Assistance?
  Email: **hackthefuture@versionfest.com**
  Phone: **+91 5432109876**
  Reach out for queries regarding team registration.
        `,
      },
    ],
  },
  {
    id: "E006",
    name: "Quiz Quest",
    description: "Test your general knowledge in this fun-filled quiz.",
    date: "25th February 2025",
    venue: "Seminar Hall",
    image: "/event_images/coding2.jpg",
    type: "Individual",
    background_image: "/event_images/coding2.jpg",
    thumbnail_image: "/public/event_images/coding1.jpg",
    details: [
      {
        title: "Description",
        content: `
  ### Event Overview
  Quiz Quest is an engaging trivia challenge covering a wide range of topics, including science, history, and pop culture.

  - **Participants:** Individual
  - **Duration:** 1.5 Hours
        `,
      },
      {
        title: "Judging Criteria",
        content: `
  ### Judging Parameters
  1. **Accuracy:** Number of correct answers.
  2. **Speed:** Time taken to answer each question.
        `,
      },
      {
        title: "Rules",
        content: `
  ### Rules
  - Participants must answer without external help.
  - The quiz will be conducted in multiple rounds.
        `,
      },
      {
        title: "Contact",
        content: `
  ### Need Assistance?
  Email: **quizquest@versionfest.com**
  Phone: **+91 4321098765**
  Reach out for question formats or quiz structure.
        `,
      },
    ],
  },
  {
    id: "E007",
    name: "RoboRace",
    description: "Race your robots in this adrenaline-filled event.",
    date: "26th February 2025",
    venue: "Outdoor Arena",
    image: "/event_images/coding.jpg",
    type: "Team",
    background_image: "/event_images/coding.jpg",
    thumbnail_image: "/public/event_images/coding.jpg",
    details: [
      {
        title: "Description",
        content: `
  ### Event Overview
  RoboRace challenges teams to build and race robots capable of overcoming obstacles.

  - **Participants:** Teams of 2-4
  - **Duration:** 3 Hours
        `,
      },
      {
        title: "Judging Criteria",
        content: `
  ### Judging Parameters
  1. **Speed:** Time taken to complete the course.
  2. **Design:** Robustness and innovation of the robot.
        `,
      },
      {
        title: "Rules",
        content: `
  ### Rules
  - Only self-built robots are allowed.
  - Robots must adhere to specified size and weight constraints.
        `,
      },
      {
        title: "Contact",
        content: `
  ### Need Assistance?
  Email: **roborace@versionfest.com** 
  Phone: **+91 3210987654**
  Reach out for guidelines on robot specifications.
        `,
      },
    ],
  },
];

export default events;
