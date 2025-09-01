// https://jsonplaceholder.typicode.com/users

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (response.ok) { // Check if the response was successful
            return response.json(); // Parse the response as JSON
        } else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

    })
    .then(loadedUsers => {
        loadedUsers.forEach(user =>
            console.log(user)
        )
    }
    )
    .catch(error => {
        console.error("There has been a problem with your fetch operation:", error);
    });

