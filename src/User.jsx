export default function User({user}) {
    const { name, email } = user;
    const box = {
        border: '2px solid orange'
    }
    return (
        <div style={box}>
            <h4>Name: {name} </h4>
            <p>Email: {email} </p>
        </div>
    )

}