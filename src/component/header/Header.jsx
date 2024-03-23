import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center mx-5 my-3 border-b-2 border-red-700'>
             <h1 className='text-3xl font-semibold text-red-500 w-[400px] mt-8  rounded-xl'>Knowledge Cafe</h1>
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;