import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Contact.css'

const contacts = [
  {name:'linkedIn', link:'https://www.linkedin.com/in/ahmet-bilal-akcan-648259133/'},
  {name:'instagram', link:'https://www.instagram.com/bllakcn/'},
  {name:'twitter', link:'https://twitter.com/bllakcn'},
  {name:'email', link:'bllakcn35@gmail.com'},
]


export default function Contact() {
  return (
    <section className='bg-black text-neutral-300 pb-16 flex flex-col justify-center'>
      <h2 className='z-10 text-center text-neutral-200 text-xl my-10'><span className='highlight-contact relative z-10 text-2xl font-black'>Contact</span> Me</h2>
      <div className='contact-items flex gap-5 justify-center py-8'>
        <a href={contacts[0].link} target='_blank'rel="noreferrer">
          <FontAwesomeIcon size='2xl' icon="fa-brands fa-linkedin" />
        </a>
        <a href={contacts[1].link} target='_blank' rel="noreferrer">
          <FontAwesomeIcon size='2xl' icon="fa-brands fa-square-instagram" />
        </a>
        <a href={contacts[2].link} target='_blank'rel="noreferrer">
          <FontAwesomeIcon size='2xl' icon="fa-brands fa-square-twitter" />
        </a>
        <a href={`mailto:${contacts[3].link}`} target='_blank'rel="noreferrer">
          <FontAwesomeIcon size='2xl' icon="fa-solid fa-square-envelope" />
        </a>
      </div>
    </section>
  )
}
