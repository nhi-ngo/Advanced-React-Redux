import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class CommentBox extends Component {
	state = { comment: "" };

	handleChange = (e) => {
		this.setState({ comment: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.saveComment(this.state.comment);
		this.setState({ comment: "" });
	};

	handleFetchComments = () => {
		this.props.fetchComments();
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h2>Add a comment</h2>
					<div style={{display: 'flex', alignItems: 'flex-end'}}>
						<textarea placeholder='Write here...' value={this.state.comment} onChange={this.handleChange} />
						<div style={{marginLeft: 10}}>
							<button>Submit</button>
						</div>
					</div>
				</form>
				<br />
				<button className='fetch-comments-btn' onClick={this.handleFetchComments}>
					Fetch Comments
				</button>
			</div>
		);
	}
}

export default connect(null, actions)(CommentBox);
