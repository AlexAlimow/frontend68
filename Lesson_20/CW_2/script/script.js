const form = document.getElementById('userForm');
const userList = document.getElementById('userList');





    form.addEventListener('submit', (e) => {
        e.preventDefault();


        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        console.log(firstName, lastName, email);

        // добавить на страницу 
        const li = document.createElement('li'); // создаем элемент списка
        li.innerText = `${firstName} ${lastName} (${email}) `; // добавляем текст в элемент списка
        userList.appendChild(li); // отоборажаем на странице объект


        // кнопка удалить

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Удалить';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => li.remove(); // удаляем элемент из списка;

        li.appendChild(deleteBtn); // добавляем кнопку в элемент списка


        // очищаем форму

        form.reset(); // сбрасываем форму


    });