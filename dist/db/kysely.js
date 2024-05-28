"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mysql2_1 = require("mysql2");
const kysely_1 = require("kysely");
const dialect = new kysely_1.MysqlDialect({
    pool: (0, mysql2_1.createPool)({
        database: process.env.DATABASE_NAME,
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        port: parseInt((_a = process.env.DATABASE_PORT) !== null && _a !== void 0 ? _a : "3306"),
    })
});
// Database interface is passed to Kysely's constructor, and from now on, Kysely 
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how 
// to communicate with your database.
exports.db = new kysely_1.Kysely({
    dialect,
});
