import LinkedIn_Logo from './../assets/LinkedIn.jpg';
import Gmail_Logo from './../assets/Gmail.jpg';
import Phone_Logo from './../assets/Phone.jpg'
const Contact = () => {
    return (
        <section id="contact" className="py-16 px-6 md:px-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-800">
                Contact Me
            </h2>

            <div className="flex flex-col md:flex-row justify-between gap-12">
                {/* Contact Form */}
                <form className="w-full md:w-1/2 space-y-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-200"
                    >
                        Send Message
                    </button>
                </form>

                {/* Contact Info */}
                <div className="w-full md:w-1/2 text-gray-700 space-y-6">
                    <p className="text-lg">
                        Feel free to reach out via email or connect with me on LinkedIn.
                    </p>
                    <div>
                        <p className="font-semibold">Email:</p>
                        <a href="mailto:srikaribodugam@gmail.com" className="text-purple-600 hover:underline">
                            srikaribodugam@gmail.com
                        </a>
                    </div>
                    <div>
                        <p className="font-semibold">Phone:</p>
                        <p>022 612 2601</p>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/srikari-bodugam-8b6192190/" target="_blank" className="hover:text-purple-600"><img className='w-8' src={LinkedIn_Logo}/></a>

                </div>
            </div>
        </div>
        </section >
    );
};

export default Contact;
