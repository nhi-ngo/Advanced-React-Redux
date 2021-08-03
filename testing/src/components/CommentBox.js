import React, { Component } from "react";
import * as actions from "actions";

class CommentBox extends Component {
	state = { comment: "" };

	handleChange = (e) => {
		this.setState({ comment: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();

		//TODO: call an action creator and save the comment
		this.props.saveComment(this.state.comment);
		this.setState({ comment: "" });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h2>Add a comment</h2>
					<textarea
						placeholder="Write here..."
						value={this.state.comment}
						onChange={this.handleChange}
					/>
					<div>
						<button>Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

export default connect(null, actions)(CommentBox);
