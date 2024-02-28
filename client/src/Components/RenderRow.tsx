import Contact from "../../Models";
import deleteContact from "./deleteContact";
import React from "react";
import { useState, useEffect } from "react";
import { FaTrash, FaPenToSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

const RenderRow: React.FC<{ search: any }> = ({ search }) => {
  const [data, setData] = useState<Contact[]>([]);
  console.log(search);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `http://${window.location.hostname}:3001/api/contacts`
      );
      const contactsData = await response.json();
      setData(contactsData);
    };

    getData();
  }, []);
  return data
    .filter((item) => {
      if (search === "") return true;
      else if (item.name.includes(search) || item.number.includes(search))
        return true;
    })
    .map((item: Contact, i: number) => (
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
