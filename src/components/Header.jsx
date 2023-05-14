import React from 'react';
import {MdNightsStay, MdWbSunny} from 'react-icons/md'

const Header = ({darkMode, setDarkMode}) => {
    return (
        <header className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
            <nav className='flex justify-between items-center py-5 px-5'>
                <h1 className='text-2xl'>IRODA</h1>

                <div onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? (
                        <MdNightsStay className='text-2xl cursor-pointer'/>
                    ): (<MdWbSunny className='text-2xl cursor-pointer' />) }
                </div>
            </nav>
        </header>
    );
};

export default Header;