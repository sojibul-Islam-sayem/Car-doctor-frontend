import img1 from '../../assets/images/about_us/person.jpg'
import img2 from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className='h-[530px] mt-32'>
            <div className="hero-content  p-0 flex-col lg:flex-row justify-between items-center">
                <div
                    className="relative w-1/2  rounded-lg shadow-2xl">
                    <img src={img1} />
                    <img className='absolute bg-red-400 border-[#fff] rounded border-[10px] w-80 -bottom-16 -right-14' src={img2} alt="" />
                </div>
                <div className='w-2/5'>
                    <h3 className='font-bold text-[20px] text-[#FF3811]'>About us</h3>
                    <h1 className="text-5xl text-black font-bold mb-3 mt-5 w-9/12">We are qualified & of experience in this field</h1>
                    <p className="text-[#737373] py-5">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p className="text-[#737373] pb-5">
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className="bg-[#FF3811] text-white font-semibold px-6 py-3 rounded-lg">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;