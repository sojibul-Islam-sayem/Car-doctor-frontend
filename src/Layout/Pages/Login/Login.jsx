import { Link } from "react-router-dom";
import img from '../../../assets/images/login/login.svg'

const Login = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto my-12">
                <div className="flex flex-col lg:flex-row items-center  ">
                    <div className="text-center w-1/2 lg:text-left">
                        <img src={img} alt="" />
                    </div>
                    <div className=" w-1/2  border border-[#D0D0D0] p-[75px] rounded-xl shadow-2xl">
                        <h1 className="text-4xl font-semibold mb-8 text-black text-center">Sign in</h1>
                        <form className="flex flex-col space-y-3">
                            <div className="form-control">
                                <label className="">
                                    <span className="font-semibold text-black">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered bg-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="font-semibold text-black">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered bg-white" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <button className="bg-[#FF3811] text-[20px] py-2 rounded-lg font-semibold text-white">Login</button>
                            <p className="text-center font-medium ">Or Sign in with</p>
                            <div className="flex mx-auto space-x-2">
                                <img className="w-9 h-9 rounded-full bg-black" src="" alt="" />
                                <img className="w-9 h-9 rounded-full bg-black" src="" alt="" />
                                <img className="w-9 h-9 rounded-full bg-black" src="" alt="" />
                            </div>

                            <p className="text-center">Have an account? <Link className="text-[#FF3811] font-medium">Sign In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;