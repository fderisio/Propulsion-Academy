// actions creators

export const addResultCreator = (isCorrect) => {
	return {
		type: 'addResult',
		isCorrect: isCorrect
	};
}


export const addQuestionCreator = (question) => {
	return {
		type: 'addQuestion',
		question,
	};
}

export const addAnswersCreator = (answer) => {
	return {
		type: 'addAnswers',
		answer,
	};
}