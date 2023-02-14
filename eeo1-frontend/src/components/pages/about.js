// import './about.css'
import FAQDict from '../about/FAQDict'
import { useState } from 'react'


const Summary = () => {
    return (
        <section className='hero'>
            <h2>DEI Visualizer</h2>
            <p padding-right='25px'>...is a project that visualizes company reported diversity statistics for laypersons to view. 
                Our aim is to bring clarity to the question 'what is the current proportion of diverse workers in tech?'
                We're doing this graphically to be succinct, illutrative and easy to understand.</p>
        </section>
    )
}

const US = () => {
    return (
        <section>
            <h2>Who are we?</h2>
            <p>We're LP and Margaret, two students attending software development bootcamp at ‎ 
            <a href='https://adadevelopersacademy.org/' alt='Link to Ada website'> Ada Developers Academy</a>. 
            This is our capstone project, and we chose to focus on diversity efforts in the tech sector because that's the field we're entering.
            We also think this is an important illustrate these reports with absolute numbers as well as percentages because it's very easy for 
            relative percentages to obfuscate data and confuse readers.
            </p>
            <p></p>
        </section>
    )
}

const LP = () => {
    return (
        <section>
            <h2 className='profile-header'>About LP</h2>
            <br/>
            <span className='profile'><img src='https://ca.slack-edge.com/T03QFTX4W30-U03QYCW6RKL-ee0702e0cb19-512' alt='Pic of LP'/>
            <p>LP Wilson has a Bachelor's in Mathematics from Scripps College, a Master's in Education from Stanford, and a Professional Certificate 
                in Data Science from the University of Washington.  After 10 years teaching math and tech to middle and high school students, 
                they are pivoting to Data Engineering and software development.  They are currently interning with Amazon AWS Distributed SQL.
                They can be reached at <a href='mailto:lp@deivisualizer.me'>their email here</a> or
                <a href='https://www.linkedin.com/in/lp-wilson/'> their linkedIn</a>.</p></span>
            
        </section>
    )
}

const Margaret = () => {
    return <section>
        <h2 className='profile-header'>About Margaret</h2>
        <br/>
        <span className='profile'><img src='https://azbluem.github.io/portfolio/assets/Screenshot%202022-08-16%20at%206.26.03%20PM.png' alt='Pic of Margaret'/>
        <p>Margaret was previously a registered clinical pharmacist and programs director at a healthtech start up in Vancouver, Canada. She has a Bachelor's in Immunology from
                McGill University and a Doctorate of Pharmacy from University of British Columbia. She is interested advancing health education and equity through technology and is 
                interning with the AWS S3 Volume Placement team. You can reach her <a href='mailto:margaret@deivisualizer.me'>at her email</a> or ‎ 
                <a href='https://www.linkedin.com/in/y-margaret-lu/'>connect with her on linkedIn</a>.
            </p></span>
    </section>
}

const Question = ({id,title,answer}) => {
    const [isActive, setIsActive] = useState(false);
    return(
        <div key={id} className="accordion">
            <div className="accordion-item">
                <div
                className="accordion-title"
                onClick={() => setIsActive(!isActive)}
                >
                    <div><span>{title}</span> <span>{isActive ? '-' : '+'}</span></div> 
                </div>
            {isActive && <div className="accordion-content">{answer}</div>}
        </div>
        </div>
    )
}
const FAQ = () => {
    const sliders = FAQDict.map((entry=> {
        return <Question key={entry.id} id={entry.id} title={entry.title} answer={entry.answer}/>
    }))
    return <div id='FAQ'>
        <h2>Frequently Asked Questions</h2>
        {sliders}
        </div>
}

function About () {
    return (<div>
        <> </>
        <div className='orange'>
        <Summary/>
        <> </>
        </div>
        <div className='about'><US/></div>
        <div className='about'>
            <Margaret/></div>
        <div className='about'>
            <LP/></div>
        <div className='FAQ' id='FAQ'>
            <FAQ/>
        </div>
    </div>)
}

export default About