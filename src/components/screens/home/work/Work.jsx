import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from 'animations/fadeIn';
import Img1 from '../../../../assets/portfolio-img1.png';
import Img2 from '../../../../assets/portfolio-img2.png';
import Img3 from '../../../../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br /> Work
              </h2>
              <p className='max-w-sm mb-16'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi voluptate nostrum
                dolorum sunt aliquam pariatur delectus iure nobis corrupti repellendus facere ut
                ducimus, praesentium tempora minima ex facilis minus! Officiis?
              </p>
              <button className='btn btn-sm'> View all projects </button>
            </div>

            <div className='group relative overflow-hidden border-2 border-accent rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 translate-all duration-300'></div>
              <img
                className='group-hover:scale-125 translate-all duration-500'
                src={Img1}
                alt='js/ts'
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 translate-all duration-500 z-40'>
                <span className='text-gradient'>TS/JS</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 translate-all duration-700 z-40'>
                <span className='text-3xl text-white'>Project title</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col justify-end gap-y-10'>
            <div className='group relative overflow-hidden border-2 border-accent rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 translate-all duration-300'></div>
              <img
                className='group-hover:scale-125 translate-all duration-500'
                src={Img2}
                alt='js/ts'
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 translate-all duration-500 z-40'>
                <span className='text-gradient'>TS/JS</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 translate-all duration-700 z-40'>
                <span className='text-3xl text-white'>Project title</span>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-accent rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 translate-all duration-300'></div>
              <img
                className='group-hover:scale-125 translate-all duration-500'
                src={Img3}
                alt='js/ts'
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 translate-all duration-500 z-40'>
                <span className='text-gradient'>TS/JS</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 translate-all duration-700 z-40'>
                <span className='text-3xl text-white'>Project title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
