import React from 'react';
import {FaInstagram, FaLinkedin, FaTelegram, FaArrowDown} from 'react-icons/fa'
import avatar from '../assets/girl.png'

const Hero = () => {

    const SOCIAL = [
        {
            id:1, link: "https://www.instagram.com/", icon: <FaInstagram />
        },
        {
            id:2, link: "https://www.telegram.com/", icon: <FaTelegram />
        },
        {
            id:3, link: "https://www.linkedin.com/", icon: <FaLinkedin />
        },
    ]

    window.addEventListener('scroll', function (){
        const downArrow = document.querySelector(".down-arrow");

        if (this.scrollY >= 90) downArrow.classList.add('hide-down-arrow');
        else downArrow.classList.remove('hide-down-arrow');

    });

    return (
        <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
            <h2 className='text-5xl bg-gradient-to-r from-pink-500 to-blue-200 inline-block text-transparent bg-clip-text font-bold uppercase tracking-widest'>MUSLIMA</h2>
            <h3 className='py-3 text-3xl'>WEB-DEVELOPER</h3>
            <p className='max-w-xl font-light text-gray-500'>Hello<span className='animate-pulse text-4xl'>👋🏻</span>! Welcome to my site. My name is Iroda and I'm a coder.</p>
            <div className='flex justify-evenly text-5xl py-8 lg:py-16 w-full md:w-1/3'>
                {SOCIAL.map(({id,link,icon}) =>
                <a className='cursor-pointer hover:text-pink-500 duration-300' href={link} target='_blank' rel='noopener noreferrer' key={id}>{icon}</a>
                )}
            </div>
                <div>
                    <img src={avatar} alt='logotype' className='w-60 h-52 md:h-72 pt-0 object-cover object-top bg-gradient-to-b from-pink-400 rounded-2xl'/>
                    <a href='/IMAGE%202023-03-23%2000-46-29.pdf' download={true} className='flex justify-center items-center mt-10 bg-gradient-to-r
                    from-pink-500 to-yellow-200 text-white text-center py-2 rounded-lg'>Resume <span></span></a>
                </div>
            <div className='mt-9 down-arrow'>
                <FaArrowDown className='text-gray-400 text-2xl animate-bounce'/>
            </div>
        </section>
    );
};

export default Hero;