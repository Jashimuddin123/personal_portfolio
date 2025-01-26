import React, { useEffect, useRef, useState } from "react";
import bannerImage from "../assets/images/banner_profile/myProfile2.jpg";
import dot from "../assets/images/orangeDot.png";

const AboutMe = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const animateCount = (element, target) => {
    let start = 0;
    const duration = 2000; // Animation duration in ms
    const stepTime = Math.abs(Math.floor(duration / target));
    const increment = target > 0 ? 1 : -1;

    const timer = setInterval(() => {
      start += increment;
      element.textContent = `${start}+`;
      if (start === target) clearInterval(timer);
    }, stepTime);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Select all counters and animate
          const counters = sectionRef.current.querySelectorAll(".count");
          const targets = [42, 15, 14]; // Numbers to count to

          counters.forEach((counter, index) => {
            animateCount(counter, targets[index]);
          });
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col md:flex-row gap-12 items-center px-6 md:px-16 lg:px-32 py-12"
    >
      {/* Image Section */}
      <div className="flex-1">
        <img
          src={bannerImage}
          alt="Banner"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1">
        {/* Title Section */}
        <div className="flex gap-2 items-center mb-4">
          <img src={dot} alt="Orange Dot" className="w-6 h-6" />
          <p className="text-lg text-orange-500 font-semibold">About Me</p>
        </div>
        <h1 className="text-3xl text-start md:text-4xl font-bold leading-snug text-gray-800 mb-4">
          I design that helps users <br /> interact more easily
        </h1>
        <p className="text-gray-600 text-start text-lg mb-6 leading-relaxed">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
          <br />
          <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>

        {/* Stats Section */}
        <div className="flex gap-12 mb-10">
          <div>
            <h1 className="count text-start font-bold text-orange-500 text-3xl">
              0+
            </h1>
            <p className="text-xl font-bold text-start text-gray-800">
              Complete Projects
            </p>
          </div>
          <div>
            <h1 className="count text-start font-bold text-orange-500 text-3xl">
              0+
            </h1>
            <p className="text-xl text-start font-bold text-gray-800">
              Worldwide Clients
            </p>
          </div>
          <div>
            <h1 className="count text-start font-bold text-orange-500 text-3xl">
              0+
            </h1>
            <p className="text-xl text-start font-bold text-gray-800">
              Client Satisfied
            </p>
          </div>
        </div>

        {/* Download CV Button */}
        <div className="navbar-start">
          <a className="relative inline-block px-6 py-3 text-2xl font-semibold text-white bg-orange-500 overflow-hidden group">
            <span className="absolute inset-0 bg-black translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            <span className="relative group-hover:translate-x-2 transition-transform duration-300 ease-in-out">
              Download CV
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
