import { useContext } from "react";
import { GlobalContext } from "../context/index";

const ArticleStatus = ({ isNew }) => {
  return isNew && <span> pew </span>;
};

const NewArticle = () => {
  return "NEW";
};

function Article(props) {
  const user = useContext(GlobalContext);
  return (
    <>
      <div style={{ marginTop: "10px" }}>
        {" "}
        <b>{props.title}</b>
        <br />
        <small>
          date: {props.date}, tags: {props.tags.join(", ")},
          {props.isNew ? "New " : "Old"}
          {/* {props.isNew && "Nep "}
        <ArticleStatus isNew={props.isNew} />
        {props.isNew && <NewArticle />} */}
        </small>
        <div>Ditulis Oleh {user.username}</div>
      </div>
    </>
  );
}

export default Article;
