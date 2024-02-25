const Navbar = () => {
  return (
    <>
      <button className="btn btn-success btn-add-contact">
        اضافه کردن مخاطب
      </button>
      <br />
      <form action="" className="form-inline">
        <input
          type="text"
          placeholder="جستجو"
          className="form-control text-search"
          name=""
          id=""
        />
      </form>
    </>
  );
};

export default Navbar;
