import styled from "styled-components"

const Button = styled.button`
background-color: black;
color: white;
position: absolute;
top: 80px;
right: 10px;
max-width: 100px;
font-size: 24px;
padding: 10px 10px;
border-radius: 5px;
margin: 10px 0px;
cursor: pointer;
`;

const AdvancedToggle = ({advancedMode,setAdvancedMode}) => {
    const changeAdvanced = () => {
        setAdvancedMode(!advancedMode)
    }
    const advString = () => {
    if (advancedMode) {
        return 'Normal Mode'
    } else {
        return 'Advanced Mode'
    }
    }
    return (
        <span><Button onClick={()=>changeAdvanced()}>Toggle Modes</Button></span>
)
}
export default AdvancedToggle