import React, { useState } from 'react'
import { motion } from 'framer-motion'
import img1 from './Assets/6.jpg'
import img2 from './Assets/2.jpg'
import img3 from './Assets/3.jpg'
import img4 from './Assets/4.jpg'
import img5 from './Assets/5.jpg'

const Slider = () => {
    const [expandedIndex, setExpandedIndex] = useState(null)

    const handleCardClick = (index) => {
        setExpandedIndex(index === expandedIndex ? -1 : index)
    }

    const cardVariants = {
        expanded: {
            width: '400px'
        },
        collapsed: {
            width: '200px'
        }
    }
    

    const cardImages = [img1, img2, img3, img4, img5]

    const cardDescription = [
        'This is a description, We can write whatever we like ',
        'This is a description, We can write whatever we like ',
        'This is a description, We can write whatever we like ',
        'This is a description, We can write whatever we like ',
        'This is a description, We can write whatever we like '
    ]
    return (
        <section className='py-16 pb-[300px]'>
            <div className='max-w-7xl mx-auto px-4 sm:px-4 lg:px-8'>
                <h1 className='flex justify-center text-4xl font-extrabold text-black'>
                    Our Achievements
                </h1>
                <p className='mt-4 text-xl flex justify-center'>
                    Some of the deeds we have accomplished.
                </p>
            </div>
            <div className='mt-12 flex flex-col md:flex-row justify-center items-center gap-5'>
                {[0,1,2,3,4].map((index) => (
                    <motion.div
                    key = {index}
                    className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${index === expandedIndex ? 'expanded' : ''}`}
                    variants={cardVariants}
                    initial= "collapsed"
                    animate = {index === expandedIndex ? 'expanded' : 'collapsed'}
                    transition={{duration: 0.5}}
                    onClick={() => handleCardClick(index)}
                    style = {{
                        backgroundImage: `url(${cardImages[index]})`
                    }}
                    >
                        <div className='card-content h-full flex flex-col justify-end'>
                            <div className='card-footer rounded-b-[20px] bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center'>
                                <h2 className='text-xl font-semibold text-center text-white'>Card {index + 1}</h2>
                                {
                                    index === expandedIndex && (
                                        <p className='mt-2 text-white text-center'>
                                            {cardDescription[index]}

                                        </p>
                                    )
                                }
                            </div>

                        </div>

                    </motion.div>
                ))}

            </div>

        </section>
    )
}

export default Slider
