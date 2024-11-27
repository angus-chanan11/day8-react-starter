import "./Counter.css";

const Counter = (props) => {
    const CHANGE_STEP = 1;

    const increment = () => {
        let countList = props.countList.slice();
        countList[props.index] += CHANGE_STEP;
        props.setCountList(countList);
    }

    const decrement = () => {
        let countList = props.countList.slice();
        countList[props.index] -= CHANGE_STEP;
        props.setCountList(countList);
    }

    return <div className="Counter">
        <button onClick={increment}>+</button>
        <span>{props.countList[props.index]}</span>
        <button onClick={decrement}>-</button>
    </div>
}

export default Counter;