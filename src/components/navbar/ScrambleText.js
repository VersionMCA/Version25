import gsap from "gsap";
import { useEffect } from "react";

function randChar() {
  const chars = "abcdefghijklmnopqrstuvwxyz1234567890!@#$^&*()…æ_+-=;[]/~`";
  const randomChar = chars[Math.floor(Math.random() * chars.length)];
  return Math.random() > 0.5 ? randomChar : randomChar.toUpperCase();
}

/**
 * @description Scramble text on hover
 */
export default function ScrambleText() {
  useEffect(() => {
    document.querySelectorAll(".codedText").forEach((t) => {
      const originalText = t.innerHTML;
      const arr1 = originalText.split("");
      const arr2 = [...arr1]; // Ensure arr2 is initially the same length as arr1

      // Populate arr2 with random characters initially
      arr2.forEach((_, i) => {
        arr2[i] = randChar();
      });

      t.onpointerover = () => {
        const tl = gsap.timeline();
        let step = 0;

        tl.fromTo(
          t,
          {
            innerHTML: arr2.join(""),
          },
          {
            duration: arr1.length / 20, // duration based on text length
            ease: "power4.in",
            delay: 0.2,
            onUpdate: () => {
              const p = Math.floor(tl.progress() * arr1.length); // whole number from 0 to text length
              if (step !== p) {
                // Update only when progress changes
                step = p;

                // Update arr2 with random characters, maintaining original length
                arr2.forEach((_, i) => {
                  if (i >= p) arr2[i] = randChar(); // Replace characters after the progress index
                });

                let pt1 = arr1.slice(0, p).join(""); // Fixed characters
                let pt2 = arr2.slice(p).join(""); // Random characters

                if (t.classList.contains("fromRight")) {
                  pt1 = arr2.slice(0, arr2.length - p).join(""); // Random characters
                  pt2 = arr1.slice(arr1.length - p).join(""); // Fixed characters
                }

                t.innerHTML = pt1 + pt2; // Update the text
              }
            },
          },
        );
        t.innerHTML = originalText; // Restore original text after animation
      };
    });
  }, []);
}
