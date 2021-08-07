import React from 'react';
import { Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { changeAuth } from 'actions';

function App() {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector((state) => state.auth);

	const renderButton = () => {
		if (isLoggedIn) {
			return <button onClick={() => dispatch(changeAuth(false))}>Sign Out</button>;
		} else {
			return <button onClick={() => dispatch(changeAuth(true))}>Sign In</button>;
		}
	};

	const renderHeader = () => {
		return (
			<ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', maxWidth: 250 }}>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/post'>Post A Comment</Link>
				</li>
				<li>{renderButton()}</li>
			</ul>
		);
	};
	return (
		<div>
			{renderHeader()}
			<Route exact path='/' component={CommentList} />
			<Route path='/post' component={CommentBox} />
		</div>
	);
}

export default App;
