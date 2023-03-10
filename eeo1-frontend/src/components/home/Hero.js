import {Link} from 'react-router-dom'

const Hero = () => {
    return (<div>
        <h1>Big Tech Diversity Visualization</h1>
        <p>Big Tech companies have released their equal employment opportunity reports for years, touting diversity. This is a tool to help visualize how diverse these companies report to be.</p>
        <Link to='./about'>Who are we and why this project?</Link>
        <br/>
        <a alt='Double Union Open Diversity Data' href='http://opendiversitydata.org/'>Open Diversity Data Project   </a>
        <br/>
        <a alt='US Office of Equal Employment Opportunity' href='https://www.eeoc.gov/'>US Office of Equal Employment Opportunity</a>
        </div>)
}
export default Hero