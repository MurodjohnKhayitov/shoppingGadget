import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import '../../firebase/config'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const SignUp = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(getAuth(), email, password)
            .then((res) => {
                setAuth(res);
                setEmail('')
                setPassword('')
                navigate('/home')
            })
            .catch(err => {
                console.log(err, "err");
            })
    }


    return (
        <div className='w-full h-[calc(100vh-72px)] flex items-center justify-center border'>
            <section className='min-w-[550px] border border-[#a1a1a1] rounded-lg flex flex-col justify-center items-center p-4'>
                <h1 className='font-bold'>Sign Up</h1>
                <form onSubmit={handleSubmit} className='w-full flex flex-col gap-y-4  '>
                    <label htmlFor="Email">Email:</label>
                    <input
                        className=" w-full h-12  border border-searchBgColor rounded-lg px-4"
                        type="email"
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
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        placeholder='password'

                    />
                    <button className="mt-2 text-white border cursor-pointer flex items-center justify-center border-[#F2F2F2] w-full h-12 bg-[#0077B6] select-none rounded-lg active:scale-95	active:opacity-70 "
                    >Sign Up</button>
                </form>
                <p className='w-full mt-5 flex items-center justify-center'>
                    Hava a an Account?
                    <span className="line ml-5">
                        <Link to="/login" className='text-[#0077B6]'>Sign In</Link>
                    </span>
                </p>
            </section>
        </div>
    )
}

export default SignUp
