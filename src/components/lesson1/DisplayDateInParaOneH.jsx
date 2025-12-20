import { Component }   from "react";
class DisplayDateInParaOneH extends Component {
    getDate()  {
        return window.dayjs().format('MMMM D')
    }
    render() { 
        return (
            <div>
                <p>Today is {this.getDate()}</p>
            </div>
        );
    }
}
export default  DisplayDateInParaOneH;