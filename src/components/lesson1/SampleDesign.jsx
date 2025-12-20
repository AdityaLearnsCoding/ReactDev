import { Component }   from "react";
import ButtonExercise from "./ButtonExercise";
class ParaExercise extends Component {
    render() { 
        return (
            <div> 
                <hr/>
                <span>Cotton Socks</span>
                <span>Price: $5</span>
                <ButtonExercise value="Add to Cart"/>
            </div>
        );
    }
}
export default ParaExercise;