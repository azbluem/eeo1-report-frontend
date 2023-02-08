const InstructionToggleButton = ({ADVInstructions,setadvInstructions}) => {
    return (
        <button onClick = {()=>setadvInstructions(!ADVInstructions)}>Toggle Instructions</button>
    )
}
export default InstructionToggleButton