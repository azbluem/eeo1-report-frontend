import InstructionToggleButton from "./InstructionToggleButton"

const AdvancedModeInstructions = ({ADVInstructions, setadvInstructions}) => {
    let instuctionStr = ""
    if (ADVInstructions) {
        instuctionStr = <><h3 className='small-text'>Instructions for advanced mode:</h3>
        <ul>
        <li>Advanced mode allows you to pick multiple job titles to view by either gender or race. </li>
        <li>The order the stacked pie chart will display is inwards out, from the top selection to the final selection. </li>
        <li>If you select all years, you will only be able to see one job functional group with smallest year in the center.</li>
        <li> If you have multiple groups selected when you choose all years, you'll only see the first job function group.</li>
        <li>To see an explanation of job functions, please see <a alt='our FAQ' href='./eeo1-report-frontend/about#FAQ'>our FAQ.</a></li>
        </ul></>
    }
    return <span>
    {instuctionStr}
    <InstructionToggleButton ADVInstructions={ADVInstructions} setadvInstructions={setadvInstructions}/>
    </span>
}
export default AdvancedModeInstructions