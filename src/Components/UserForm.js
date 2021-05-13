import { Form, Input, Button } from "antd";

function UserForm({ onFormSubmit }) {
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form onFinish={onFormSubmit} onFinishFailed={onFinishFailed}>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
}

export default UserForm;
