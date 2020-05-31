import React from "react";

// CSS
import "./App.css";

//local imports
import Sider from "./components/Sider";

import { Layout, Breadcrumb, Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const { Search } = Input;

// import config from "./config";
// Create redux store with history

const recipes = [
  {
    author: "Jim",
    name: "Chicken Curry",
    description: "Delicious spicy chicken curry",
  },
  {
    author: "Aravind",
    name: "Hamburger",
    description: "Juicy burger with toppings and a soft bun",
  },
];

function App() {
  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        {/* <Sider /> */}
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />

          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0", alignSelf: "left" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>

            <Search
              placeholder="Search Recipe..."
              onSearch={(value) => console.log(value)}
              onChange={(value) => console.log(value.target.value)}
              enterButton
              style={{ padding: 20 }}
            />
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>2020 Created by Riz</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
