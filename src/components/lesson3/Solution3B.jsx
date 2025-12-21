import { useState } from 'react';

const Solution3B = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <>
            <button onClick={handleClick}>Clicked {count} time{count !== 1 && <span>s</span>}</button>
        </>
    );
}
export default Solution3B;