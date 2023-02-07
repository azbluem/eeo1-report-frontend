import Multiselect from 'multiselect-react-dropdown'
import Select from 'react-select'
import { useState,useEffect, createRef } from 'react';

const AdvancedSort1DD = ({jobs,params,setParams}) => {
    const jobOptions = jobs.map(job=>({value:job,label:job}))
    const handleChange = (e) => {
        console.log(e)
        console.log('set params')
        setParams(e.map(job=>job.value))
    };
    return (<span><Select isMulti name='sortBy1' options={jobOptions} className="basic-multi-select"
    classNamePrefix="select" defaultValue={params.sortBy1.map(job=>({value:job,label:job}))} onChange={handleChange}/></span>);
    };
export default AdvancedSort1DD;