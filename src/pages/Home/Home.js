import profile from '../../assets/profile.jpg'
import Skills from '../../components/Skills'
import About from '../../components/About' 
import Contact from '../../components/Contact'
import './Home.css'

const line = "{/*Tech Enthusiast*/}"

export default function Home() {
  return (
    <div>
      <main className='lg:flex bg-black justify-between'>
        <header className="lg:flex-1 lg:max-w-xl bg-black min-h-screen flex flex-col justify-center items-center mx-auto">
          <img className="w-64 h-64 mb-5 rounded-full" src={profile} alt="profile" />
          <div className='text-center mt-16'>
            <p className="mb-4 text-3xl tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-neutral-400 via-neutral-400 to-transparent">Hi!</p>
            <h1 className='text-5xl text-neutral-300 mb-12'>A. <span className='font-extrabold text-neutral-200'>Bilal</span> Akcan</h1>
            <h3 className='p-0 mb-2 tracking-widest text-2xl font-bold text-neutral-300'>UI/UX <span className='text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-indigo-900'>Engineer</span></h3>
            <h3 className='p-0 m-0 tracking-wide text-l font-mono select-none text-neutral-500'>{line}</h3>
          </div>
        </header>
        <div className='lg:opacity-90 lg:hover:opacity-100 lg:transition-opacity lg:flex-1 min-h-screen bg-black flex flex-col justify-center gap-20 md:gap-0'>
          <About></About>
          <Skills></Skills>
          <Contact></Contact>
        </div>
      </main>
      <footer className='lg:absolute lg:w-full lg:bottom-0 select-none text-center text-neutral-400 px-5 py-3 font-thin tracking-wider text-sm bg-black'>Coded with ❤ by Bilal</footer>
    </div>
  )
}
