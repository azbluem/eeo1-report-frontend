import styled from "styled-components"
import PropTypes from 'prop-types'

const Button = styled.button`
background-color: #63D471;
color: white;
align-self: right;
top: 80px;
right: 25px;
@media (max-width: 500px) {
    right: 50px}
width: 100px;
font-size: 1rem;
padding: 10px 10px;
border-radius: 5px;
border-color: '#A0A0A0';
margin: 0px 10px;
cursor: pointer;
z-index:11;
`;

const AdvancedToggle = ({advancedMode,setAdvancedMode}) => {
    const changeAdvanced = () => {
        setAdvancedMode(!advancedMode)
    }
    const stringDict = {
        true:'Basic Mode',
        false:'Advanced Mode'
    }
    return (
        <span><Button onClick={()=>changeAdvanced()}>{stringDict[advancedMode]}</Button></span>
)
}

AdvancedToggle.propTypes = {
    advancedMode:PropTypes.bool.isRequired,
    setAdvancedMode:PropTypes.func.isRequired
}

export default AdvancedToggle