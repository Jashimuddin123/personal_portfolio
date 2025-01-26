import React, { useEffect } from "react";
import anime from "animejs";
import "./Banner.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import bannerImage from "../assets/images/banner_profile/myProfile2.jpg"
import skilBadge from "../assets/images/ExperienceShape.png"
import figma from "../assets/images/figmaLogo.png"
import sketch from "../assets/images/Sketch.png"
const Banner = () => {
  useEffect(() => {
    // Wrap every letter in a span
    const textWrapper = document.querySelector('.ml11 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
      .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700
      })
      .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
      })
      .add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i + 1)
      })
      .add({
        targets: '.ml11',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  }, []);

  return (
    <div className="bg-[#fff3ea] flex w-full min-h-screen items-center justify-center">
     
      {/* text content */}
      <div className="flex-1">
<p className="text-3xl font-semibold text-start ml-10">I'm glad you're here.</p>
<h1 className="text-5xl font-bold">Hi  <span>👋 </span> I’m Beery Solving</h1>
        {/* moving text content here */}
 <div className="flex items-center gap-4 ml-10">
 <p className="text-orange-500 font-bold text-6xl">modern</p>
 <h1 className="ml11">
   
        <span className="text-wrapper">
          <span className="line line1"></span>
          <span className="letters text-orange-500">solutions</span>
        </span>
      </h1>
 </div>
 <p className="ml-10 text-start">I'm creative UX/UI Designer based in Canada, and I'm very passionate and dedicated to my work. Solving modern problem through design. I'm creative UX/UI Designer based in Canada, and I'm very passionate and dedicated to my work. Solving modern problem through design.</p>
{/* icons div here */}
<h1 className="text-2xl  text-start ml-10 py-4">Find With Me</h1>
<div className="flex space-x-4  ml-10">
 
      {/* Facebook Button */}
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon flex items-center justify-center w-12 h-12  bg-orange-500 text-white hover:bg-opacity-80 transition-all"
      >
        <FaFacebook className="text-2xl" />
      </a>

      {/* LinkedIn Button */}
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon flex items-center justify-center w-12 h-12  bg-orange-500 text-white hover:bg-opacity-80 transition-all"
      >
        <FaLinkedin className="text-2xl" />
      </a>

      {/* GitHub Button */}
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon flex items-center justify-center w-12 h-12  bg-orange-500 text-white hover:bg-opacity-80 transition-all"
      >
        <FaGithub className="text-2xl" />
      </a>
    </div>

      </div>
      <div className="flex-1 relative">
  {/* Skill Badge Image positioned at top-right */}
  <img
    src={skilBadge}
    alt="Skill Badge"
    className="absolute top-7 right-0 w-48 h-24"
  />

  {/* Sketch Image positioned below */}
  <img
    src={sketch}
    alt="Sketch"
    className="absolute top-56  bg-amber-50 p-4 rounded-full w-20 h-20"
  />

  {/* Figma Image positioned at the right */}
  <img
    src={figma}
    alt="Figma"
    className="absolute top-96 right-10 bg-white w-16 h-20"
  />

  {/* Main Banner Image */}
  <img
    src={bannerImage}
    alt="Banner"
    className="w-full h-auto object-cover"
  />
</div>


    </div>
  );
};

export default Banner;
