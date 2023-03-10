import React from "react";
import Layout from "../component/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RockScissorsPaper from "../pages/RockScissorsPaper/RockScissorsPaper";
import Main from "../pages/mainPage/Main";
import AppClass from "../pages/Appclass/AppClass";
import ClassRockScissorsPaper from "../pages/RockScissorsPaper/ClassRockScissorsPaper";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/rockScissorsPaper" element={<RockScissorsPaper />} />
          <Route path="/appclass" element={<AppClass />} />
          <Route
            path="/classRockScissorsPaper"
            element={<ClassRockScissorsPaper />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
