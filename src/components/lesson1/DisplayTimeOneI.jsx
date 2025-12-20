import { Component }   from "react";
class DisplayTimeOneI extends Component {
    getTime()  {
        return window.dayjs().format('HH:mm:ss');
    }
    render() { 
        return (
            <div>
                <p>Current time is {this.getTime()}</p>
            </div>
        );
    }
}
export default  DisplayTimeOneI;