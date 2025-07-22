import * as SQLite from "expo-sqlite";

const db = await SQLite.openDatabaseAsync("databaseName");

export const initTodoTable = async () => {
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS Todo (
      id INTEGER PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      icon TEXT NOT NULL,
      streak INTEGER DEFAULT 0,
      done BOOLEAN NOT NULL DEFAULT false
    );
  `);
};

export const createTodo = async (name: string, icon: string) => {
  await db.runAsync(
    "INSERT INTO Todo (name, icon, streak, done) VALUES (?, ?, 0, false)",
    name,
    icon
  );
};

export const markTodoAsDone = async (id: number) => {
  await db.runAsync("UPDATE Todo SET done = true WHERE id = ?", id);
};

export const deleteTodo = async (id: number) => {
  await db.runAsync("DELETE FROM Todo WHERE id = ?", id);
};

export const getAllTodos = async () => {
  const todos = await db.getAllAsync("SELECT * FROM Todo ORDER BY id DESC");
  return todos;
};

export const getTodoById = async (id: number) => {
  const todo = await db.getFirstAsync("SELECT * FROM Todo WHERE id = ?", id);
  return todo;
};
