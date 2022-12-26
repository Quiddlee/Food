// async/await - синтаксический сахар, для работы с асинхронным кодом, условно говоря - js ждет,
const postData = async (url, data) => { // там где установлен оператор await, пока асинхронный код не выполнится
    const res = await fetch(url, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: data                      // у fetch() есть особенность, в случае когда у нас ошибка
    });                                 // от сервера, не сработает reject, у нас просто поменяется статус на false

    return await res.json();
};


const getResource = async (url) => {
    const res = await fetch(url);
    const errorMessage = `Could not fetch ${url}, status: ${res.status}`;


    if (!res.ok) {throw new Error(errorMessage);}
    return await res.json();
};


export {postData};
export {getResource};