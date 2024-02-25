import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./Components/error-page";
import EditContact from "./Components/TableContacts/EditContact";
import AddContact from "./Components/UpperPart/AddContact";
import Home from "./Components/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<EditContact />} />
        <Route path="/addContact" element={<AddContact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
