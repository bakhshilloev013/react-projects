function Reset({count, action}) {
    const buttonStyle = {backgroundColor: 'lightgreen'};
    return (count > 0) && (
        <div>
            <button style={buttonStyle} onClick={action}>Reset</button>
        </div>)
}

export default Reset;