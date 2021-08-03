import React from "react";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapper;

/* logic placed inside beforeEach() will be executed before each test run, great place for some common set up logic. */
beforeEach(() => {
	wrapper = shallow(<App />);
});

it("shows a comment box", () => {
	expect(wrapper.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  expect(wrapper.find(CommentList).length).toEqual(1)
})

/*
** Shallow (https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675)
Renders only the single component, not including its children. Useful to isolate the component for pure unit testing.
*/
