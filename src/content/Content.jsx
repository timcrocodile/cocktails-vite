import "./index.scss";
import Card from "../card/Card";

const Content = ({ obj }) => {
  return (
    <div className="Content">
      {obj.map((cocktail) => (
        <Card obj={cocktail} />
      ))}
    </div>
  );
};

export default Content;
