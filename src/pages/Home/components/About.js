import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
  return (
    <section className='relative bg-black text-neutral-300 flex flex-col justify-center items-center pb-16'>
      <div className='absolute md:hidden bg-neutral-800 w-11/12 h-60 left-5 top-2 -rotate-3'></div>
      <h2 className='z-10 text-center text-neutral-200 text-xl my-10'><span className='highlight-about relative z-10 text-2xl font-black'>About</span> Me</h2>
      <div className='z-10 text-center w-11/12 mx-auto max-w-lg'>
        <p><b>Architecture</b> graduate freelancing in <b>tech</b>. Passionate about <b>designing</b> and <b>developing</b> that great <b className='underline decoration-wavy'>user experience</b>.</p>
      </div>
      <Link className='z-10 mt-5 underline-btn' to='/projects'>Take a look at the projects</Link>
    </section>
  )
}
