import img4 from "../../assets/images/team/4.jpg"

const WebExpert = () => {
    return (
        <div className="flex items-center mb-10 mt-16">
            <div className="w-1/2">
                <div className="w-11/12 p-4 flex items-center justify-center  rounded-full border-[20px] border-[#FF38111a]">
                    <img className="border-8   border-[#FF3811] rounded-full" src={img4} alt="" />
                </div>
            </div>
            <div className="border-l w-1/2 pl-6 border-[#ff39112c]">
                <h1 className="text-2xl font-bold mb-2 text-[#FF3811]">OUR WEB EXPERT</h1>
                <h3 className="text-5xl font-bold mb-7 text-black">SOJIBUL ISLAM SAYEM</h3>
                <p className="text-[20px] font-semibold mb-5 text-[#0413139a]">Junior Front-End-Developer</p>

                <p className="mb-3">React Developer | Diploma Student in CST | 3 Years of Coding Experience</p>

                <p className="mb-3">I am currently pursuing a diploma in Computer Science Technology (CST) with 3 years of coding experience, specializing in React development. I’m passionate about building dynamic, responsive, and user-friendly web applications using modern front-end technologies.</p>

                <p className="mb-3">I thrive on solving real-world problems through code and am always looking to learn, collaborate, and create impactful projects.</p>

            </div>
        </div>
    );
};

export default WebExpert;