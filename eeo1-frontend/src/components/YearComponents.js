const YearComponents = ({listOfYears}) => {
    for (const year of listOfYears){
        return <option value={year}>{year}</option>
    }
}
export default YearComponents