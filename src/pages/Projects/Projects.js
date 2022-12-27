import { Link } from 'react-router-dom'
import projectList from './showcase.json'
import profile from '../../assets/profile.jpg'

import './Projects.css'

const line = "{/*Tech Enthusiast*/}"
export default function Projects() {
  
  return (
    <div className='min-h-screen lg:px-16 lg:flex bg-black justify-between'>
      <aside className="lg:flex-1 lg:max-w-xl bg-black min-h-screen flex flex-col justify-center items-center mx-auto -mt-10">
        <img className="w-64 h-64 mb-5 rounded-full" src={profile} alt="profile" />
        <div className='text-center mt-16'>
          <p className="mb-4 text-3xl tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-neutral-400 via-neutral-400 to-transparent">Hi!</p>
          <h1 className='text-5xl text-neutral-300 mb-12'>A. <span className='font-extrabold text-neutral-200'>Bilal</span> Akcan</h1>
          <h3 className='p-0 mb-2 tracking-widest text-2xl font-bold text-neutral-300'>UI/UX <span className='text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-indigo-900'>Engineer</span></h3>
          <h3 className='p-0 m-0 tracking-wide text-l font-mono select-none text-neutral-500'>{line}</h3>
        </div>
      </aside>
      <main className='text-neutral-300 text-center lg:max-w-3xl mx-auto lg:opacity-90 lg:hover:opacity-100 lg:transition-opacity lg:flex-1 min-h-screen bg-black flex flex-col lg:justify-center items-center'>
        <div className='text-neutral-200 my-10 text-2xl font-black flex justify-center items-center'>
          <Link to='/'>
            <svg className='fill-neutral-300' xmlns="http://www.w3.org/2000/svg" viewBox='0 0 60 60' width='20' height='20'><path d="M20 44 0 24 20 4l2.8 2.85L5.65 24 22.8 41.15Z"/></svg>
          </Link>
          <h2 className=''>Showcase</h2>
        </div>
        <ul className='list-none'>
          {projectList.map((project) => (
            <li key={project.id}>
              <a href={project.link} target="_blank" rel="noreferrer">
                <h3 className='text-neutral-200 text-2xl font-medium px-5 py-2 my-1'>{project.name}</h3>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
