const deleteContact = async (id: number, name: string, state: any) => {
  const shouldDelete = window.confirm(
    `آیا مطمئن هستید که می خواهید مخاطب ${name} را حذف کنید؟`
  );

  if (shouldDelete) {
    const response = await fetch(`http://${window.location.hostname}:3001/api/contacts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      const updatedData = state.data.filter(
        (contact: { id: number }) => contact.id !== id
      );
      state.setData(updatedData);
    } else {
      window.alert("خطا در حذف مخاطب.");
    }
  }
};

export default deleteContact;
