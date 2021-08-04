import React from "react";
import { mount } from "enzyme";
import CommentList from "components/CommentList";
import Root from "Root";

let wrapper;

beforeEach(() => {
	const initialState = {
		comments: ["Comment 1", "Comment 2"],
	};

	wrapper = mount(
		<Root initialState={initialState}>
			<CommentList />
		</Root>
	);
});

afterEach(() => {
	wrapper.unmount();
});

it("has one <li> element per comment", () => {
	console.log(wrapper.find("li").length);
});
