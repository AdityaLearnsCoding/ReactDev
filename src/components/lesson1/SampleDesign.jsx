import { Component }   from "react";
import ButtonExercise from "./ButtonExercise";
class SampleDesign extends Component {
    render() { 
        return (
            <div> 
                <span>Cotton Socks</span><br/>
                <span>Price: $5</span>
                <ButtonExercise value="Add to Cart"/>
            </div>
        );
    }
}
export default SampleDesign;