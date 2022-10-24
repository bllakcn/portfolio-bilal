import React from 'react'
import reactlogo from '../assets/react.png'
import vuelogo from '../assets/vue.png'
import htmllogo from '../assets/html.png'
import csslogo from '../assets/css.png'
import jslogo from '../assets/js.png'
import tailwindlogo from '../assets/tailwind.png'
import pslogo from '../assets/ps.png'
import ailogo from '../assets/ai.png'
import lrlogo from '../assets/lr.png'
import xdlogo from '../assets/xd.png'
import splinelogo from '../assets/spline.png'

import './Skills.css'

const frontSkills = [
  {name:htmllogo, id:1},
  {name:csslogo, id:2},
  {name:jslogo, id:3},
  {name: reactlogo, id:4},
  {name:vuelogo, id:5},
  {name:tailwindlogo, id:6}
]
const contentSkills = [
  {name:pslogo, id:1},
  {name:ailogo, id:2},
  {name:xdlogo, id:3},
  {name:lrlogo, id:4},
  {name:splinelogo, id:5}
]

export default function Skills() {
  return (
    <section className='bg-black text-neutral-300 flex flex-col justify-center pb-16'>
      <h2 className='text-center text-neutral-200 text-xl my-10'>My <span className='highlight-tools relative z-10 text-2xl font-black'>Toolset</span></h2>
      <div className='mx-auto text-center'>
        <p className='font-thin mx-6 text-sm tracking-widest'>Front-end development</p>
        <div className='grid ml-0 p-4 grid-cols-6 gap-5 grey-filtered'>
          {frontSkills.map((skill) => (
            <img className='w-12' key={skill.id} src={skill.name} alt={skill.name} />
          ))}
        </div>
      </div>
      <div className='mx-auto text-center'>
        <p className='font-thin mx-6 text-sm tracking-widest'>Content Creation</p>
        <div className='grid ml-0 p-4 grid-cols-5 gap-5 grey-filtered'>
          {contentSkills.map((skill) => (
            <img className='w-8' key={skill.id} src={skill.name} alt={skill.name} />
          ))}
        </div>
      </div>
    </section>
  )
}
