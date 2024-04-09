import React from "react";
import HeroImage from "../assets/heroimage.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b via-black from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            Nischal , a Front-end Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm Nischal Dahal, currently pursuing a bachelor's degree in
            computer application. I'm a highly motivated individual with a deep
            passion for programming and technology. I have experience working
            with JavaScript libraries, showcased on my personal GitHub profile.
            I'm open to new opportunities and excited to see where my
            programming passion takes me next. I'm always eager to learn and
            explore in this field.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my-profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
