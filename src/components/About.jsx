import Profile_Photo from './../assets/Profile.JPG';

const About = () => {
  return (
    <div id="about" className="min-h-screen flex flex-col items-center px-6 md:px-12 py-12 pt-[90px]">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">About Me</h1>

      {/* Optional Profile Image */}
      {/* <img src={Profile_Photo} alt="Profile" className="w-40 md:w-52 rounded-lg mb-8" /> */}

      <div className="w-full max-w-4xl">
        <p className="text-base md:text-lg mb-10 text-center md:text-left">
          A passionate web developer with a creative flair and a knack for turning visions into reality. My journey in web development began with a fascination for coding and design, and it has evolved into a career where I blend aesthetics with functionality. With a focus on user experience and a commitment to staying updated with the latest industry trends, I'm dedicated to creating web solutions that not only meet but exceed expectations.
        </p>

        {/* Skill Bars */}
        <div className="flex flex-col gap-6">
          {[
            { label: 'HTML5 & CSS3', width: 'w-[75%]' },
            { label: 'React JS', width: 'w-[90%]' },
            { label: 'SAP UI5', width: 'w-[80%]' },
            { label: 'Javascript', width: 'w-[80%]' },
          ].map((skill, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center gap-4 hover:scale-105 transform-gpu duration-500">
              <p className="font-medium w-40 min-w-[120px] text-center sm:text-left">{skill.label}</p>
              <hr className={`${skill.width} h-[8px] rounded-lg bg-gradient-to-r from-[#B415FF] to-[#DF8908] border-none`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
