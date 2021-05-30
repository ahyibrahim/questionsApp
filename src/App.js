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

import { Layout, Menu, Breadcrumb, Typography } from "antd";
import {
  UserOutlined,
  UserAddOutlined,
  AuditOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

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

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       {name && count != 5 && (
  //         <QuestionForm onQuestionSubmit={onQuestionSubmit} />
  //       )}
  //       {!name && <UserForm onFormSubmit={onFormSubmit} />}
  //       {count >= questions.length && <div>{score}</div>}
  //     </header>
  //   </div>
  // );

  //return (
  //   <Layout style={{ height: "100vh" }}>
  //     <Header className="header">
  //       <div
  //         style={{
  //           display: "flex",
  //           justifyContent: "center",
  //         }}
  //       >
  //         <LaptopOutlined
  //           style={{ alignSelf: 'flex-start', padding: "15px", fontSize: "300%", color: "white" }}
  //         />
  //         <Title style={{ paddingTop: "10px", color: "white" }}>
  //           Online Question Generator
  //         </Title>
  //       </div>
  //     </Header>
  //     <Layout>
  //       <Sider width={200} className="site-layout-background">
  //         <Menu
  //           theme="dark"
  //           mode="inline"
  //           style={{ height: "100%" }}
  //           defaultOpenKeys={["sub1"]}
  //         >
  //           <SubMenu
  //             key="sub1"
  //             title={name ? name : "User"}
  //             icon={<UserOutlined />}
  //           >
  //             {name && count >= questions.length && (
  //               <Menu.Item>{"Score: " + score}</Menu.Item>
  //             )}
  //           </SubMenu>
  //         </Menu>
  //       </Sider>
  //       <Layout style={{ padding: "0 24px 24px" }}>
  //         <Content
  //           style={{
  //             padding: 24,
  //             margin: 0,
  //             minHeight: 280,
  //           }}
  //         >
  //           <div className="Form-Container">
  //             <header>
  //               {name && count != 5 && (
  //                 <QuestionForm onQuestionSubmit={onQuestionSubmit} />
  //               )}
  //               {!name && <UserForm onFormSubmit={onFormSubmit} />}
  //             </header>
  //           </div>
  //         </Content>
  //       </Layout>
  //     </Layout>
  //   </Layout>
  // );

  return (
    <Layout className="main-container site-background">
      <Header className="header">
        <AuditOutlined className="main-logo" />
        <Title level={2} style={{ color: "lightGrey", flex: "2" }}>
          Question Generator
        </Title>
        <Menu className="header-menu" mode="horizontal" theme="dark">
          <Menu.Item icon={<UserOutlined />}>Login</Menu.Item>
          <Menu.Item icon={<UserAddOutlined />}>Signup</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "20px" }}>
        <Layout className="content-container site-background">
          <Sider className="sider">
            <h1 style={{ color: "white" }}>Sider</h1>
          </Sider>
          <Content className="content"></Content>
        </Layout>
      </Content>
      <Footer
        className="footer site-background"
        style={{ textAlign: "center" }}
      >
        Footer
      </Footer>
    </Layout>
  );

  // return (
  //   <div
  //     style={{
  //       display: "flex",
  //       flexDirection: "column",
  //       flex: "1",
  //       height: "100vh",
  //     }}
  //   >
  //     <div
  //       style={{
  //         padding: "20px",
  //         backgroundColor: "black",
  //         display: "flex",
  //         justifyContent: "center",
  //       }}
  //     >
  //       <h1 style={{ paddingTop: "10px", color: "white" }}>
  //         Online Question Generator
  //       </h1>
  //     </div>
  //     <div
  //       style={{
  //         display: "flex",
  //         flex: "1",
  //         flexWrap: "wrap",
  //       }}
  //     >
  //       <div style={{ width: "20%", backgroundColor: "red" }}></div>
  //       <div style={{ flex: "1", backgroundColor: "blue" }}>
  //         <UserForm />
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default App;
