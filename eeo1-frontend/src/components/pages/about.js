import './about.css'

function About () {
    const Summary = () => {
        return (
            <section>
                <h2>DEI Visualizer</h2>
                <p>...is a project that visualizes company reported statistics for public consumption.</p>
            </section>
        )
    }


    const US = () => {
        return (
            <section>
                <h2>Who are we?</h2>
                <p>We're LP and Margaret, two students attending software development bootcamp at  
                <a href='https://adadevelopersacademy.org/' alt='Link to Ada website'>Ada Developers Academy</a>. 
                This is our capstone project, and we chose to focus on diversity efforts in the tech sector because that's the field we're entering.
                We also think this is an important realm to bring attention to in the workforce because
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

    const Jobs = () => {
        return (
            <section>
                <h2> What is a Professional, Craft Worker, Labourer, etc?</h2>
                <p>The US Equal Employment Opportunity Comission has a 
                <a href='https://www.eeoc.gov/sites/default/files/migrated_files/employers/eeo1/jobclassguide.pdf'>42 paged book on this.</a>
                It's a highly recommended read if you're looking for a specific job title.
                This document is from the early 2000s.</p>
                <p>The short answer for a explaination of each role can be found below:</p>
                <ul>
                    <li>Exec - CEOs, VP or directors, jobs that decide high level strategy</li>
                    <li>First&Mid Managers - Line management jobs that may oversee operations and implement programs and policies</li>
                    <li>Professionals - Individual contributor roles, typically with higher education or credentials like 
                        programmers, accountants, buyers, HR specialists, engineers, analysts, scientists, creatives, pilots and licensed professionals 
                        like doctors and lawyers.
                    </li>
                    <li>Technicians - Individual contributor jobs with specialized training that may help professionals. Examples include 
                        clinical lab techs, dental hygeinists, drafters, research technicians, paramedics and radio operators.
                    </li>
                    <li>Sales Workers - Customer facing sales roles like retail managers, models, real estate brokers
                        clerks, cashiers and sales people in ads, insurance, telemarketing and travel.
                    </li>
                    <li>
                        Administrative Support Workers - Jobs that support business administration such as bookkeeping clerks,
                        dispatchers, data entry clerks, mail carriers and receptionists.
                    </li>
                    <li>
                        Craft Workers - Skilled construction and maintenance jobs and supervisors of these roles. Examples include:
                        boilmakers, carpeters, masons, elevator maintenance people, electricians, HVAC mechanics, locksmiths, machinists and crane workers.
                    </li>
                    <li>
                        Operative - Roles that operate specialised machinery like printers, bus drivers, parking lot attendants and butchers.
                    </li>
                    <li>
                        Laborers and Helpers - Roles that do general physical labour such as warehouse workers or construction general labor.
                    </li>
                    <li>
                        Service Workers - Roles that provide services in sectors like childcare, security, janitorial, housekeeping or pest control.
                    </li>
                </ul>
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
        <Summary/>
        <US/>
        <Purpose/>
        <History/>
        <Jobs/>
        <Curriculum/>
    </div>)
}

export default About