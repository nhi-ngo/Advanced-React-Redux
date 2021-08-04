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

it("creates one <li> element per comment", () => {
	expect(wrapper.find("li").length).toEqual(2); // should be 2 since there are 2 comments in the initial state
});

it("shows text for each comment", () => {
	expect(wrapper.render().text()).toContain('Comment 1');
	expect(wrapper.render().text()).toContain('Comment 2');
	console.log(wrapper.render().text());
});

