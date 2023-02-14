
const FindingsHeader = () => {
    return(
        <div className="orange">
            <div className="hero">
                <h2>Methods and Findings of DEI Visualizer</h2>
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
        <img src='azbluem.github.io/eeo1-frontend/public/datapipeline.png' alt='Data Pipeline'/>
        <p>Companies are required to report this information to the government, 
            but they rarely release it to the public, and when they do, they release it as a PDF or even a PNG.  
            We created a pipeline to efficiently read this data and put it into a query-able database, 
            so that the layperson can explore the demographics of these companies by race, gender, and job category. 
        </p>
    </section>
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
        <Limitations/>
    </div>
}

export default Findings