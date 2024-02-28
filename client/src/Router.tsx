import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./error-page";
import EditContact from "./Components/Contact/EditContact";
import AddContact from "./Components/Contact/AddContact";
import TableContacts from "./Components/Contact/TableContacts";

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
