const form = document.getElementById('userForm');
const userList = document.getElementById('userList');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // предотвращаем перезагрузку страницы

    // получаем значения из формы
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!firstName || !lastName || !email) return;

    // создаем элемент списка
    const li = document.createElement('li');
    li.textContent = `${firstName} ${lastName} (${email}) `;

    // создаем кнопку удалить
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Удалить';
    deleteBtn.addEventListener('click', () => {
        li.remove(); // удаляем элемент из списка
    });
    

    li.appendChild(deleteBtn);
    userList.appendChild(li);

    // очищаем форму
    form.reset();
});
