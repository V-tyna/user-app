import express from 'express';
import {users} from './DataBase/users.js'
import cors from 'cors';

const app = express();

app.use(cors({
    origin: '*'
}));

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(4200, () => {
console.log('Server has been started on port 4200');
});