import { useState } from "react"

const CounterGroupGenerator = (props) => {
    const MAX_SIZE = 20
    const MIN_SIZE = 0 

    const [size, setSize] = useState(0)
    const handleSizeChange = (event) => {
        const sizeInput = event.target.value

        if (sizeInput > MAX_SIZE)
            setSize(MAX_SIZE)
        else if (sizeInput < MIN_SIZE)
            setSize(MIN_SIZE)
        else if (sizeInput !== null && sizeInput !== props.size){
            setSize(parseInt(sizeInput))
        }
    }

    const handleReset = () => {
        if (size !== props.size){
            props.setSize(size)
        }
    }

    return <div>
        <span>Size:</span>
        <input min={MIN_SIZE} max={MAX_SIZE} type="number" value={size} onChange={handleSizeChange}/>
        <button onClick={handleReset}>reset</button>
    </div>
}

export default CounterGroupGenerator