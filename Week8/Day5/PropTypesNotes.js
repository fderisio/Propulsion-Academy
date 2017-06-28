AnswerItem.propTypes = {
	answer: PropTypes.object.isRequired, // for arrays: PropTypes.array.isRequired // para strings: PropTypes.string.isRequired
}

// para usar un tipo en particular
//1) in a file with types
const AnswerType = {
	text: PropTypes.string.isRequired,
	isCorrect: PropTypes.boolean.isRequired,

}
// 2)
AnswerItem.propTypes = {
	answer: PropTypes.shape(AnswerType).isRequired, // for arrays: PropTypes.array.isRequired // para strings: PropTypes.string.isRequired
}