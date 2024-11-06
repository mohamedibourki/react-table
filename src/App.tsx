import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { AddUser } from "./components/handleAddUser";
import { DataTable } from "./components/Table";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/users" element={<DataTable />} />
    </Routes>
  );
};
