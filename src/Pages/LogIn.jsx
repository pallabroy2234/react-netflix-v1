import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {UserAuth} from "../context/AuthContext";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // eslint-disable-next-line no-unused-vars
  const {user, logIn} = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className='relative h-screen w-full'>
        <img className='absolute hidden h-full w-full object-cover sm:block' src='https://assets.nflxext.com/ffe/siteui/vlv3/ce221d7a-8901-41d9-b726-3ea2efe3a650/50896904-e803-42d0-a4b4-436ed40686c5/BD-en-20230703-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='/' />
        <div className='fixed left-0 top-0 h-screen w-full bg-black/60'></div>
        <div className='fixed z-[50] w-full px-4 py-24'>
          <div className='mx-auto  h-[600px] max-w-[450px] bg-black/75 text-white'>
            <div className='mx-auto  max-w-[320px] py-16'>
              <h1 className='text-3xl font-bold'>Sign In</h1>
              {/* if password is wrong than thorow an error and show this p tag  but if not error than it's value is null */}
              {error ? <p className='my-2 bg-red-300 p-3'>{error}</p> : null}

              <form className='flex w-full flex-col py-4' onSubmit={handleSubmit}>
                <input onChange={(e) => setEmail(e.target.value)} className='my-2 rounded bg-gray-700 p-3' type='email' placeholder='Email' autoComplete='email' />
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className='my-2 rounded bg-gray-700 p-3'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                />
                <button className='my-6 rounded bg-red-600 py-3 font-bold'>Sign In</button>

                <div className='flex items-center justify-between text-sm text-gray-500'>
                  <p>
                    <input className='mr-2 ' type='checkbox' />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8'>
                  <span className='text-gray-500 '>New to Netflix? </span>
                  <Link to='/signup'>Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
