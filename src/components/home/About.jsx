"use client";

// function About() {
//   return (
//     <div
//       className="inset-0  h-[100vh] flex items-center justify-evenly w-full"
//       style={{ background: "#0D0C0C" }}
//     >
//       <div className="w-1/2 p-8 flex flex-col justify-center items-center">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1200 300"
//           width="100%"
//           height="auto"
//           fill="none"
//         >
//           <rect width="1200" height="300" fill="#0D0C0C" />
//           <text
//             x="50%"
//             y="50%"
//             textAnchor="middle"
//             dominantBaseline="middle"
//             fill="lime"
//             fontSize="72"
//             fontFamily="Arial, Helvetica, sans-serif"
//             fontWeight="bold"
//             text-shadow="0 0 8px lime, 0 0 15px lime"
//           >
//             About Us
//           </text>
//           <g stroke="lime" strokeWidth="2">
//             <line x1="200" y1="150" x2="400" y2="150" strokeDasharray="5, 5" />
//             <line x1="800" y1="150" x2="1000" y2="150" strokeDasharray="5, 5" />
//             <circle cx="200" cy="150" r="5" fill="lime" />
//             <circle cx="400" cy="150" r="5" fill="lime" />
//             <circle cx="800" cy="150" r="5" fill="lime" />
//             <circle cx="1000" cy="150" r="5" fill="lime" />
//           </g>
//         </svg>

//         <p
//           className="text-gray-700 text-lg leading-relaxed w-4/5"
//           style={{ color: "#BFF205" }}
//         >
//           Witnessing over 20,000 students from across India, Saturnalia is an
//           extravagant festival featuring exceptional technical and cultural
//           events. With the theme{" "}
//           <span className="font-bold italic">"Beyond Boundaries,"</span> TIET's
//           Annual Techno-Cultural Fest embodies the spirit of exploration,
//           innovation, and diversity, leaving a lasting impact on all
//           participants. Lorem ipsum, dolor sit amet consectetur adipisicing
//           elit. Quas aperiam porro numquam necessitatibus dolor reprehenderit
//           fuga vitae accusamus quos! Pariatur fuga repellendus enim debitis unde
//           dolor quas officiis dolorum quae.
//         </p>
//         <Button>Go to Home Page</Button>
//       </div>

//       <div className="w-1/2 flex items-center justify-center p-4">
//         <div className="rounded-lg p-4">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="584"
//             height="80"
//             viewBox="0 0 584 70"
//             fill="none"
//           >
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M99.2707 14.8496V53.9196H114.343V42.7776H153.607V27.8016H114.343V15.7056H163.111V0.729589H114.421V14.8496H99.2707ZM568.421 0.729589H567.972L544.644 28.6656L521.22 0.729589H520.421V23.8496H505.86V69.8496H520.74V23.5776L544.644 51.8976L568.421 23.518V0.729589ZM568.452 23.8496V69.8496H583.428V0.729589H583.421V23.8496H568.452ZM301.421 0.729589H261.407C258.847 0.729589 256.479 1.36959 254.303 2.64959C252.127 3.92959 250.399 5.65759 249.119 7.83359C247.839 9.94559 247.199 12.3136 247.199 14.9376V54.8496H261.421V69.8496H302.111C304.671 69.8496 307.007 69.2096 309.119 67.9296C311.295 66.6496 313.023 64.9216 314.303 62.7456C315.647 60.5696 316.319 58.2016 316.319 55.6416V15.8496H301.421V0.729589ZM326.891 54.8496V15.8496H341.421V0.729589H395.819V15.7056H344.939C343.915 15.7056 343.115 15.9616 342.539 16.4736C342.027 16.9856 341.771 17.7856 341.771 18.8736V51.7056C341.771 52.7296 342.027 53.5296 342.539 54.1056C343.115 54.6176 343.915 54.8736 344.939 54.8736H395.819V69.8496H341.421V54.8496H326.891ZM40.8135 69.8496L0.781494 0.729589H18.0615L47.0535 50.9376L76.0455 0.729589H93.2295L53.1975 69.8496H40.8135ZM114.421 69.8496V54.8736H163.111V69.8496H114.421ZM172.675 54.8496V0.633591H187.555V54.8736H241.795V69.8496H187.421V54.8496H172.675ZM262.079 54.8736H301.247V15.7056H262.079V54.8736ZM403.429 69.8496V0.729589H418.117V69.8496H403.429ZM441.048 54.8496V0.729589H426.168V54.8496H441.048ZM480.421 53.8496H495.288V0.729589H480.216V54.8736H441.421V69.8496H480.421V53.8496Z"
//               fill="#E2F6C2"
//             />
//             <path
//               d="M38.17 65.331L55.3132 66.2046L53.2166 69.9196H40.8561L38.17 65.331Z"
//               fill="#ADF43A"
//             />
//             <path
//               d="M47.0055 50.6778L55.2695 66.2264L38.2145 65.37L47.0055 50.6778Z"
//               fill="#ADF43A"
//             />
//             <path
//               d="M46.7969 52.5461L54.1248 66.0401L46.7969 61.3211L39.3092 65.2055L46.7969 52.5461Z"
//               fill="#4A6919"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default About;

import React, { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("version");

  const tabs = [
    { id: "version", label: "Version" },
    { id: "velocium", label: "Velocium" },
  ];

  return (
    <div className="min-h-screen bg-[#171616] text-gray-300 flex flex-col w-4/5 mx-auto border border-[#171616] rounded-xl">
      {/* Header */}
      <header className="py-4 bg-[#171616] shadow-md border border-[#171616] rounded-md">
        <h1 className="text-center text-3xl font-bold text-[#C6FF00]">
          Version 2025
        </h1>
      </header>

      {/* Tabs */}
      <div className="flex justify-between border-b border-[#171616]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-grow py-2 text-lg font-semibold text-center ${
              activeTab === tab.id
                ? "border-b-4 border-[#d4ff41] text-white bg-[#171616]"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <main className="flex-grow p-6 bg-[#171616]">
        {activeTab === "version" && (
          <div>
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg">
              Embarking on its 31st edition, Version 2025, the annual All India
              MCA meet hosted by the students of NIT Trichy, stands as the
              pinnacle event for MCA students nationwide. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Delectus nam culpa placeat
              dolorem, error fugit blanditiis animi quis! Molestiae qui maxime
              ipsa magnam, maiores ullam fugiat sapiente illum! Ratione, nisi.
            </p>
          </div>
        )}
        {activeTab === "velocium" && (
          <div>
            <h2 className="text-4xl font-bold mb-4">Events</h2>
            <p className="text-lg">
              Join us for exciting coding challenges, hackathons, and workshops
              with industry experts! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Enim error, fuga quibusdam facilis provident
              nesciunt, beatae necessitatibus consequatur placeat officiis
              cupiditate rem, consectetur iure ratione consequuntur corporis
              facere similique pariatur.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#0] py-4 text-center fixed bottom-0 left-0 w-full">
        <p className="text-sm">
          Made With Love 💖 By Version Web Team | © 2025 Version
        </p>
      </footer>
    </div>
  );
}
