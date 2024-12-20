import gsap from "gsap";
import { useEffect } from "react";

function randChar() {
  let c = "abcdefghijklmnopqrstuvwxyz1234567890!@#$^&*()…æ_+-=;[]/~`";
  c = c[Math.floor(Math.random() * c.length)];
  return Math.random() > 0.5 ? c : c.toUpperCase();
}

/**
 * @description Scramble text on hover
 */
export default function ScrambleText() {
  useEffect(() => {
    document.querySelectorAll(".codedText").forEach((t) => {
      const originalText = t.innerHTML;
      const arr1 = t.innerHTML.split("");
      const arr2 = [];
      arr1.forEach(function (char, i) {
        arr2[i] = randChar();
      }); // fill arr2 with random characters
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
            delay: 0.1,
            onUpdate: () => {
              const p = Math.floor(tl.progress() * arr1.length); // whole number from 0 - text length
              if (step !== p) {
                // throttle the change of random characters
                step = p;
                arr1.forEach(function (char, i) {
                  arr2[i] = randChar();
                });
                let pt1 = arr1.join("").substring(p, 0);
                let pt2 = arr2.join("").substring(arr2.length - p, 0);
                if (t.classList.contains("fromRight")) {
                  pt1 = arr2.join("").substring(arr2.length - p, 0);
                  pt2 = arr1.join("").substring(arr1.length - p);
                }
                t.innerHTML = pt1 + pt2; // update text
              }
            },
          },
        );
        t.innerHTML = originalText;
      };
    });
  });
}
