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
          Hi there! I'm Nischal Dahal, currently pursuing a bachelor's degree in
          computer application. I'm a highly motivated individual with a deep
          passion for programming and technology. I have experience working with
          JavaScript frameworks and libraries, showcased on my personal GitHub
          profile. Programming, for me, is an art form, and I'm always eager to
          learn and explore in this field.
        </p>
        <br></br>
        <p className="text-xl mt-10">
          Besides programming, I also enjoy writing poetry and stories, and I
          have a keen interest in literature. I am the Co-Founder of Samarpan
          Youth Initiative. Currently, I serve as the Charter President of
          Samarpan Youth Initiative, a college club led by students like myself.
          I'm open to new opportunities and excited to see where my programming
          passion takes me next.
        </p>
      </div>
    </div>
  );
};

export default About;
