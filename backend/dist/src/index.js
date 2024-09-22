"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const schema_1 = require("./db/schema");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.json({ greeting: 'Wsgood' });
});
app.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age } = req.body;
    const person = yield db_1.default.insert(schema_1.UserTable)
        .values({
        name: name,
        age: age
    })
        .returning({
        name: schema_1.UserTable.name,
        age: schema_1.UserTable.age
    });
    res.json(person);
}));
const port = 3000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
