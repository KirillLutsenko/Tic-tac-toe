import PropTypes from 'prop-types';

// export const PostType = PropTypes.shape({
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   userId: PropTypes.number.isRequired,
// }).isRequired;

// export const PostListType = {
//   posts: PropTypes.arrayOf(PostType),
//   onPostSelected: PropTypes.func.isRequired,
//   selectedPostId: PropTypes.number.isRequired,
// };

export const SideSwitchType = {
  firstPlayerX: PropTypes.bool.isRequired,
  setFirstPlayerX: PropTypes.func.isRequired,
  disabledSelectors: PropTypes.bool.isRequired,
};

export const GameFieldType = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  makeMoveClick: PropTypes.func.isRequired,
};

export const FieldSquareType = {
  value: PropTypes.string.isRequired,
  makeMoveClick: PropTypes.func.isRequired,
};

export const GameInfoType = {
  winner: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
  firstPlayerX: PropTypes.bool.isRequired,
  setGameField: PropTypes.func.isRequired,
  setXTurn: PropTypes.func.isRequired,
  setCounter: PropTypes.func.isRequired,
  setDisabledSelectors: PropTypes.func.isRequired,
};

export const ActType = {
  counter: PropTypes.number.isRequired,
  winner: PropTypes.string.isRequired,
  firstPlayerX: PropTypes.bool.isRequired,
};

export const ScoresType = {
  firstPlayerScores: PropTypes.number.isRequired,
  secondPlayerScores: PropTypes.number.isRequired,
  ties: PropTypes.number.isRequired,
};
