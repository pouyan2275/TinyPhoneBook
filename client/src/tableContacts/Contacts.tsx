import RenderRow from "./RenderRow";

const Contacts = () => {
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
          <RenderRow />
        </tbody>
      </table>
    </>
  );
};

export default Contacts;
