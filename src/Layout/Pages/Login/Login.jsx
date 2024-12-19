import { Link, useLocation, useNavigate } from "react-router-dom";
import img from '../../../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProviders";

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .then(error => console.log(error)
            )
    }
    const handleWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .then(error => console.log(error)
            )
    }

    return (
        <div className="max-w-7xl mx-auto my-12">
            <div className="flex flex-col lg:flex-row items-center  ">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className=" w-1/2  border border-[#D0D0D0] p-[75px] rounded-xl shadow-2xl">
                    <h1 className="text-4xl font-semibold mb-8 text-black text-center">Sign in</h1>
                    <form onSubmit={handleLogIn} className="flex flex-col space-y-3">
                        <div className="form-control">
                            <label className="">
                                <span className="font-semibold text-black">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="font-semibold text-black">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered bg-white" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <input className="bg-[#FF3811] text-[20px] py-2 rounded-lg font-semibold text-white" type="submit" value="Log In" />
                        <p className="text-center font-medium ">Or Sign in with</p>
                        <div className="flex mx-auto space-x-2">
                            <img onClick={handleWithGoogle} className="w-9 h-9 rounded-full bg-black" src="" alt="" />
                            <img className="w-9 h-9 rounded-full bg-black" src="" alt="" />
                            <img className="w-9 h-9 rounded-full bg-black" src="" alt="" />
                        </div>

                        <p className="text-center">Create an account? <Link to={'/signup'} className="text-[#FF3811] font-medium">Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;