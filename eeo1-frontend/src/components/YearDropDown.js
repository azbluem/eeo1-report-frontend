import YearComponents from './YearComponents'

// const YEARS = [2019,2020]
const YearDropDown = ({params,setParams,companyList}) => {
    const availableYears = companyList[params.company] || []
    const YearSelectors = availableYears.map((date)=>
    {return (
        <YearComponents key={date}
        date={date}/>
    )})
    console.log(params.company,params.year,params.sortBy)
    return (
        <span>
            <select name='year' value={params.year} onChange={setParams}>
                {YearSelectors}
            </select>
        </span>
    )
};

export default YearDropDown