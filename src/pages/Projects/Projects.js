import profile from '../../assets/profile.jpg'

const line = "{/*Tech Enthusiast*/}"

export default function Projects() {
  return (
    <div className='min-h-screen lg:px-16 lg:flex bg-black justify-between'>
      <aside className="hidden lg:flex lg:lg:max-w-lg bg-black min-h-screen flex-col justify-center items-center mx-auto -mt-10">
        <img className="w-64 h-64 mb-5 rounded-full" src={profile} alt="profile" />
        <div className='text-center mt-16'>
          <p className="mb-4 text-3xl tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-neutral-400 via-neutral-400 to-transparent">Hi!</p>
          <h1 className='text-5xl text-neutral-300 mb-12'>A. <span className='font-extrabold text-neutral-200'>Bilal</span> Akcan</h1>
          <h3 className='p-0 mb-2 tracking-widest text-2xl font-bold text-neutral-300'>UI/UX <span className='text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-indigo-900'>Engineer</span></h3>
          <h3 className='p-0 m-0 tracking-wide text-l font-mono select-none text-neutral-500'>{line}</h3>
        </div>
      </aside>
      <main className='text-neutral-300 text-center lg:max-w-3xl mx-auto lg:opacity-90 lg:hover:opacity-100 lg:transition-opacity lg:flex-1 min-h-screen bg-black flex flex-col lg:justify-center gap-20 md:gap-0'>
        <h2 className='text-neutral-200 my-10 text-2xl font-black'>Showcase</h2>
      </main>
    </div>
  )
}
