import { SAVE_COMMENT } from "actions/constants";
import { saveComment } from "actions";

describe("the saveComment action", () => {
	it("has correct type", () => {
		const action = saveComment();
		expect(action.type).toEqual(SAVE_COMMENT);
	});

	it("has correct payload", () => {
		const action = saveComment("New Comment");
		expect(action.payload).toEqual("New Comment");
	});
});
