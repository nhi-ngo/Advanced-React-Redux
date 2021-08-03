import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import Root from 'Root';

ReactDOM.render(
	<Root>
		<App />
	</Root>,
	document.getElementById("root")
);

/*
createStore(reducers, {}): {} is the initial state for the redux store
*/