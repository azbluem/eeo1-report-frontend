import YearComponents from './YearComponents'

// const YEARS = [2019,2020]
const YearDropDown = ({params,setParams,companyList}) => {
    const availableYears = companyList[params.company].years || []
    const YearSelectors = availableYears.map((date)=>
    {return (
        <YearComponents key={date}
        date={date}/>
    )})
    return (
        <span>
            <select name='year' value={params.year} onChange={setParams}>
                {YearSelectors}
            </select>
        </span>
    )
};

export default YearDropDown