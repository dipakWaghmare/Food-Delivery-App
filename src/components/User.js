import { useState } from "react";

const User = ({name , location}) => {

    const [count, setCount] = useState(1);
    const [count2, setCount2] = useState(2);

    return(
        <div className="user-card">
            <p>(Functional Component)</p>
            <h2>Count: {count}</h2>
            <h2>Count: {count2}</h2>
            <button
                onClick={() => {
                    setCount(count + 1);
                    setCount2(count2 + 1);
                }}
            >
                Increase Count
            </button>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @dipakwaghmare45</h4>
        </div>
    )
}

export default User;