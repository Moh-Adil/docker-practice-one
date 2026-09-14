import Database from 'better-sqlite3';

const db = new Database('day.db', {});
db.pragma('journal_mode = WAL');

const createUsersStatement = db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL
    )
`)

createUsersStatement.run();

const insertDummyUsers = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)');

insertDummyUsers.run('John', "JohnDoe@mail.com");
insertDummyUsers.run('James', "JamesJoe@mail.com");
insertDummyUsers.run('Jack', "JackJill@mail.com");

export default db;