import React from 'react';
import Section from "./common/Section";
import {FaGithub, FaExternalLinkSquareAlt} from 'react-icons/fa'
import p11 from '../assets/p11.png';
import p6 from '../assets/p6.jpg'
import p5 from '../assets/p5.jpg'
import p4 from '../assets/p4.jpg'



const Portfolio = () => {

    const projects = [
        {
            id:1,
            image: p11,
            title: "Socratize"
        },
        {
            id:2,
            image: p4,
            title: "My app"
        },
        {
            id:3,
            image: p6,
            title: "Online shop"
        },        {
            id:4,
            image: p5,
            title: "Weather App"
        }
    ]

    return (
        <Section
        title='Portfolio 📄'
        subtitle='Here are some examples of projects I have done. Hope you will like it!'>
            <div className='grid gap-8 lg:gap-14 lg:grid-cols-2'>
                {projects.map(({id, image, title}) =>
                <div className='max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden'>
                    <img src={image} alt={title} className='w-2/3'/>
                    <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                        <h2>{title}</h2>
                        <a href='https://github.com/Irodaaa' className='text-2xl cursor-pointer hover:scale-110'><FaGithub /></a>
                        <a href='https://github.com/Irodaaa' className='text-2xl cursor-pointer hover:scale-110'> <FaExternalLinkSquareAlt /> </a>
                    </div>
                </div>)}
            </div>
        </Section>
    );
};

export default Portfolio;