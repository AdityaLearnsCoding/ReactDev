import { Component }   from "react";
class DisplayDateOneG extends Component {
    componentDidMount() {
        return console.log(window.dayjs().format('MMMM D'))
    }
    render() { 
        return (
            <div>
                <p>Check console</p>
            </div>
        );
    }
}
export default  DisplayDateOneG;