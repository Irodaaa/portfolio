import React from 'react';
import Section from "./common/Section";
import girl from '../assets/girl.png'

const Testimonials = () => {

    const TESTIMONIALS = [
        {
            id:1,
            image: girl,
            name: "Azizbek",
            comment: "It was a big pleasure to work with ms.Iroda because she knows definitely what the client wants and needs."
        },
        {
            id:2,
            image: girl,
            name: "Muhabbat",
            comment: "She helped me with a design of my site and she also has built it! Thank you so much again!"
        }
    ]

    return (
        <Section title='Testimonials' subtitle='This is what my clients say about me and my work'>
            <div className='max-w-xl flex flex-col gap-8'>
                {TESTIMONIALS.map(({id, image, name, comment})=>
                <div className='flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300'>
                    <div className='w-1/3'>
                        <img src={image} alt={name} className='w-20 h-20 object-cover object-top pt-2'/>
                    </div>
                    <div className='w-2/3 flex flex-col justify-center items-center gap-3 p-2'>
                        <h3 className='text-xl font-semibold'>{name}</h3>
                        <p className='text-sm font-extralight'>{comment}</p>
                    </div>
                </div>)}
            </div>
        </Section>
    );
};

export default Testimonials;