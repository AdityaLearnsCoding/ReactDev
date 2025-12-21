import { Component }   from "react";
class Solution3A extends Component {
    handleClick = () => {
        console.log("Clicked");
    }
    render() { 
        return (
            <>
                <button onClick={handleClick}>Clicked 0 times</button>
            </>
        );
    }
}
export default Solution3A;