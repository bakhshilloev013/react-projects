function handlerFormSubmit(event, data) {
    event.preventDefault();
    console.log(data)
    alert(JSON.stringify(data));
}

export default handlerFormSubmit;