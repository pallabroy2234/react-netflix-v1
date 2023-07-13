import SavedShow from "../components/SavedShow";

const Account = () => {
  return (
    <>
      <div className='w-full text-white '>
        <img className='h-[400px] w-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/ce221d7a-8901-41d9-b726-3ea2efe3a650/50896904-e803-42d0-a4b4-436ed40686c5/BD-en-20230703-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='/' />
        <div className='fixed left-0 top-0 h-[550px] w-full bg-black/60'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl font-bold md:text-5xl'>My Shows</h1>
        </div>
        <SavedShow />
      </div>
    </>
  );
};

export default Account;
