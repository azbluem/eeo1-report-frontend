import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa"

const Margaret = {
    name:'Margaret',
    description:'Product Roadmap, Product Vision, Front End, Page Design, Database Design, Search, Copywriting',
    email:'margaret@deivisualizer.me',
    linkedIn:'https://www.linkedin.com/in/y-margaret-lu/',
    github:'https://github.com/azbluem'
}

const LP = {
    name:'LP',
    description:'Data Pipeline, Data Processing, Back End, Database Design, Copywriting',
    email:'lp@deivisualizer.me',
    linkedIn:'https://www.linkedin.com/in/lp-wilson/',
    github:'https://github.com/theLP100'
}

const contactList = [LP,Margaret]

const ContactBox = ({name,description,email,linkedIn,github}) => {
    return <div className="contact">
        <h2 className="contact-header">Contact {name}</h2>
        <p className="contact-body">Project contributions: {description}</p>
        <div className="contact-icons">
            <a href={`mailto:${email}`}><FaEnvelope/></a>
            <a href={linkedIn}><FaLinkedin/></a>
            <a href={github}><FaGithub/></a>
        </div>
    </div>
}

function Contact () {
    const contactSquares = contactList.map((person)=>{return <div className="contact-box">
        <ContactBox key={person.name} name={person.name} description={person.description} 
            email={person.email} linkedIn={person.linkedIn} github={person.github}/>
    </div>})
    return <>
    <div className="orange">
    <div className="hero">
        <h2>Contact Us</h2>
        <p>We're looking for collaborators, EEO-1 reports from other companies 
            and cool people and companies to connect with! If you fit any of the above, drop us 
            an email or message us on LinkedIn!</p>
    </div></div>
    <div className="contact-container">
        {contactSquares}
        <p className="footer">Copyright Margaret Lu and LP Wilson 2023</p>
    </div></>
}

export default Contact