import { ItalicTextProp } from "../../../type/type";

const ItalicText = ({ text, size = "40px" }: ItalicTextProp) => {
  return (
    <span className={`font-bold font-playfair italic ${size}`}>{text}</span>
  );
};

export default ItalicText;
