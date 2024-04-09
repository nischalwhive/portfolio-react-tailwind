import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea dolorum
          ullam ab odit, accusamus error molestias beatae perspiciatis
          dignissimos placeat quasi modi non nulla! Quidem hic consequatur eum
          cum voluptatibus.
        </p>
        <br></br>
        <p className="text-xl mt-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, culpa
          ullam nihil commodi repellendus veniam ea, doloremque similique
          asperiores quod illum repudiandae laboriosam facilis hic consequatur
          nostrum magnam facere libero! Text messaging, or texting, is the act
          of composing and sending electronic messages, typically consisting of
          alphabetic and
        </p>
      </div>
    </div>
  );
};

export default About;
