import { Component }   from "react";
class ParaExercise extends Component {

    printSum = () => {
        const item1 = 10; //socks
        const quantityItem2 = 2;
        const item2 = 8;  //shirts
        const sum = item1 + (item2 * quantityItem2);
        return sum;
    }
    render() { 
        return (
            <div> 
                <span>One pair of socks : $10</span><br/>
                <span>Two shirts : $8</span><br/>
                <p>Product Cost: ${this.printSum()}</p>
            </div>
        );
    }
}
export default ParaExercise;