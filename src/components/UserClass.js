import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: "dummy",
            location: "dummy",
        };

        console.log("Child Constructor");
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/dipakWaghmare");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log("Child ComponentDidMount");
    }

    componentWillUnmount() {
        console.log("Child ComponentWillUnmount");
    }

    render() {
        console.log("Child Render");

        const { name, location, login, company, avatar_url } =
            this.state.userInfo;

        return (
            <div className="m-4 p-4 border border-stone-900 rounded-lg">
                <p>(Class Based Component)</p>
                <img className="w-44" src={avatar_url} />
                <UserContext.Consumer>
                    {({ loggedInUser }) => (
                        <h3 className="font-mono">
                            LoggedIn User: {loggedInUser} (Context used in class
                            based component)
                        </h3>
                    )}
                </UserContext.Consumer>
                <h3>Name: {name}</h3>
                <p>Login Id: {login}</p>
                <p>Company: {company}</p>
                <p>Email: dipakswaghmare555@gmail.com</p>
                <p>Location: {location}</p>
            </div>
        );
    }
}

export default UserClass;
