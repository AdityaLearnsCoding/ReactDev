import { Component }   from "react";
class Solution2C extends Component {
    render() { 
        return (
            <>
                <div>
                    Hello, welcome to my website!
                </div>
                <div>      {/* div is used to allow inputbox to take up the entire block space, could've used br?*/}  
                    <input 
                        placeholder="Email"
                    ></input>
                </div>
                <div>
                    <input 
                        placeholder="Password"
                        type="password"
                    ></input>
                </div>
                <button>Login</button>
                <button>Sign up</button>
            </>
        );
    }
}
export default  Solution2C;