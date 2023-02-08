import { useState } from "react"

import InstructionToggleButton from "./InstructionToggleButton"

const AdvancedModeInstructions = () => {
    const [ADVInstructions, setadvInstructions] = useState(true)
    let instuctionStr = ""
    if (ADVInstructions) {
        instuctionStr = <p className='small-text'>Instructions for advanced mode:
        <ul>
        <li>Advanced mode allows you to pick multiple job titles to view by either gender or race. </li>
        <li>The order the stacked pie chart will display is inwards out, from the top selection to the final selection. </li>
        <li>If you select all years, you will only be able to see one job functional group with smallest year in the center.</li>
        <li> If you have multiple groups selected when you choose all years, you'll only see the first job function group.</li>
        </ul></p>
    }
    return <span>
    {instuctionStr}
    <InstructionToggleButton ADVInstructions={ADVInstructions} setadvInstructions={setadvInstructions}/>
    </span>
}
export default AdvancedModeInstructions