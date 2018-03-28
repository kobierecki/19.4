import * as constants from '../constants';

export function commentAdd(message) {
	return {
		type: constants.COMMENT_ADD,
		payload: {
			message
		}
	};
};

export function commentEdit(message) {
	return {
		type: constants.COMMENT_EDIT,
		payload: {
			message
		}
	};
};

export function commentRemove(id) {
	return {
		type: constants.COMMENT_REMOVE,
		payload: {
			id
		}
	};
};

export function commentThumbUp(id) {
	return {
		type: constants.COMMENT_THUMB_UP,
		payload: {
			id
		}
	};
};

export function commentThumbDown(id) {
	return {
		type: constants.COMMENT_THUMB_DOWN,
		payload: {
			id
		}
	};
};