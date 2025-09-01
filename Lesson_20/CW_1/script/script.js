function getInfo(request) {
    let promise = new Promise((resolve, reject) => {
        const ok = Math.random() > 0.3;

        if (ok) {
            resolve({ code: `получено ${request}` });
        } else {
            reject({ msg: `Error!!! при получении ${request}` });
        }
    });
    return promise;
}


// getInfo("пользователь Ann")
//     .then(response => 
//         console.log(response),
//         err => console.log(err));





getInfo("пользователь Jack")
    .then(response => {
        console.log(response);
        return getInfo("профиль пользователя " + response.code);
    })
    .then(response => {
        console.log(response);
        return getInfo("фотография");
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log("Ошибка: " + err);
    })
    .finally(() => {
        console.log("Обработка завершена");
    });;

