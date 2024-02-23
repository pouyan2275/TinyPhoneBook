import { useState, useEffect } from "react";
interface Contact {
  id: number;
  name: string;
  number: string;
}

const Contacts = () => {
  const [data, setData] = useState<Contact[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3001/api/contacts", {
        method: "GET",
      });
      const contactsData = (await response.json()) as Contact[];
      setData(contactsData);
    };

    getData();
  }, []);

  const deleteContact = async (id: number, name: string) => {
    const shouldDelete = window.confirm(
      `آیا مطمئن هستید که می خواهید مخاطب ${name} را حذف کنید؟`
    );

    if (shouldDelete) {
      const response = await fetch(`http://localhost:3001/api/contacts/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const updatedData = data.filter((contact) => contact.id !== id);
        setData(updatedData);
      } else {
        window.alert("خطا در حذف مخاطب.");
      }
    }
  };

  return (
    <>
      <table className="table text-center table-dark">
        <thead>
          <tr>
            <th scope="col">ردیف</th>
            <th scope="col">نام و نام خانوادگی</th>
            <th scope="col">شماره تماس</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={item.id}>
              <td> {i + 1} </td>
              <td> {item.name}</td>
              <td>{item.number}</td>
              <td>
                <button
                  onClick={() => {
                    deleteContact(item.id, item.name);
                  }}
                  className="btn btn-danger"
                >
                  حذف
                </button>
                <button onClick={() => {}} className="btn btn-warning btn-edit">
                  ویرایش
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Contacts;
