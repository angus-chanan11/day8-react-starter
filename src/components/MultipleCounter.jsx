import { useEffect, useState } from "react"
import CounterGroupGenerator from "./CounterGroupGenerator"
import CounterGroup from "./CounterGroup"
import "./MultipleCounter.css";
import CounterGroupSum from "./CounterGroupSum";

const MultipleCounter = () => {
    const [size, setSize] = useState(0)
    const [countList, setCountList] = useState([])

    useEffect(() => {
        setCountList(Array(size).fill(0))
    }, [size])

    return <div className="multiple-counter-wrapper">
        <CounterGroupGenerator setSize={setSize}/>
        <CounterGroupSum countList={countList}/>
        <CounterGroup size={size} countList={countList} setCountList={setCountList}/>
    </div>
}

export default MultipleCounter