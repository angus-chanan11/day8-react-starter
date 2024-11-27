import { useState } from "react"

const CounterGroupGenerator = (props) => {
    const [size, setSize] = useState(0)
    const handleSizeChange = (event) => {
        const sizeInput = event.target.value

        if (sizeInput > 20)
            setSize(20)
        else if (sizeInput < 0)
            setSize(0)
        else if (sizeInput !== null)
            setSize(parseInt(sizeInput))
    }

    const handleReset = () => {
        props.setSize(size)
    }

    return <div>
        <span>Size:</span>
        <input min={0} max={20} type="number" value={size} onChange={handleSizeChange}/>
        <button onClick={handleReset}>reset</button>
    </div>
}

export default CounterGroupGenerator