import Multiselect from 'multiselect-react-dropdown'
import { useState,useEffect } from 'react';

const AdvancedSort1DD = ({jobs,params,setParams}) => {
    const [jobList,setJobList] = useState([{key:'Exec/Sr. Officials & Mgrs'}])
    const jobOptions = jobs.map(job=>({key:job}))
    const addJob = (e) => {
        console.log(e)
        // setParams(e.map(job=>job.key))
        // setParams(tempJobList.map(job=>job.key))
        // console.log(jobList,'set job list')
        // setJobList(e)
        // if (e.length>0) {
        // setParams(e.map(job=>job.key))
    };
    const removeJob = (e) => {
        console.log(e)
        setJobList(e)
        setParams(e.map(job=>job.key))
    };
    useEffect(()=>console.log('rerender'),[jobList])
    console.log(jobList)
    return (<span><Multiselect options={jobOptions} selectedValues={jobList} onSelect={(e)=>{this.onSelect();addJob(e)}} onRemove={(e)=>{this.onRemove();removeJob(e)}} showCheckbox='true' isObject='true' displayValue='key'/></span>);
    };
export default AdvancedSort1DD;