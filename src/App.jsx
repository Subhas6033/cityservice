import React from "react";
import { Outlet } from "react-router-dom";
import { Nav, Footer, Layout } from "./Components/index";

const App = () => {
  return (
    <>
    <Layout>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Layout>
    </>
  );
};

export default App;
