import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  const history = useHistory();

  const onClickDetailA = () => history.push("/page1/detailA");
  // Javasriputからページを遷移することができる

  return (
    <div>
      <h1>Page1ページ</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DtetailA</Link>
      <br />
      <Link to="/page1/detailB">DtetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DtetailA</button>
    </div>
  );
};
