function handlerFormSubmit(event) {
    event.preventDefault();
    let info = {
        username: event.target.username.value,
        password: event.target.password.value
    }
    console.log(info)
    alert(JSON.stringify(info));
}

export default handlerFormSubmit;