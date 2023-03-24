import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const state = useLocation();
  console.log(state);

  const history = useHistory();

  const onclickBack = () => history.goBack();
  // 画面遷移の場合はhistoryを使用する

  return (
    <div>
      <h1>Page1DetailAページ</h1>
      <button onClick={onclickBack}>戻る</button>
    </div>
  );
};
