import Contact from "../../../Models";
import deleteContact from "./deleteContact";
import React from "react";
import { useState, useEffect } from "react";
import { FaTrash, FaPenToSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

const RenderRow: React.FC = () => {
  const [data, setData] = useState<Contact[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://192.168.1.2:3001/api/contacts");
      const contactsData = await response.json();
      setData(contactsData);
    };

    getData();
  }, []);
  return data.map((item: Contact, i: number) => (
    <tr key={item.id}>
      <td>{i + 1}</td>
      <td>{item.name}</td>
      <td>{item.number}</td>
      <td>
        <button
          onClick={() => deleteContact(item.id, item.name, { data, setData })}
          className="btn btn-danger"
        >
          <FaTrash />
        </button>

        <Link
          to={`/edit`}
          state={{ name: item.name, number: item.number, id: item.id }}
          className="btn btn-warning btn-edit"
        >
          <FaPenToSquare />
        </Link>
      </td>
    </tr>
  ));
};
export default RenderRow;
