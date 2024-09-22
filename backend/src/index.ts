import express from 'express';
import db from './db';
import { UserTable } from './db/schema';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ greeting: 'Wsgood' })
})

app.post('/', async (req, res) => {
    const { name, age } = req.body;
    const person = await db.insert(UserTable)
        .values({
            name: name,
            age: age
        })
        .returning({
            name: UserTable.name,
            age: UserTable.age
        })

        res.json(person)
})

const port = 3000
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})