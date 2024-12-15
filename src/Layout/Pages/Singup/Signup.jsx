import { Link } from 'react-router-dom';
import img from '../../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProviders';
import { Result } from 'postcss';

const Signup = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .then(error => console.log(error))
    }

    const handleWithGoogle = () =>{
        signInWithGoogle()
        .then(result=>{
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
                    <h1 className="text-4xl font-semibold mb-8 text-black text-center">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="flex flex-col space-y-3">
                        <div className="form-control">
                            <label className="">
                                <span className="font-semibold text-black">Name</span>
                            </label>
                            <input type="name" name='name' placeholder="name" className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="font-semibold text-black">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="font-semibold text-black">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered bg-white" required />
                        </div>
                        <input className="bg-[#FF3811] text-[20px] py-2 rounded-lg font-semibold text-white" type="submit" value="Sign Up" />

                        <p className="text-center font-medium ">Or Sign Up with</p>
                        <div className="flex mx-auto space-x-2">
                            <img onClick={handleWithGoogle} className="w-9 h-9 rounded-full bg-black" src="" alt="" />
                            <img className="w-9 h-9 rounded-full bg-black" src="" alt="" />
                            <img className="w-9 h-9 rounded-full bg-black" src="" alt="" />
                        </div>
                        <p className="text-center">Have an account? <Link to={'/login'} className="text-[#FF3811] font-medium">Sign in</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;