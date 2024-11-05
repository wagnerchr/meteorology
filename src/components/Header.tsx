import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="flex w-full h-[60px] bg-[#438bf3] relative justify-between">
            <h1 className="mt-1 mx-8 text-[58px] font-bold font-sans text-white text-outline">Perobeli</h1>
            <div className='flex m-8 justify-between w-[300px]'>
                <button>LOGIN</button>
                <button>REGISTRO</button>
            </div>
        </div>
    )
}

export default Header;
