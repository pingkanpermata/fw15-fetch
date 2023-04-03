const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const userList = document.getElementById('user-list');

// Fetch data from API and display it on the page
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        displayUsers(users);

        searchButton.addEventListener('click', () => {
            const searchQuery = searchInput.value.toLowerCase();
            const filteredUsers = users.filter(user => {
                const name = user.name.toLowerCase();
                const username = user.username.toLowerCase();
                const email = user.email.toLowerCase();
                return name.includes(searchQuery) || username.includes(searchQuery) || email.includes(searchQuery);
            });
            displayUsers(filteredUsers);
        });

        searchInput.addEventListener('keyup', () => {
            const searchQuery = searchInput.value.toLowerCase();
            const filteredUsers = users.filter(user => {
                const name = user.name.toLowerCase();
                const username = user.username.toLowerCase();
                const email = user.email.toLowerCase();
                return name.includes(searchQuery) || username.includes(searchQuery) || email.includes(searchQuery);
            });
            displayUsers(filteredUsers);
        });
    })
    .catch(error => console.error(error));

// Display list of users
function displayUsers(users) {
    userList.innerHTML = '';
    users.forEach(user => {
        const row = `
            <tr>
                <td class="px-4 py-2 border">${user.name}</td>
                <td class="px-4 py-2 border">${user.username}</td>
                <td class="px-4 py-2 border">${user.email}</td>
                <td class="px-4 py-2 border">${user.phone}</td>
                <td class="px-4 py-2 border">${user.website}</td>
                <td class="px-4 py-2 border">${user.company.name}</td>
                <td class="px-4 py-2 border">${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</td>
            </tr>
        `;
        userList.insertAdjacentHTML('beforeend', row);
    });
}
