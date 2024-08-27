const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{id:"hi-tag"},"I'm  H1 tag"),
            React.createElement("h2",{id:"h2-tag"},"I'm  H2 tag")
        ]),
    React.createElement("div",{id:"child2"},
            [React.createElement("h3",{id:"hi-tag"},"I'm  H3 tag"),
                React.createElement("h4",{id:"h2-tag"},"I'm  H4 tag")
           ])
]

);

const heading=React.createElement("h1",{id:"heading",tesk:"data2"},"HELLO WORLD FROM REACT INSIDE IT !");
console.log(parent);
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);