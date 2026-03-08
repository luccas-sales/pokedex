'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,
        effects: true,
        normalizeScroll: true,
      });
    },
    { scope: containerRef },
  );

  return (
    <div id='smooth-wrapper' ref={containerRef}>
      <div id='smooth-content'>{children}</div>
    </div>
  );
}
