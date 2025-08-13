// // components/CustomCursor.tsx
// 'use client'; // if using app router

// import { useEffect } from 'react';

// export default function CustomCursor() {
//   useEffect(() => {
//     const cursor = document.getElementById('custom-cursor');

//     const moveCursor = (e: MouseEvent) => {
//       if (cursor) {
//         cursor.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
//       }
//     };

//     window.addEventListener('mousemove', moveCursor);
//     return () => window.removeEventListener('mousemove', moveCursor);
//   }, []);

//   return (
//     <div
//       id="custom-cursor"
//       className="pointer-events-none fixed top-0 left-0 w-6 h-6 bg-gradient-to-l from-red-900/25 to-black rounded-full shadow-xl z-[9999] transition-transform duration-100 ease-out"
//     />
//   );
// }

'use client';
import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const light = document.getElementById('cursor-light');

    const moveLight = (e: MouseEvent) => {
      if (light) {
        light.style.transform = `translate(${e.clientX - 100}px, ${e.clientY - 100}px)`; // offset based on size
      }
    };

    window.addEventListener('mousemove', moveLight);
    return () => window.removeEventListener('mousemove', moveLight);
  }, []);

  return (
    <div
      id="cursor-light"
      className="pointer-events-none fixed top-0 left-0 w-[150px] h-[150px] rounded-full bg-yellow-600 blur-3xl z-40 mix-blend-soft-light transition-transform duration-200 ease-out"
    />
  );
}
