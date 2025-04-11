type Prop = {
  text: string;
  size?: string;
};

const ItalicText = ({ text, size = "40px" }: Prop) => {
  return (
    <span
      className="font-bold font-playfair italic md:text-[52px]"
      style={{ fontSize: size }}
    >
      {text}
    </span>
  );
};

export default ItalicText;
