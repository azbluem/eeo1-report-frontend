
const Amazon = () => {
    return <p>
        Amazon's EEO-1 report includes workers at acquired companies such as Whole Foods and Zappos. 
        The EEO-1s we have from Amazon are for the month of October pay period, we do not know if these numbers reflect
        warehouse seasonal staffing for the HalloThanksMas season.
    </p>
}

const Alphabet = () => {
    return <p>Alphabet's EEO-1 report includes workers not only from Google, but also Alphabet's 'other bets',
        such as Verily, Waymo and X. It however, does not include the estimated 
        <a href='https://www.hbs.edu/faculty/Pages/item.aspx?num=56878'> 50% of temps, vendors and contractors (TVCs) </a>working at Google offices.
    </p>
}

const Microsoft = () => {
    return <p>
        Microsoft's EEO-1 reports were supplied by a public API query endpoint on their CMS. The majority of 
        reports we found on this API do not have a payroll period on them.
    </p>
}

const Facebook = () => {
    return <p>
        Facebook's EEO-1 reports are filed before their name change to Meta. These reports do not have a pay period 
        attached to them.
    </p>
}

const Cisco = () => {
    return <p>
        Cisco's EEO-1 reports are based on a 1 or 2 day pay period, we are unsure if how this affects their numbers.
        Many other employers use either a 2 week or 1 month pay period on their EEO-1 report.
    </p>
}

const Netflix = () => {
    return <p>
        Netflix's 2019 EEO-1 report was filed with a 2 day pay period Dec 30-31 of 2019. This may have resulted in 
        the much lower than reported total employee count. The commonly accepted total employee count for 2019 is in 
        the 9000s. Previous EEO-1 reports to this year were reported in a 2 week pay period in December. We are unsure 
        of the reason for the switch.
    </p>
}

const COMPANYNOTES = {
    'Amazon':<Amazon/>,
    'Alphabet':<Alphabet/>,
    'Microsoft':<Microsoft/>,
    'Facebook':<Facebook/>,
    'Cisco':<Cisco/>,
    'Netflix':<Netflix/>
};

export default COMPANYNOTES