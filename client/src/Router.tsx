import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./Components/error-page";
import EditContact from "./Components/EditContact";
import AddContact from "./Components/AddContact";
import TableContacts from "./Components/TableContacts";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TableContacts />} />
        <Route path="/edit" element={<EditContact />} />
        <Route path="/addContact" element={<AddContact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
