const CounterGroupSum = (props) => {
    return <div>
        <span>Sum: </span>
        <span>{props.countList.reduce((sum, count) => sum + count, 0)}</span>
    </div>
}

export default CounterGroupSum