import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";

export default (props) => (
	<Provider store={createStore(reducers, {})}>{props.children}</Provider>
);

/*
createStore(reducers, {}): {} is the initial state for the redux store
*/
