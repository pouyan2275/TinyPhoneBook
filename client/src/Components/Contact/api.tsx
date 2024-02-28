const url = `http://${window.location.hostname}:3001/api/contacts`;

//create one
export const addContact = async (
  name: string | undefined,
  number: string | undefined
) => {
  const data = {
    name,
    number,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const res = await fetch(url, options);
  return res;
};

//get all
export const getAllContacts = async () => {
  const response = await fetch(url);
  const contactsData = await response.json();
  return contactsData;
};

//delete one
export const deleteContact = async (id: number) => {
  const res = await fetch(url + "/" + id, {
    method: "DELETE",
  });
  return res;
};

//edit one
export const editContact = async (
  id: number,
  name: string | undefined,
  number: string | undefined
) => {
  const data = {
    id,
    name,
    number,
  };
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(url, options);
  return res;
};
