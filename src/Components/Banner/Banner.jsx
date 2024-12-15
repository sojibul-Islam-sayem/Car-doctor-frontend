import img1 from "../../assets/images/banner/1.jpg"
import img2 from "../../assets/images/banner/2.jpg"
import img3 from "../../assets/images/banner/3.jpg"
import img4 from "../../assets/images/banner/4.jpg"
import img5 from "../../assets/images/banner/5.jpg"
import img6 from "../../assets/images/banner/6.jpg"

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full max-h-[600px]">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img
                        src={img1}
                        className="w-full rounded-lg" />
                    <div className="absolute w-full rounded-lg bg-gradient-to-l from-[#15151500] to-[#151515] h-full left-0 top-0 flex items-center">
                        <div className="flex flex-col space-y-8 pl-24  max-w-xl text-white ">
                            <h1 className="font-bold text-6xl">Affordable Price For Car Servicing</h1>
                            <p className="text-[18px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex space-x-5 text-[18px] font-semibold">
                                <button className="bg-[#FF3811] px-6 py-4 rounded-lg">Discover more</button>
                                <button className="px-6 py-4 border rounded-lg">latest project</button>
                            </div>
                        </div>
                        <div className="absolute right-5 bottom-0 flex space-x-5 -translate-y-1/2 transform">
                            <a href="#slide6" className="w-14 text-white text-center h-14 flex items-center justify-center rounded-full hover:bg-[#d1482d] bg-[#FF3811]">❮</a>
                            <a href="#slide2" className="w-14 text-white text-center h-14 flex items-center justify-center rounded-full hover:bg-[#d1482d] bg-[#FF3811] ">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <img
                        src={img2}
                        className="w-full rounded-lg" />
                    <div className="absolute w-full rounded-lg bg-gradient-to-l from-[#15151500] to-[#151515] h-full left-0 top-0 flex items-center">
                        <div className="flex flex-col space-y-8 pl-24  max-w-xl text-white ">
                            <h1 className="font-bold text-6xl">Affordable Price For Car Servicing</h1>
                            <p className="text-[18px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex space-x-5 text-[18px] font-semibold">
                                <button className="bg-[#FF3811] px-6 py-4 rounded-lg">Discover more</button>
                                <button className="px-6 py-4 border rounded-lg">latest project</button>
                            </div>
                        </div>
                        <div className="absolute right-5 bottom-0 flex space-x-5 -translate-y-1/2 transform">
                            <a href="#slide1" className="w-14 text-white text-center h-14 flex items-center justify-center rounded-full hover:bg-[#d1482d] bg-[#FF3811]">❮</a>
                            <a href="#slide3" className="w-14 text-white text-center h-14 flex items-center justify-center rounded-full hover:bg-[#d1482d] bg-[#FF3811] ">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full ">
                    <img
                        src={img3}
                        className="w-full rounded-lg" />
                    <div className="absolute w-full rounded-lg bg-gradient-to-l from-[#15151500] to-[#151515] h-full left-0 top-0 flex items-center">
                        <div className="flex flex-col space-y-8 pl-24  max-w-xl text-white ">
                            <h1 className="font-bold text-6xl">Affordable Price For Car Servicing</h1>
                            <p className="text-[18px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex space-x-5 text-[18px] font-semibold">
                                <button className="bg-[#FF3811] px-6 py-4 rounded-lg">Discover more</button>
                                <button className="px-6 py-4 border rounded-lg">latest project</button>
                            </div>
                        </div>
                        <div className="absolute right-5 bottom-0 flex space-x-5 -translate-y-1/2 transform">
                            <a href="#slide2" className="w-14 text-white text-center h-14 flex items-center justify-center rounded-full hover:bg-[#d1482d] bg-[#FF3811]">❮</a>
                            <a href="#slide4" className="w-14 text-white text-center h-14 flex items-center justify-center rounded-full hover:bg-[#d1482d] bg-[#FF3811] ">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full ">
                    <img
                        src={img4}
                        className="w-full rounded-lg" />
                    <div className="absolute w-full rounded-lg bg-gradient-to-l from-[#15151500] to-[#151515] h-full left-0 top-0 flex items-center">
                        <div className="flex flex-col space-y-8 pl-24  max-w-xl text-white ">
                            <h1 className="font-bold text-6xl">Affordable Price For Car Servicing</h1>
                            <p className="text-[18px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex space-x-5 text-[18px] font-semibold">
                                <button className="bg-[#FF3811] px-6 py-4 rounded-lg">Discover more</button>
                                <button className="px-6 py-4 border rounded-lg">latest project</button>
                            </div>
                        </div>
                        <div className="absolute right-5 bottom-0 flex space-x-5 -translate-y-1/2 transform">
                            <a href="#slide3" className="w-14 text-white text-center h-14 flex items-center justify-center rounded-full hover:bg-[#d1482d] bg-[#FF3811]">❮</a>
                            <a href="#slide5" className="w-14 text-white text-center h-14 flex items-center justify-center rounded-full hover:bg-[#d1482d] bg-[#FF3811] ">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full ">
                    <img
                        src={img5}
                        className="w-full rounded-lg" />
                    <div className="absolute w-full rounded-lg bg-gradient-to-l from-[#15151500] to-[#151515] h-full left-0 top-0 flex items-center">
                        <div className="flex flex-col space-y-8 pl-24  max-w-xl text-white ">
                            <h1 className="font-bold text-6xl">Affordable Price For Car Servicing</h1>
                            <p className="text-[18px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex space-x-5 text-[18px] font-semibold">
                                <button className="bg-[#FF3811] px-6 py-4 rounded-lg">Discover more</button>
                                <button className="px-6 py-4 border rounded-lg">latest project</button>
                            </div>
                        </div>
                        <div className="absolute right-5 bottom-0 flex space-x-5 -translate-y-1/2 transform">
                            <a href="#slide4" className="w-14 text-white text-center h-14 flex items-center justify-center rounded-full hover:bg-[#d1482d] bg-[#FF3811]">❮</a>
                            <a href="#slide6" className="w-14 text-white text-center h-14 flex items-center justify-center rounded-full hover:bg-[#d1482d] bg-[#FF3811] ">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full ">
                    <img
                        src={img6}
                        className="w-full rounded-lg" />
                    <div className="absolute w-full rounded-lg bg-gradient-to-l from-[#15151500] to-[#151515] h-full left-0 top-0 flex items-center">
                        <div className="flex flex-col space-y-8 pl-24  max-w-xl text-white ">
                            <h1 className="font-bold text-6xl">Affordable Price For Car Servicing</h1>
                            <p className="text-[18px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex space-x-5 text-[18px] font-semibold">
                                <button className="bg-[#FF3811] px-6 py-4 rounded-lg">Discover more</button>
                                <button className="px-6 py-4 border rounded-lg">latest project</button>
                            </div>
                        </div>
                        <div className="absolute right-5 bottom-0 flex space-x-5 -translate-y-1/2 transform">
                            <a href="#slide5" className="w-14 text-white text-center h-14 flex items-center justify-center rounded-full hover:bg-[#d1482d] bg-[#FF3811]">❮</a>
                            <a href="#slide1" className="w-14 text-white text-center h-14 flex items-center justify-center rounded-full hover:bg-[#d1482d] bg-[#FF3811] ">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;