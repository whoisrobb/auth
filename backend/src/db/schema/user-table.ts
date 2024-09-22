import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";


export const UserTable = pgTable("user", {
    userId: uuid("userId").defaultRandom().primaryKey(),
    name: varchar("name"),
    age: integer("age")
})