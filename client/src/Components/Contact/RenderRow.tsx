import Contact from "../../../Models";
import React from "react";
import { useState } from "react";
import { FaTrash, FaPenToSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { getAllContacts, deleteContact } from "./api";

const RenderRow: React.FC<{ search: any }> = ({ search }) => {
  const [data, setData] = useState<Contact[]>([]);

  (async () => {
    const res = await getAllContacts();
    setData(res);
  })();

  return data
    .filter((item) =>
      search === ""
        ? true
        : item.name.includes(search) || item.number.includes(search)
    )
    .map((item: Contact, i: number) => (
      <tr key={item.id}>
        <td>{i + 1}</td>
        <td>{item.name}</td>
        <td>{item.number}</td>
        <td>
          <button
            onClick={async () => {
              const shouldDelete = window.confirm(
                `آیا مطمئن هستید که می خواهید مخاطب ${item.name} را حذف کنید؟`
              );

              if (shouldDelete) {
                const res = await deleteContact(item.id);
                if (res.status === 200) {
                  const updatedData = data.filter((contact) => {
                    return contact.id != item.id;
                  });
                  setData(updatedData);
                }
              }
            }}
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
