import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about our company history and mission"
}
const About = () => {
    return (
        <div>
            Learn about our company history and mission
            <button className='bg-gradient-left-right-alt hover:shadow-2xl transition-all duration-300 py-4 px-2 rounded-md shadow-black shadow-lg'>click here to contiue</button>
        </div>
    )
}

export default About
