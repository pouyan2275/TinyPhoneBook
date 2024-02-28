import { useRef } from "react";
import { Link } from "react-router-dom";

const AddContact = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const handleSubmit = async () => {
    const data = {
      name: nameRef.current?.value,
      number: numberRef.current?.value,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const res = await fetch(
      `http://${window.location.hostname}:3001/api/contacts`,
      options
    );
    if (res.status == 200) {
      window.alert("مخاطب با موفقیت افزوده شد");
      window.location.pathname = "/";
    } else {
      window.alert("خطا در اضافه کردن مخاطب جدید");
    }
  };
  return (
    <>
      <label htmlFor="form" className="p-3">
        اضافه کردن مخاطب
      </label>

      <form>
        <div className="form-group row">
          <div className="form-group py-2">
            <input
              type="text"
              className="form-control"
              placeholder="نام و نام خانوادگی"
              ref={nameRef}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="شماره تماس"
              ref={numberRef}
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

export default AddContact;
