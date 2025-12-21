const Solution3B = ({count,updateCount}) => {

    return (
        <>
            <button onClick={updateCount}>Clicked {count} time{count !== 1 && <span>s</span>}</button>
        </>
    );
}
export default Solution3B;