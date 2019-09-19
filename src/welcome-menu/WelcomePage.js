import React from 'react'

const LikeButtons = (props) => {
	return (
		<div className="ui LikeButtons">
		<div className="content">{props.children}</div>
		<div className="extra content">
			<div className="ui two buttons">
				<div className="ui like button"> Like </div>
				<div className="ui dislike button"> Dislike </div>
			</div>
		</div>
	</div>
	);
};

export default LikeButtons;
