type Prop = {
    text: string
}

const ItalicText = ({ text }: Prop) => {
    return (
        <span className="font-bold font-playfair italic text-[40px] md:text-[52px]">{text}</span>
    )
}

export default ItalicText