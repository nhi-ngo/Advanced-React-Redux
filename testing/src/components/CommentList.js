import React from 'react';
import { useSelector } from 'react-redux';

function CommentList() {
	const comments = useSelector((state) => state.comments);

	const renderComments = () => {
		return comments.map((comment) => {
			return <li key={comment}>{comment}</li>;
		});
	};

	return (
		<div>
			<h2>Comment List</h2>
			<ul>{renderComments()}</ul>
		</div>
	);
}

export default CommentList;
