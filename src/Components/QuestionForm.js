import { Radio, Space, Button, Form } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function QuestionForm({ onQuestionSubmit }) {
  const { questions, count } = useSelector((state) => state.user);
  const question = questions.length && questions[count];
  console.log("@@@", question, questions, questions[count]);
  const answers = question && [...question.answers, question.correctAnswer];
  useEffect(() => {
    if (answers) shuffle(answers);
  }, [answers]);
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return answers ? (
    <Form onFinish={onQuestionSubmit} onFinishFailed={onFinishFailed}>
      <Form.Item
        label={question.question}
        name="answer"
        rules={[
          {
            required: true,
            message: "You have to select an answer to continue!",
          },
        ]}
      >
        <Radio.Group>
          <Space direction="vertical">
            {answers &&
              answers.map((answer, key) => (
                <Radio value={answer} key={key}>
                  {answer}
                </Radio>
              ))}
          </Space>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  ) : null;
}

export default QuestionForm;
