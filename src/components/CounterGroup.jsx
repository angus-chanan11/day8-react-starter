import Counter from "./Counter";

const CounterGroup = (props) => {
    const counterList = Array.from({length: props.size})
        .map((item, index) => 
            <Counter index={index} key={index + Math.random()} setCountList={props.setCountList} countList={props.countList}/>
        )
    return (
        <div>{counterList}</div>
    )
}

export default CounterGroup