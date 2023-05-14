import React from 'react';
import Section from "./common/Section";
import commerce from '../assets/commerce.png'
import research from '../assets/research.png'
import web from '../assets/web.png'
import mobile from '../assets/mobile.png'



const Services = () => {
    const services = [
        {
            id:1,
            image: web,
            title: "Ecommerce website"
        },
        {
            id:2,
            image: mobile,
            title: "Mobile apps"
        },
        {
            id:3,
            image: commerce,
            title: "Commerce website"
        },
        {
            id:4,
            image: research,
            title: "Research and development"
        },
    ]
    return (
        <Section title='Services ⚒' subtitle='Here you can see all the services I provide. Also You can see some works done in
        Figma, If you have other questions feel free to email or contact me! I hope you like it ' >
            <div className='grid gap-10 lg:grid-cols-2'>
                {services.map(({id, image, title})=>
                <div key={id} className='px-10 flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110'>
                    <img src={image} alt={title} className='w-44 h-44 md:w-56 h-56 object-contain'/>
                    <h3 className='mt-5 text-base'>{title}</h3>
                </div>)}
            </div>
        </Section>
    );
};

export default Services;