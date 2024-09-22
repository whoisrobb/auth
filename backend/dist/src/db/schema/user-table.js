"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.UserTable = (0, pg_core_1.pgTable)("user", {
    userId: (0, pg_core_1.uuid)("userId").defaultRandom().primaryKey(),
    name: (0, pg_core_1.varchar)("name"),
    age: (0, pg_core_1.integer)("age")
});
