import { Component }   from "react";
class ParaExercise extends Component {
    printSum = () => {
        const item1 = 10; //socks
        const quantityItem2 = 2;
        const item2 = 8;  //shirts
        const sum = item1 + (item2 * quantityItem2);
        console.log("" + sum);
    }
    render() { 
        return (
            <div> 
                <span>One pair of socks : $10</span><br/>
                <span>Two shirts : $8</span><br/>
                <button onClick={this.printSum}>Calculate Total</button>
            </div>
        );
    }
}
export default ParaExercise;