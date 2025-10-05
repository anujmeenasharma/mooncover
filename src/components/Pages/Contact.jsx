import React, { useState } from 'react';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import emailjs from '@emailjs/browser';
gsap.registerPlugin(ScrollTrigger)

import { useRef } from 'react';

export default function Contact({ navigationOverlayRef }) {
  const contactRef = useRef(null);
  const mainHeadingRef = useRef(null);
  const mainHeadingStaggerRef = useRef(null);
  const foundersHeadingRef = useRef(null);
  const foundersHeadingStaggerRef = useRef(null);
  const foundersParaRef = useRef(null);
  const foundersParaStaggerRef = useRef(null);
  const partnersHeadingRef = useRef(null);
  const partnersHeadingStaggerRef = useRef(null);
  const partnersParaRef = useRef(null);
  const partnersParaStaggerRef = useRef(null);
  const footerTextRef = useRef(null);
  const footerTextStaggerRef = useRef(null);
  const formRef = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init("T4qWu19B5Yg6alfHl"); // Replace with your actual public key
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");


    // await emailjs.sendForm(
    //   "service_ip70kvb", // Service ID
    //   "template_4t4qc8o", // Template ID
    //   formRef.current,
    //   "T4qWu19B5Yg6alfHl" // Public Key
    // );

    try {
      await emailjs.sendForm(
        "service_jf1ca2e", // Service ID
        "template_2l8qzrc", // Template ID
        formRef.current,
        "Vkcxci6tbgYH4M58I" // Public Key
      );

      setSubmitStatus("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("Error sending email:", error.text || error);
      setSubmitStatus("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(""), 5000);
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = "black";
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
    const bgStartPoint = isMobile ? "top 60%" : (isTablet ? "top 55%" : "top 70%");
    const bgEndPoint = isMobile ? "bottom 40%" : (isTablet ? "bottom 45%" : "bottom 30%");

    const bgTrigger = ScrollTrigger.create({
      trigger: contactRef.current,
      start: bgStartPoint,
      end: bgEndPoint,
      onEnter: () => {
        gsap.to(document.body, {
          duration: 1,
          backgroundColor: "#fff",
          ease: "power2.inOut",
        });
      },
      onLeave: () => {
        gsap.to(document.body, {
          duration: 1,
          backgroundColor: "black",
          ease: "power2.inOut",
        });
      },
      onEnterBack: () => {
        gsap.to(document.body, {
          duration: 1,
          backgroundColor: "#fff",
          ease: "power2.inOut",
        });
      },
      onLeaveBack: () => {
        gsap.to(document.body, {
          duration: 1,
          backgroundColor: "black",
          ease: "power2.inOut",
        });
      },
    });

    return () => {
      bgTrigger && bgTrigger.kill();
      document.body.style.backgroundColor = "";
    };
  }, []);

  useGSAP(() => {
    // Set initial state for all text elements
    gsap.set([
      mainHeadingStaggerRef.current,
      foundersHeadingStaggerRef.current,
      foundersParaStaggerRef.current,
      partnersHeadingStaggerRef.current,
      partnersParaStaggerRef.current,
      footerTextStaggerRef.current
    ], {
      opacity: 0,
      y: 50,
      transformOrigin: "center center",
      willChange: "transform, opacity"
    });

    // Create timeline for staggered animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 90%",
        end: "bottom 80%",
      }
    });

    // Animate elements in sequence with stagger
    tl.to([
      mainHeadingStaggerRef.current,
      foundersHeadingStaggerRef.current,
      foundersParaStaggerRef.current,
      partnersHeadingStaggerRef.current,
      partnersParaStaggerRef.current,
      footerTextStaggerRef.current
    ], {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      stagger: 0.15
    });
  }, []);

  return (
    <div ref={contactRef} className="min-h-[100vh] flex relative flex-col">
      {/* Main Content - Takes up remaining space */}
      <div className="flex-1 flex px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16 lg:pt-24 pb-8">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-12 w-full h-full">
          {/* Left Column */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex-1">
            <div className='hidden lg:block'>
                <img src='/google.svg' alt='footer' className='w-[1.5vw] h-[1.5vw] object-contain' />
                <p className='text-black/40 w-full'>Great brands start with great conversations. Let's start ours.</p>
              </div>
              <div className="flex sm:flex-row sm:items-center gap-2 sm:gap-2 mb-6 sm:mb-8">
                <h1 ref={mainHeadingRef} className="text-[6vw] sm:text-4xl lg:text-5xl lg:pt-3 pt-1 font-bold text-black telegraf leading-none">
                  <span ref={mainHeadingStaggerRef} className="will-change-transform block">
                    LET'S BUILD TOGETHER{' '}
                  </span>
                </h1>
                <img src="/yellowprove.svg" alt="logo" className="w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 animate-[spin_3s_linear_infinite] object-contain self-start sm:self-center" />
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h2 ref={partnersHeadingRef} className="text-lg sm:text-xl lg:text-2xl pt-1 font-bold telegraf text-black">
                      <span ref={partnersHeadingStaggerRef} className="will-change-transform uppercase block">
                        Ready to Scale Your Story?
                      </span>
                    </h2>
                  </div>
                  <p ref={partnersParaRef} className="text-gray-600 text-xs sm:text-sm w-full sm:w-[90%] lg:w-[80%] leading-relaxed">
                    <span ref={partnersParaStaggerRef} className="will-change-transform text-xs block">
                      Whether you're a founder or brand with a breakthrough product or an investor seeking the next generation of brand building, we're interested in ambitious partnerships.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex-1 flex flex-col justify-center max-w-none lg:max-w-2xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className='flex gap-2'>
                <div className='w-[80%]'>
                  <label className="block text-xs sm:text-sm font-medium text-black mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-[90%] border-0 focus:border-[#828282] focus:outline-none py-2 bg-[#F9F9F9] border-[#828282] border-b-[.5px] text-black placeholder-gray-400 text-sm"
                  />
                </div>
                <div className='w-[80%]'>
                  <label className="block text-xs sm:text-sm font-medium text-black mb-2">COMPANY NAME</label>
                  <input
                    type="text"
                    name="company"
                    className="w-full border-0 focus:border-[#828282] focus:outline-none py-2 bg-[#F9F9F9] border-[#828282] border-b-[.5px] text-black placeholder-gray-400 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-black mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border-0 focus:border-[#828282] focus:outline-none py-2 bg-[#F9F9F9] border-[#828282] border-b-[.5px] text-black placeholder-gray-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-black mb-2">SUBJECT</label>
                <input
                  type="text"
                  name="subject"
                  className="w-full border-0 focus:border-[#828282] focus:outline-none py-2 bg-[#F9F9F9] border-[#828282] border-b-[.5px] text-black placeholder-gray-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-black mb-2">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-2 border-0 focus:border-[#828282] focus:outline-none py-2 bg-[#F9F9F9] border-[#828282] border-b-[.5px] text-black placeholder-gray-400 resize-none text-sm"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Status Message */}
              {submitStatus && (
                <div className={`text-sm p-2 rounded ${submitStatus.includes('successfully')
                  ? 'bg-green-100 text-green-800'
                  : submitStatus.includes('Failed')
                    ? 'bg-red-100 text-red-800'
                    : 'bg-yellow-100 text-yellow-800'
                  }`}>
                  {submitStatus}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`font-medium py-2 sm:py-1 px-12 sm:px-16 text-xs sm:text-sm transition-colors duration-200 ${isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed text-gray-600'
                  : 'bg-lime-400 hover:bg-lime-500 text-black'
                  }`}
              >
                {isSubmitting ? 'SENDING...' : 'SEND'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer - Fixed at bottom */}
      <div>
        <div className="pt-6 sm:pt-8">
          <div className="flex sm:px-6 lg:px-10 px-4 flex-col w-full sm:flex-row sm:justify-between gap-4 sm:gap-8 lg:gap-10">
            {/* Logo and Tagline */}
            <div className="sm:flex-1 py-5 w-full">
              <div
                ref={footerTextRef}
                className="space-y-1 text-gray-500 flex flex-col lg:flex-row lg:items-center gap-5"
              >
                <img
                  src="footer.svg"
                  alt="footer"
                  className="w-[28vw] h-[7vw] object-contain lg:w-[12vw] lg:h-[5vw] max-w-[180px] max-h-[40px]"
                />
                <span
                  ref={footerTextStaggerRef}
                  className="will-change-transform block pb-3"
                >
                  <p className="text-xs sm:text-base lg:text-sm whitespace-nowrap lg:leading-none">
                    Built For Permanence.
                  </p>
                  <p className="text-xs sm:text-base lg:text-sm lg:leading-none whitespace-nowrap">
                    Designed To Resonate. Ready To Scale.
                  </p>
                </span>
              </div>
            </div>

            {/* Links Section */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8">
              {/* Company Links */}
              <div>
                <h3 className="font-bold text-base mb-1 telegraf lg:mb-2 text-black lg:text-xs">
                  COMPANY
                </h3>
                <div className="flex gap-1">
                  <a
                    href="#"
                    className="block text-gray-400 text-xs sm:text-xs"
                  >
                    HOW IT WORKS
                  </a>
                  <a
                    href="#"
                    className="block text-gray-400 text-xs sm:text-xs"
                  >
                    OUR BELIEFS
                  </a>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-bold text-base mb-1 telegraf lg:mb-2 text-black lg:text-xs">
                  GET IN TOUCH
                </h3>
                <a
                  href="mailto:CONNECT@MOONSHOTSTUDIO.AI"
                  className="text-gray-400 text-xs sm:text-xs block mb-2 break-all"
                  style={{ wordBreak: "break-all" }}
                >
                  CONNECT@MOONSHOTSTUDIO.AI
                </a>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-bold text-base mb-1 telegraf lg:mb-2 text-black lg:text-xs">
                  OUR SOCIALS
                </h3>
                <div className="flex text-black pb-2 lg:pb-0 space-x-2 sm:space-x-3">
                  <img
                    src="/ig.svg"
                    alt="instagram"
                    className="w-5 h-5 sm:w-4 sm:h-4 text-gray-400 cursor-pointer"
                  />
                  <span className="text-xs">|</span>
                  <img
                    src="/in.svg"
                    alt="linkedin"
                    className="w-5 h-5 sm:w-4 sm:h-4 text-gray-400 cursor-pointer"
                  />
                  <span className="text-xs">|</span>
                  <img
                    src="/x.svg"
                    alt="twitter"
                    className="w-5 h-5 sm:w-4 sm:h-4 text-gray-400 cursor-pointer"
                  />
                  <span className="text-xs">|</span>
                  <img
                    src="/fb.svg"
                    alt="facebook"
                    className="w-5 h-5 sm:w-4 sm:h-4 text-gray-400 cursor-pointer"
                  />
                  <span className="text-xs">|</span>
                  <img
                    src="/yt.svg"
                    alt="youtube"
                    className="w-5 h-5 sm:w-4 sm:h-4 text-gray-400 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="lg:py-3 py-4 lg:px-10 px-4 bg-[#F3F3F3] flex sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 text-[11px] flex-col-reverse lg:flex-row text-gray-400 text-center lg:text-left">
            <p className="truncate">
              Copyright © 2024. All rights reserved. Moonshot Studios
            </p>
            <div className="flex space-x-2 lg:justify-start justify-center">
              <a href="#" className="whitespace-nowrap">
                Terms & conditions
              </a>
              <span>|</span>
              <a href="#" className="whitespace-nowrap">
                Privacy policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
