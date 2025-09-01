const form = document.getElementById('userForm');
const userList = document.getElementById('userList');
const users = []; // массив для хранения пользователей 


function render() {
    userList.innerText = ''; // очищаем список
    users.forEach((user, index) => { // Добавляем каждого пользователя в список
        const li = document.createElement('li'); // создаем элемент списка для каждого пользователя
        li.innerText = `${index + 1}. ${user.firstName} ${user.lastName} - ${user.email}`;
        // добавляем кнопку удаления каждого пользователя
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Удалить';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => {
            users.splice(index, 1); // удаляем пользователя из массива
            render(); // обновляем список
        };
        li.appendChild(deleteBtn); // добавляем кнопку в элемент списка
        userList.appendChild(li); // добавляем элемент в список
    });
}
function User(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
}

form.addEventListener('submit', (e) => {
    e.preventDefault(); // предотвращаем перезагрузку страницы
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    users.push(new User(firstName, lastName, email)); // добавляем нового пользователя в массив
    render(); // рендерим список пользователей
    form.reset(); // очищаем форму
});
