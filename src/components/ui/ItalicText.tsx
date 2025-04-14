type Prop = {
  text: string;
  size?: string;
};

const ItalicText = ({ text, size = "40px" }: Prop) => {
  return (
    <span className={`font-bold font-playfair italic ${size}`}>{text}</span>
  );
};

export default ItalicText;
