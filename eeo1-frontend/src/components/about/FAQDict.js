import {HashLink} from 'react-router-hash-link'

const Purpose = () => {
    return (
        <section>
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
            <p>The US Equal Employment Opportunity Comission has a 
            <a href='https://www.eeoc.gov/sites/default/files/migrated_files/employers/eeo1/jobclassguide.pdf'> 42 paged book on this. </a>
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

const Companies = () => {
    return (
        <section>
            <p>EEO-1 reports are filed with the government and not typically publically released. The companies featured on this website
        have released their EEO-1 reports for us to look at and analyze. If you have EEO-1 reports from another company you'd like for
        us to share and visualize, please <HashLink to='../eeo1-report-frontend/contact'>contact us.</HashLink> Our goal is to put up EEO-1 reports for companies for multiple
        years to see progress and change.</p>
        </section>
    )
}

const OtherDiversity = () => {
    return(
        <section>
            <p>The data source we use, EEO-1 reports, only reports the race and binary gender of employees in a given pay period.
                We understand that there are other factors and considerations in diversity such as sexual orientation, 
                disability status, neurodiversity and expansive genders. We do not have access to a reliable, standardized form of
                this data from various companies, so we cannot show it. This project is just the tip of the iceberg of 
                diversity visualization and we hope to be able to discover accessible data to expand into the above
                considerations.
            </p>
        </section>
    )
}

const FAQDict = [
    {id:1,
    title:'Why big tech diversity?',
    answer:<Purpose/>}
,
    {id:2,
    title:'What is an Employment Equal Opportunity form (EEO-1)?',
    answer:<History/>}
,
    {id:3,
    title:'What is a Professional, Craft Worker, Labourer, etc?',
    answer:<Jobs/>},
    {id:4,
    title:'Why are we looking at specific companies?',
    answer:<Companies/>},
    {id:5,
    title:'Why does your data not show disability status, sexual orientation, etc?',
    answer: <OtherDiversity/>}
]

export default FAQDict