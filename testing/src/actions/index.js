import { SAVE_COMMENT } from "actions/constants";

export function saveComment(comment) {
	return {
		type: SAVE_COMMENT,
		payload: comment,
	};
}
