import './Card.css'

function Person(props) {
    const { id, firstName, lastName, gender, img, email } = props;
    return (<div className="Card">
        <img src={img} />
        <div>First name: { firstName }</div>
        <div>Last name: { lastName }</div>
        <div>Gender: { gender }</div>
        <div>Email: { email }</div>
    </div>)
}

export default Person;