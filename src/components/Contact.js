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
          {/* <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" class="svg-inline--fa fa-linkedin fa-2xl " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg> */}
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
