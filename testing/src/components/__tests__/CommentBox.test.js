import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapper;

beforeEach(() => {
	wrapper = mount(<CommentBox />);
});

/* full rendering actually mounts the component in the DOM, which means that tests can affect each other if they are all using the same DOM
	=> use .unmount() as cleanup
*/
afterEach(() => {
	wrapper.unmount();
});

it("has a text area and a button", () => {
	expect(wrapper.find("textarea").length).toEqual(1);
	expect(wrapper.find("button").length).toEqual(1);
});

describe("the text area", () => {
	beforeEach(() => {
		wrapper.find("textarea").simulate("change", { target: { value: "new comment" } });
		wrapper.setProps({ value: "new comment" });
	});

	it("has a text area that users can type in", () => {
		expect(wrapper.find("textarea").prop("value")).toEqual("new comment");
	});

	it("when form is submitted, text area gets emptied", () => {
		wrapper.find("form").simulate("submit");
		wrapper.setProps({ value: "" });
		expect(wrapper.find("textarea").prop("value")).toEqual("");
	});
});
