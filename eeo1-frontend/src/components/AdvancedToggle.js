import styled from "styled-components"

const Button = styled.button`
background-color: black;
color: white;
align-self: right;
top: 80px;
right: 10px;
max-width: 100px;
font-size: 1rem;
padding: 10px 10px;
border-radius: 5px;
margin: 0px 0px;
cursor: pointer;
`;

const AdvancedToggle = ({advancedMode,setAdvancedMode}) => {
    const changeAdvanced = () => {
        setAdvancedMode(!advancedMode)
    }
    const stringDict = {
        true:'Normal Mode',
        false:'Advanced Mode'
    }
    return (
        <span><Button onClick={()=>changeAdvanced()}>{stringDict[advancedMode]}</Button></span>
)
}
export default AdvancedToggle