import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';


const SignIn = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();



    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');


    useEffect(() => {
    }, [email, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, 'email');
        console.log(pwd, 'pwd');
        // setAuth({ user, pwd, roles, accessToken });


    }

    return (
        <div className='w-full h-[calc(100vh-72px)] flex items-center justify-center border'>
            <section className='min-w-[550px] border border-[#a1a1a1] rounded-lg flex flex-col justify-center items-center p-4'>
                <h1 className='font-bold'>Sign In</h1>
                <form onSubmit={handleSubmit} className='w-full flex flex-col gap-y-4  '>
                    <label htmlFor="Email">Email:</label>
                    <input
                        className=" w-full h-12  border border-searchBgColor rounded-lg px-4"
                        type="emal"
                        id="Email"
                        autoComplete="on"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        placeholder='email'
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        className="  w-full h-12  border border-searchBgColor rounded-lg px-4"

                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        placeholder='password'

                    />
                    <button className="mt-2 text-white border cursor-pointer flex items-center justify-center border-[#F2F2F2] w-full h-12 bg-[#0077B6] select-none rounded-lg active:scale-95	active:opacity-70 "
                    >Sign In</button>
                </form>
                <p className='w-full mt-5 flex items-center justify-center'>
                    Need an Account?
                    <span className="line ml-5">
                        <Link to="/signup" className='text-[#0077B6]'>Sign Up</Link>
                    </span>
                </p>
            </section>
        </div>
    )
}

export default SignIn
