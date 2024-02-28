import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { editContact } from "./api";
const EditContact: React.FC = () => {
  const { name, number, id } = useLocation().state;
  const nameRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  // id,
  // name: nameRef.current?.value,
  // number: numberRef.current?.value,
  const handleSubmit = async () => {
    const res = await editContact(
      id,
      nameRef.current?.value,
      numberRef.current?.value
    );
    if (res.status == 200) {
      window.alert("مخاطب با موفقیت ویرایش شد");
      window.location.pathname = "/";
    } else {
      window.alert("خطا در ویرایش مخاطب ");
    }
  };

  return (
    <>
      <label htmlFor="form" className="p-3">
        ویرایش مخاطب
      </label>
      <form>
        <div className="form-group row">
          <div className="form-group py-2">
            <input
              type="text"
              className="form-control"
              placeholder="نام و نام خانوادگی"
              defaultValue={name}
              ref={nameRef}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="شماره تماس"
              ref={numberRef}
              defaultValue={number}
            />
          </div>
          <div className="row justify-content-center py-4">
            <div className="form-group col-md-4 ">
              <Link to={"/"} className="btn btn-danger w-100">
                بازگشت
              </Link>
            </div>
            <div className="form-group col-md-4">
              <input
                type="button"
                className="btn btn-success w-100 "
                value="ثبت"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditContact;
