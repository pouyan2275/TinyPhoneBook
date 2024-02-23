import { useState, useEffect } from "react";
import Contact from "./modelContact";
import RenderRow from "./renderRow";

const Contacts = () => {
  const [data, setData] = useState<Contact[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3001/api/contacts");
      const contactsData = await response.json();
      setData(contactsData);
    };

    getData();
  }, []);

  return (
    <>
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
          <RenderRow data={data} setData={setData} />
        </tbody>
      </table>
    </>
  );
};

export default Contacts;
