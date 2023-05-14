import React from 'react';
import Section from "./common/Section";
import contact from '../assets/mobile.png'
import {FaInstagram, FaLinkedin, FaTelegram} from "react-icons/fa";

const Contact = () => {
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

    return (
        <Section title='Contact me 📞' subtitle='You can contact me to ask other questions about work!'>
            <div className='flex flex-col justify-center items-center gap-8'>
                <div>
                    <img className='w-32 h-32 hover:scale-125 duration-300' src={contact}/>
                </div>
                <div className='max-w-xs md:max-w-lg font-extralight'>
                    <p>I am here to answer to all of your questions! Feel free to ask!
                    </p>
                </div>
                <div className='flex w-full items-center justify-evenly text-3xl'>
                    {SOCIAL.map(({id, link, icon}) =>
                    <a className='hover:scale-125 hover:text-pink-400 duration-300' href={link}>
                        {icon}
                    </a>)}
                </div>
                <div className='p-8 text-left w-full flex items-center justify-center'>
                    <form action='https://getform.io/f/68c7ada6-f814-46cb-8ea9-ed1123fb2c25' method='POST'>
                        <div className='gap-4 w-full'>
                        <div className='flex-col w-full py-2'>
                            <label className='capitalize text-sm py-2 font-extralight'>name</label>
                            <input type='text' name='name' className='w-60 border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white py-2' />
                        </div>
                        <div className='flex-col w-full py-2'>
                            <label className='capitalize font-extralight'>phone</label>
                            <input type='text' name='name' className='w-60 border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' />
                        </div>
                        <div className='flex-col'>
                            <label className='capitalize font-extralight py-2 my-2'>email</label>
                            <input type='text' name='email' className='w-60 border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' />
                        </div>
                        <div className='flex-col'>
                            <label className='capitalize font-extralight py-2 my-2'>message</label>
                            <textarea name='message' rows='10' className='w-60 border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none'></textarea>
                        </div>
                    </div>
                        <div className='flex items-center justify-center'>
                            <button className='my-8 bg-gradient-to-r from-pink-500 to-blue-100 rounded-lg py-3 px-6 hover:scale-110 duration-300 font-medium uppercase tracking-wider'>send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default Contact;