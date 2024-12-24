export interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  prize: string;
  rules: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Coding Challenge",
    description: "A 48-hour coding marathon.",
    image: "https://example.com/images/coding-challenge.jpg",
    prize: "$500 Cash Prize",
    rules: "Submit original code by the deadline.",
  },
  {
    id: 2,
    title: "Hackathon 2024",
    description: "Solve real-world problems in 24 hours.",
    image: "https://example.com/images/hackathon.jpg",
    prize: "Tech Gadgets worth $300",
    rules: "Teams must be formed before the event.",
  },
  {
    id: 3,
    title: "Design Sprint",
    description:
      "A collaborative event where participants create a design prototype within 2 days.",
    prize: "$400 Amazon Gift Card",
    rules: "Participants must present their designs at the end of the event.",
    image: "https://example.com/images/design-sprint.jpg",
  },
  {
    id: 4,
    title: "AI Competition",
    description:
      "Build an AI model to solve a specified challenge using any framework.",
    prize: "$1000 for the Best AI Model",
    rules: "Code must be submitted with proper documentation.",
    image: "https://example.com/images/ai-competition.jpg",
  },
  {
    id: 5,
    title: "Startup Pitch",
    description:
      "Pitch your startup idea to a panel of investors in a 5-minute presentation.",
    prize: "Investor Meeting and $2000 Funding",
    rules: "Each pitch must be accompanied by a working demo or prototype.",
    image: "https://example.com/images/startup-pitch.jpg",
  },
  {
    id: 6,
    title: "Photography Contest",
    description:
      "A photography competition showcasing creativity through lenses.",
    prize: "$300 Photography Gear Voucher",
    rules: "Submit up to 3 photos, each in different categories.",
    image: "https://example.com/images/photography-contest.jpg",
  },
  {
    id: 7,
    title: "Virtual Marathon",
    description:
      "A virtual marathon where participants run at their own pace anywhere.",
    prize: "Medals and T-shirts for Winners",
    rules: "Submit a time log and screenshot of the completed distance.",
    image: "https://example.com/images/virtual-marathon.jpg",
  },
  {
    id: 8,
    title: "Music Talent Show",
    description:
      "Show off your musical skills in a live-streamed performance competition.",
    prize: "$500 Music Gear Voucher",
    rules: "Perform for 5 minutes. No pre-recorded music allowed.",
    image: "https://example.com/images/music-talent-show.jpg",
  },
  {
    id: 9,
    title: "Cooking Contest",
    description:
      "Show your culinary creativity by preparing a dish based on the theme provided.",
    prize: "$250 Cooking Class Voucher",
    rules: "Submit a video of the cooking process along with the final dish.",
    image: "https://example.com/images/cooking-contest.jpg",
  },
  {
    id: 10,
    title: "Robotics Tournament",
    description:
      "Build a robot that can complete specific challenges autonomously.",
    prize: "Robotic Kits and Tools Worth $600",
    rules: "Robots must be autonomous with no external control.",
    image: "https://example.com/images/robotics-tournament.jpg",
  },
  {
    id: 11,
    title: "Poetry Slam",
    description:
      "A contest for aspiring poets to perform their original works.",
    prize: "$200 Poetry Book Voucher",
    rules: "Perform up to 3 original poems in 5 minutes.",
    image: "https://example.com/images/poetry-slam.jpg",
  },
  {
    id: 12,
    title: "Video Game Tournament",
    description:
      "Compete in a series of popular video games to become the champion.",
    prize: "$500 Gaming Console",
    rules: "Players must follow the tournament bracket and schedule.",
    image: "https://example.com/images/video-game-tournament.jpg",
  },
];

export default events;
