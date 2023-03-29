const userList = document.getElementById('user-list');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = JSON.stringify(item);
            userList.appendChild(li);
        });
    })
    .catch(error => console.error(error));
