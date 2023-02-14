import GraphCarousel from '../findings/Carousel'

const datapipeline = require('../../images/datapipeline.png')
const amRace2021 = require('../../images/AmazRace2021.png')
const amlink1 = 'https://techcrunch.com/2023/01/18/amazon-fined-by-regulators-for-unsafe-warehouse-work-conditions/'
const amlink2 = 'https://www.cnbc.com/2023/01/18/amazon-cited-by-osha-for-exposing-warehouse-workers-to-safety-hazards.html'

const AmAsJ = require('../../images/AmAsJ.png')
const AmBlJ = require('../../images/AmBlJ.png')
const AmHLJ = require('../../images/AmLHJ.png')
const AmWhJ = require('../../images/AmWhJ.png')

const AmDict1 = [
    {
        img:AmWhJ,
        desc:'Job Distributions of White Amazon Employees'
    },
    {
        img:AmAsJ,
        desc:'Job Distributions of Asian Amazon Employees'
    },
    {
        img:AmBlJ,
        desc: 'Job Distributions of Black Amazon Employees'
    },
    {
        img:AmHLJ,
        desc: 'Job Distributions of Hispanic and Latino Amazon Employees'
    }
]

const FindingsHeader = () => {
    return(
        <div className="orange">
            <div className="hero">
                <h2>Methods and Findings</h2>
                <p>We want to document our method and present some additional findings that are not currently
                    in production to better illustrate diversity in the big tech sector.
                </p>
            </div>
        </div>
    )
}

const Methods = () => {
    return <section className="finding-section">
        <h2>Methods and Pipeline</h2>
        <p>
        We created a data pipeline and an app to process and display companies’ reported 
        Equal Employment Opportunity (EEO1) data.  Our goal is to make visible the demographic 
        breakdowns that are commonly obscured in companies’ public-facing diversity websites.  </p>
        <img src={datapipeline} width='100%' max-height='300px' alt='Data Pipeline'/>
        <p>Companies are required to report this information to the government, 
            but they rarely release it to the public, and when they do, they release it as a PDF or even a PNG.  
            We created a pipeline to efficiently read this data and put it into a query-able database, 
            so that the layperson can explore the demographics of these companies by race, gender, and job category. 
        </p>
    </section>
}

const FindingsIntro = () => {
    return <section className='finding-section'>
        <h2>Findings</h2>
        <p>
        This EEO1 data is broken down by gender, race, and job category.  
        We noticed that this had potential to show what companies generally obscure in 
        aggregated statistics, such as company-wide gender percentages. The next section has examples of 
        how finer granularity can increase visibility into disproportionate representation.
        </p>
    </section>
}

const Findings1 = () => {
    return <section className='finding-section'>
        <h2>Races at Amazon</h2>
        <div>
        <p>Amazon's workforce looks to be the most diverse amongst large tech companies with people who 
            identify as Black or African American and people who identify as Latino or Hispanic each representing 
            about one quarter of the workforce respectively. </p><p>
            However, this representation does not equate to economic advancement or 
            stability on further inspection. The majority, approximately 80% of workers in these racial groups 
            are identified to be in the 'Labourers and Helpers' profession, which would include warehouse 
            and delivery staff. The reported conditions of these warehouses <a href={amlink2}>have been cited</a> to 
            <a href={amlink1}> be in violation of several OSHA requirements</a>. This 
            is in contrast to 53% of White Amazon employees and 44% of Asian Amazon employees.
        </p>
        </div>
        <div className='sidebyside'>
        <img src={amRace2021} alt="Amazon employee race distribution 2021" width='80%'/>
        <GraphCarousel imgList={AmDict1}/>
        </div>
        <p className='small-text'>Graphics of proportion of Amazon workers in a job category by race. Labourers and Helpers 
            is in lime green on the waffle chart.
        </p>
    </section>
}

const Findings2 = () => {
    return <section className='finding-section'>
        <h2>Genders at Alphabet</h2>
        <p>This section is in development, check back later!</p>
    </section>
}

const FindingsSumamry = () => {
    return (
        <section className='finding-section'>
            <h2>Findings Conclusion</h2>
            <p>
            In summary, we found a higher proportion of folks of color and women in roles that receive lower 
            compensation. his project is only the beginning.  We hope to include more EEO1s as we can find them.  
            Also, we would like to do more data analysis on this database.  </p>
            <p>T
            We were originally interested in the trends in company diversity.  
            Are gender and race representations getting more proportional, or less proportional 
            in tech companies across different job categories?  How do the tech layoffs in late 2022 - early 
            2023 affect the demographics of these companies?  As 2022 and 2023 EEO1 data become available, 
            we hope to be able to answer these questions.  

            </p>
        </section>
    )
}

const Limitations = () => {
    return (<section className="finding-section"><h2>Project Limitations</h2>
<p> One limitation is that we are using the EEO1 data reported by companies in the format of 
    the government-provided form.  This form has set categories for race and gender. </p> 
    <p>
    In particular, gender is only reported as “Male” or “Female,” which does not represent non-binary folks 
    and does not illuminate inclusion (or exclusion) of trans folks. </p>
    <p>Race is limited to the following options, which were chosen in 1966</p>
    <ul>
<li>White</li>
<li>Hispanic or Latino</li>
<li>Black or African American</li>
<li>Native Hawaiian or Pacific Islander</li>
<li>American Indian or Alaska Native</li>
<li>Two or More Races</li>
</ul>
<p>Employees were only counted in one of these categories, which simplifies the model but erases complexity.
    This is especially evident in the 'Hispanic or Latino' category, which would supercede other 
    racial self identifications.</p>
<p> Another consideration in diversity is disability status, which is not captured in the EEO-1 report form but a 
    separate form under the US Rehabilitation Act of 1973, which is still under the purview of the US 
    Equal Employment Opportunity Commission.
<p> Other shortfalls of our source data to examine diversity include the lack of reporting of sexual orientation 
    and neurodiversity.</p>
<p> Additionally, most of the companies reported their labor force for a pay period between 2 weeks to 1 month, 
    for example October 1 - October 31st.  This means that seasonal employees were not captured in this data.</p>

This data also doesn’t capture retention.  There’s no way to know how long each of the employees reported have been working at that company.

Outside the scope of this project is the practice of companies such as Apple and Alphabet contracting out for food service workers and other laborers, for example.  Contracting this out allows them to work with companies that may have unfair labor practices.  The makeup of this contracted workforce is not reflected in these EEO1s.
</p></section>)
}

function Findings () {
    return <div>
        <FindingsHeader/>
        <Methods/>
        <FindingsIntro/>
        <Findings1/>
        <Findings2/>
        <FindingsSumamry/>
        <Limitations/>
        <p className="footer">Copyright Margaret Lu and LP Wilson 2023</p>
    </div>
}

export default Findings