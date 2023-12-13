import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props) {
        super(props);

        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent ComponentDidMount");
    }

    componentWillUnmount() {
        console.log("Parent ComponentWillUnmount");
    }

    render() {
        console.log("Parent Render");

        return (
            <div>
                <h1>Welcome to the About us page.</h1>
                {/* <div>
                    <UserContext.Consumer>
                        {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div> */}

                <UserClass />
            </div>
        );
    }
}

export default About;
