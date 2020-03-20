module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3",
      typeCast(field, next) {
        // Convert 1 to true, 0 to false, and leave null alone
        if (field.type === "TINY" && field.length === 1) {
          const value = field.string();
          return value ? value === "1" : null;
        }
        return next();
      }
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    pool: {
      afterCreate: (conn, done) => {
        // FOREIGN KEY SQLITE
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    }
  }
};
