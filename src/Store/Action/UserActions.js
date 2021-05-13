export const addUsername = (username) => (dispatch) => {
  dispatch({ type: "POST_USER_NAME", payload: username });
};

export const addQuestions = (QnA) => (dispatch) => {
  dispatch({ type: "ADD_QESTIONS", payload: QnA });
};

export const incrementCount = () => (dispatch) => {
  dispatch({ type: "INCREMENT_COUNT" });
};

export const incrementScore = () => (dispatch) => {
  dispatch({ type: "INCREMENT_SCORE" });
};
