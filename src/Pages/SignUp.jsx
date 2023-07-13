import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {UserAuth} from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // eslint-disable-next-line no-unused-vars
  const {user, signUp} = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='relative w-full h-screen'>
        <img className='absolute hidden object-cover w-full h-full sm:block' src='https://assets.nflxext.com/ffe/siteui/vlv3/ce221d7a-8901-41d9-b726-3ea2efe3a650/50896904-e803-42d0-a4b4-436ed40686c5/BD-en-20230703-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='/' />
        <div className='fixed top-0 left-0 w-full h-screen bg-black/60'></div>

        <div className='fixed z-[50] w-full px-4 py-24'>
          <div className='mx-auto  h-[600px] max-w-[450px] bg-black/75 text-white'>
            <div className='mx-auto  max-w-[320px] py-16'>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              <form className='flex flex-col w-full py-4' onSubmit={handleSubmit}>
                <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type='email' placeholder='Email' autoComplete='email' />
                <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type='password' placeholder='Password' autoComplete='current-password' />
                <button className='py-3 my-6 font-bold bg-red-600 rounded' type='submit'>
                  Sign Up
                </button>

                <div className='flex items-center justify-between text-sm text-gray-500'>
                  <p>
                    <input className='mr-2' type='checkbox' />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8'>
                  <span className='text-gray-500 '>Already subscribed to Netflix? </span>
                  <Link to='/login'>Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
