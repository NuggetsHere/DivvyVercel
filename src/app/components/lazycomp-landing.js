'use client';

import dynamic from 'next/dynamic';

const Testimonials = dynamic(() => import('./Testimonials'), { ssr: false });
const CallToAction = dynamic(() => import('./callToAction'), { ssr: false });
const Features = dynamic(() => import('./Features'), { ssr: false });
const VisitUsOffline = dynamic(() => import('./VistUsOffline'), { ssr: false });
const AccordionDemo = dynamic(() => import('./faq'), { ssr: false });
const SignupFormDemo = dynamic(() => import('./form'), { ssr: false });
const InfiniteMovingCardsDemo = dynamic(() => import('./certifications'), { ssr: false });

export {
  Testimonials,
  CallToAction,
  Features,
  VisitUsOffline,
  AccordionDemo,
  SignupFormDemo,
  InfiniteMovingCardsDemo,
};
