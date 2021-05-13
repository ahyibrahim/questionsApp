const POST_USER_NAME = "POST_USER_NAME";
const ADD_QESTIONS = "ADD_QESTIONS";
const INCREMENT_COUNT = "INCREMENT_COUNT";
const INCREMENT_SCORE = "INCREMENT_SCORE";

const initialSate = { name: "", count: 0, questions: [], score: 0 };

export const userReducer = (state = initialSate, action) => {
  switch (action.type) {
    case POST_USER_NAME:
      return { ...state, name: action.payload };
    case ADD_QESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case INCREMENT_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
    default:
      return initialSate;
  }
};
