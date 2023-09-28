{/* <div id="parent">
        <div id="child">
            <h1>This H1 tag</h1>
        </div>
    </div> */}



const heading = React.createElement("div", {id: "parent"},[
    React.createElement("div", {id: "child1"},[
        React.createElement("h1", {}, "This is an H1 tag"),
        React.createElement("h2", {}, "This is an H2 tag")
    ]
    ),
    React.createElement("div", {id: "child2"},[
        React.createElement("h3", {}, "This is an H3 tag"),
        React.createElement("h4", {}, "This is an H4 tag")
    ]
    )
]
);

console.log(heading);XMLDocument

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);