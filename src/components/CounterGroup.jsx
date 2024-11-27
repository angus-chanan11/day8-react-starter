import Counter from "./Counter";

const CounterGroup = (props) => {
    const counterList = Array.from({length: props.size})
        .map((item, index) => 
            <Counter key={index + Math.random()}/>
        )
    return (
        <div>{counterList}</div>
    )
}

export default CounterGroup