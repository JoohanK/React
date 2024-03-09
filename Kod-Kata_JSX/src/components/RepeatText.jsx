const RepeatText = ({ count, text }) => {

    const textArea = Array.from({ length: (count) }, (NÅNTING, index) => (
        <p key={index}>{text}</p>
    ))

    return (
        <div>
        {textArea}
        </div>
    )
}

export default RepeatText;