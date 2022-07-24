export const partners = () => {
    const renderItems = (data) => {
        data.forEach((item) => {
            console.log(item);
        });
    };

    fetch(
        'https://deliveryfood-74cea-default-rtdb.firebaseio.com/db/partners.json'
    )
        .then((response) => response.json())
        .then((data) => renderItems(data))
        .catch((error) => console.log(error));
};
