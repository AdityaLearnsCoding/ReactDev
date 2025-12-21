const Solution3C = (props) => {

    return (
        <>
            <button onClick={props.updateCount}>Clicked {props.count} time{props.count !== 1 && <span>s</span>}</button>
        </>
    );
}
export default Solution3C;