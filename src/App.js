import "./App.css";
import UserForm from "./Components/UserForm";
import QuestionForm from "./Components/QuestionForm";
import { useDispatch, useSelector } from "react-redux";
import {
  addUsername,
  addQuestions,
  incrementScore,
  incrementCount,
} from "./Store/Action/UserActions";

const MAX_QUESTIONS = 5;

function App() {
  const dispatch = useDispatch();
  const { name, questions, count, score } = useSelector((state) => state.user);
  console.log("Questions list: ", questions);

  const onFormSubmit = async (values) => {
    dispatch(addUsername(values.username));
    try {
      const qReq = await (
        await fetch("http://localhost:4000/api/questions")
      ).json();
      dispatch(addQuestions(qReq));
    } catch (err) {
      console.log(err);
    }
  };

  const onQuestionSubmit = (values) => {
    const { answer } = values;
    if (answer === questions[count].correctAnswer) {
      dispatch(incrementScore());
    }
    dispatch(incrementCount());
  };

  console.log(count, questions.length, questions);

  return (
    <div className="App">
      <header className="App-header">
        {name && count != 5 && (
          <QuestionForm onQuestionSubmit={onQuestionSubmit} />
        )}
        {!name && <UserForm onFormSubmit={onFormSubmit} />}
        {count >= questions.length && <div>{score}</div>}
      </header>
    </div>
  );
}

export default App;
