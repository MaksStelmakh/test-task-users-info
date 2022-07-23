import { Routes, Route } from "react-router-dom";
import UserPage from "./page/UserPage/UserPage";
import Layout from "./components/Layout/Layout";
import SingleCard from "./components/SingleCard/SingleCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserPage />} />
          <Route path="users" element={<UserPage />} />
          <Route path="users/:id" element={<SingleCard />} />
          <Route path="*" element={<UserPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
