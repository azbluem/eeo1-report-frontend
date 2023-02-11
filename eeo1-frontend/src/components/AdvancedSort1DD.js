import Select from 'react-select'
import PropTypes from 'prop-types'

const AdvancedSort1DD = ({jobs,params,setParams}) => {
    const jobOptions = jobs.map(job=>({value:job,label:job}))
    const handleChange = (e) => {
        setParams(e.map(job=>job.value))
    };
    return (<span><Select isMulti name='sortBy1' options={jobOptions} className="basic-multi-select"
    classNamePrefix="select" placeholder='job function...' defaultValue={params.sortBy1.map(job=>({value:job,label:job}))} onChange={handleChange}/></span>);
};

AdvancedSort1DD.propTypes = {
    job:PropTypes.arrayOf(PropTypes.string),
    setParams:PropTypes.func.isRequired,
    params:PropTypes.shape({
        company:PropTypes.string.isRequired,
        year:PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
        sortBy1:PropTypes.array.isRequired,
        sortBy2:PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired
})
}

export default AdvancedSort1DD;

