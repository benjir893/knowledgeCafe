import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div>
             <h1 className='text-3xl font-semibold text-red-500 text-center bg-orange-100 w-[400px] mx-auto mt-8 border-2 border-orange-300 rounded-xl py-4 '>Knowledge Cafe</h1>
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;