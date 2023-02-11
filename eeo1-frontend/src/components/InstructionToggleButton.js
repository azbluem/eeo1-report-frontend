import PropTypes from 'prop-types'

const InstructionToggleButton = ({ADVInstructions,setadvInstructions}) => {
    return (
        <button onClick = {()=>setadvInstructions(!ADVInstructions)}>Toggle Instructions</button>
    )
}

InstructionToggleButton.propTypes = {
    ADVInstructions:PropTypes.bool.isRequired,
    setadvInstructions:PropTypes.func.isRequired
}

export default InstructionToggleButton