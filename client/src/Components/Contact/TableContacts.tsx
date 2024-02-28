import { Link } from "react-router-dom";
import RenderRow from "./RenderRow";
import { useState } from "react";

const TableContacts = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Link to="/addcontact" className="btn btn-success btn-add-contact">
        اضافه کردن مخاطب
      </Link>
      <br />
      <input
        type="text"
        placeholder="جستجو"
        className="form-control text-search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <table className="table text-center table-dark">
        <thead>
          <tr>
            <th scope="col">ردیف</th>
            <th scope="col">نام و نام خانوادگی</th>
            <th scope="col">شماره تماس</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <RenderRow search={search} />
        </tbody>
      </table>
    </>
  );
};

export default TableContacts;
