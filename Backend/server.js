const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());


const users = {};

app.post('/register', async (req, res) => {
    const { username, password } = req.body;


    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    if (users[username]) {
        return res.status(409).json({ message: 'Username already exists' });
    }

   
    const hashedPassword = await bcrypt.hash(password, 10);

    users[username] = { password: hashedPassword };

    return res.status(201).json({ message: 'User registered successfully' });
});
app.get('/welcome', (req, res) => {
    
    const { username } = req.query;

 
    if (users[username]) {
        return res.status(200).json({ message: `Welcome, ${username}!` });
    }

    return res.status(404).json({ message: 'User not found' });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});