"use strict";

var app = React.createElement(
        "div",
        null,
        React.createElement(
                "h1",
                null,
                "Bonjour Babel !!!"
        ),
        React.createElement(
                "p",
                null,
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas non, eos culpa earum voluptatem eum, rerum in distinctio atque impedit sapiente! Mollitia illo qui saepe inventore cumque dignissimos sunt odit!"
        )
);
var root = document.querySelector("#root");
ReactDOM.render(app, root);
