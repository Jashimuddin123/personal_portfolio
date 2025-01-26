import bannerImage from "../assets/images/banner_profile/myProfile2.jpg";
import dot from "../assets/images/orangeDot.png";

const AboutMe = () => {
  return (
    <div className="flex gap-12">
      {/*images content  */}
      <div className="flex-1">
        <img src={bannerImage} alt="" />
      </div>
      {/* text content */}
      <div className="flex-1">
        {/* title here */}
        <div className="flex gap-2 mt-6">
          <img src={dot} alt="" />
          <p>Aboute Me</p>
        </div>
        <h1 className="text-start text-4xl font-bold">
          I design that help user <br /> more easily to use
        </h1>
        <p className="text-start text-gray-600 text-lg my-4">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. <br />  <br />Contrary to popular belief, Lorem Ipsum is not
          simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old.
        </p>

        {/* automatic text content */}
        <div className="flex">
            <div>
                <h1 className="text-start">42+</h1>
                <p>Complete Project</p>
            </div>
            <div>
                <h1>15+</h1>
                <p>Worldwide clients</p>
            </div>
            <div>
                <h1>14+</h1>
                <p>Client Satisfied</p>
            </div>
        </div>
        <div className="navbar-end">
  <a className="btn p-6 bg-orange-500 text-white text-2xl hover:bg-black">
 Download CV
  </a>
</div>
      </div>
    </div>
  );
};

export default AboutMe;
