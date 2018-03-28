import * as constants from './constants.js';

export default function commentsReducer(state = [], action) {
	let newStateComments;
	
	switch(action.type) {
		case constants.COMMENT_ADD:
			return [{
				id: action.payload.id,
				text: action.payload.text,
				votes: 0
		  }, ...state.comments];

		case constants.COMMENT_REMOVE:
			return [...state.comments.filter(comment => comment.id !== action.payload.id)];
		
		case constants.COMMENT_THUMB_UP:
			newStateComments = state.comments.map(comment => {
				if(comment.id === action.payload.id) {
					comment.votes++;
					return comment;
				}
				return comment;
			});
			return [...newStateComments];
		
		case constants.COMMENT_THUMB_DOWN:
			newStateComments = state.comments.map(comment => {
				if(comment.id === action.payload.id) {
					comment.votes--;
					return comment;
				}
				return comment;
			});
			return [...newStateComments];
		
		case constants.COMMENT_EDIT:
			newStateComments = state.comments.map(comment => {
				if(comment.id === action.payload.id) {
					comment.text = action.payload.message;
					return comment;
				}
				return comment;
			});
			return [...newStateComments];

		default:
			return state;
	};
};