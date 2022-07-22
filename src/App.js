import { Routes, Route } from "react-router-dom";
import UserPage from "./page/UserPage";
import HomePage from "./page/HomePage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<UserPage />} />
          <Route path="*" element={<UserPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
