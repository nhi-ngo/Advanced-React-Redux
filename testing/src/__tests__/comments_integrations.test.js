import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";

beforeEach(() => {
	// before our test runs and before we try to simulate that button click, turn off any requests that are being issued by Axios
	moxios.install();
	moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
		status: 200,
		response: [{ name: "Fetched #1" }, { name: "Fetched #2" }],
	});
});

afterEach(() => {
	// uninstall the mock adapter for axios so that it won't affect other components
	moxios.uninstall();
});

it("can fetch a list of comments and display them", () => {
	// Attempt to render the entire app
	const wrapper = mount(
		<Root>
			<App />
		</Root>
	);

	// Find the 'fetchComments' button and click it
	wrapper.find(".fetch-comments-btn").simulate("click");

	// Expect to find a list of comments
	expect(wrapper.find("li").length).toEqual(2);
});
