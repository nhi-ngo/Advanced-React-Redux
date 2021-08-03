import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapper;

beforeEach(() => {
	wrapper = mount(<CommentBox />);
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
