import { Component }   from "react";
class ButtonExercise extends Component {
    render() { 
        return (
            <div>
                <button>{this.props.value == null ? "Good Job!" : this.props.value}</button>
            </div>
        );
    }
}
export default ButtonExercise;