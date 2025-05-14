const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Velupovm1618@',
  database: 'users'
};

let db;

async function setup() {
  db = await mysql.createConnection(dbConfig);
  console.log("Connected to MySQL");

  await db.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100)
    )
  `);
}

// ✅ CREATE
async function createUser(name, email) {
  const [result] = await db.execute(
    'INSERT INTO users (name, email) VALUES (?, ?)',
    [name, email]
  );
  console.log("User created with ID:", result.insertId);
}

// ✅ READ ALL
async function getAllUsers() {
  const [rows] = await db.execute('SELECT * FROM users');
  console.log("All users:", rows);
}

// ✅ READ ONE
async function getUserById(id) {
  const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
  console.log("User:", rows[0] || "Not found");
}

// ✅ UPDATE
async function updateUser(id, name, email) {
  const [result] = await db.execute(
    'UPDATE users SET name = ?, email = ? WHERE id = ?',
    [name, email, id]
  );
  console.log(result.affectedRows ? "User updated" : "User not found");
}

// ✅ DELETE
async function deleteUser(id) {
  const [result] = await db.execute('DELETE FROM users WHERE id = ?', [id]);
  console.log(result.affectedRows ? "User deleted" : "User not found");
}

// 🏁 MAIN RUNNER
async function main() {
  await setup();

  // Choose which operation to run
  await createUser("John Doe", "john@example.com");
  await createUser("Jane Smith", "jane@example.com");
  await getAllUsers();
  await getUserById(1);
  await updateUser(1, "Johnny Updated", "johnny@example.com");
  await deleteUser(2);
  await getAllUsers();

  db.end(); // close connection
}

main();
