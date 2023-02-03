import styled from "styled-components"

const Button = styled.button`
background-color: black;
color: white;
font-size: 20px;
padding: 10px 60px;
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
        <Button onClick={()=>changeAdvanced()}>{advString}</Button>
)
}
export default AdvancedToggle