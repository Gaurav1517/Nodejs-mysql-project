

// Fetch and Display Users
const fetchUsers = async () => {
    try {
        const res = await fetch(apiURL);
        if (!res.ok) {
            throw new Error("Failed to fetch users");
        }
        const users = await res.json();
        const userTable = document.getElementById("userTable");
        userTable.innerHTML = ""; // Clear the table before re-rendering
        users.forEach(user => {
            const row = `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>
                        <button class="editBtn" onclick="editUser(${user.id}, '${user.name}', '${user.email}')">Edit</button>
                        <button class="deleteBtn" onclick="deleteUser(${user.id})">Delete</button>
                    </td>
                </tr>
            `;
            userTable.innerHTML += row;
        });
    } catch (error) {
        console.error("Error fetching users:", error.message);
        alert("Failed to load user data.");
    }
};
