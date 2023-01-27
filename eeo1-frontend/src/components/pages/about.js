import './about.css'

function About () {
    const US = () => {
        return (
            <section>
                <h2>Who are we?</h2>
                <p>We're LP and Margaret, two students attending software development bootcamp at  
                <a href='https://adadevelopersacademy.org/' alt='Link to Ada website'>Ada Developers Academy</a>. 
                This is our capstone project, and we chose to focus on diversity efforts in the tech sector because that's the field we're entering.
                </p>
                <p></p>
            </section>
        )
    }
    const Purpose = () => {
        return (
            <section>
                <h2>Why big tech diversity?</h2>
                <p>We are the incredibly lucky beneficiaries of a free bootcamp meant to support women, BIPOC and gender non-binary 
                folks in gaining skills to enter the technology workforce in a technology role. This bootcamp is cost-free to participants as it
                is supported by various corporate partners that pay for us to learn these skills. Some of us have leadership ambitions while others are 
                content to be individual contributors. We wanted to see what is the spread and chances we have to fulfill these ambitions. </p>
                <p>While it is true that achieving career ambitions is less a result of statistical probability and more in skills and networking, there still
                remains a pervasive idea of stereotypes as well as mentorship and modelling...
                </p>
            </section>
        )
    }
    const History = () => {
        return (
            <section>
                <h2>What is an Employement Equal Opportunity form (EEO-1)?</h2>
                <p>The EEO-1 is a report that is mandatory for private-sector US firms with 100+ employees (there are other EEO-numbered forms for
                government entities and educational institutions). The Employment Equal Opportunity Comission mandated that the reporting of employee demographics 
                (race, gender and job types) in 1966, with power granted by the Civil Rights Act.
                </p>
            </section>
        )
    }

    const Curriculum = () => {
        return (
            <section>
                <h2>What do we know?</h2>
                <p>Ada teaches us full stack web development in Python and Javascript; our main technologies are Postgres, Flask and React.</p>
                <p>LP has a certificate in data science from University of Washington and was previously a math teacher in the Roosevelt school district.</p>
                <p>Margaret was previously a clinical pharmacist and programs director at a healthtech start up.</p>
            </section>
        )
    }
    return (<div>
        <US/>
        <Purpose/>
        <History/>
        <Curriculum/>
    </div>)
}

export default About