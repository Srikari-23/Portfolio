import ProfileLogo from './../assets/Profile.JPG';

const Profile = () => {
    return (
        <div
            id="home"
            className="grid grid-cols-1 lg:grid-cols-4 gap-8 px-6 lg:px-24 py-20 items-center min-h-screen"
        >
            {/* Text Section */}
            <div className="lg:col-span-3 text-center lg:text-left">
                <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">Hello....</h1>
                <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#DF8908] to-[#B415FF] py-4">
                    I'm Srikari Bodugam
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Frontend Developer</h2>
                <p className="text-base md:text-lg lg:text-lg max-w-xl mx-auto lg:mx-0">
                    Engineer and passionate Front End Developer with 3+ years of experience writing clean and standard code in JavaScript using modern frameworks like React, SAPUI5, and SAP Fiori.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
                    <a href="#contact" className="py-2 px-6 rounded-full bg-gradient-to-bl from-violet-500 to-fuchsia-500 hover:scale-105 transform-gpu duration-300 text-white">
                        Connect with me
                    </a>
                    <a
                        href="/Shree_Resume.pdf"
                        download
                        className="py-2 px-6 rounded-full bg-gradient-to-bl from-violet-500 to-fuchsia-500 text-white hover:scale-105 transition duration-300 inline-block"
                    >
                        Download CV
                    </a>
                </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center">
                <img
                    src={ProfileLogo}
                    alt="Profile"
                    className="w-48 sm:w-60  rounded-xl shadow-lg"
                />
            </div>
        </div>
    );
};

export default Profile;
