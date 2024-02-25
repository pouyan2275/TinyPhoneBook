import { Link } from "react-router-dom";

const UpperPart = () => {
  return (
    <>
      <Link to="/addcontact" className="btn btn-success btn-add-contact">
        اضافه کردن مخاطب
      </Link>
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

export default UpperPart;
