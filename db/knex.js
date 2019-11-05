const path = require("path");

module.exports = {
    client: "mysql",
    connection: {
        host: "localhost",
        user: "root",
        password: "St3v3sm!th",
        database: "online_movie_ticket"
    },
    migrations: {
        tableName: "migrations",
        directory: path.resolve(__dirname, "./migrations")
    },
    useNullAsDefault: true
};