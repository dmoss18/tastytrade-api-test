/* TASTYTRADE API Integration */
const express = require('express');
const app = express();
const axios = require('axios');
 
// Load environment variables from .env file
require('dotenv').config();
 
// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
 
// Select environment (sandbox or production)
const isSandbox = true;  // Change to `false` for production
const baseUrl = isSandbox ? process.env.BASE_URL_SANDBOX : process.env.BASE_URL_PRODUCTION;
const email = isSandbox ? process.env.SANDBOX_EMAIL : process.env.PRODUCTION_EMAIL;
const password = isSandbox ? process.env.SANDBOX_PASSWORD : process.env.PRODUCTION_PASSWORD;
const accountMargin = isSandbox ? process.env.SANDBOX_ACCT_MRGN : process.env.PRODUCTION_ACCT_MRGN;
 
// Check if environment variables are loaded
if (!baseUrl || !email || !password) {
    console.error
    process.exit(1);
}
 
// Log environment variables for debugging
console.log('Base URL:', baseUrl);
console.log('Email:', email);
console.log('Account Margin:', accountMargin);
 
// Define login data for Tastytrade API
const loginData = {
    login: email,
    password: password,
    "remember-me": true
};
 
// Send a login request to Tastytrade API
axios.post(`${baseUrl}/sessions`, loginData, {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
.then(response => {
    console.log('Response data:', response.data);
})
.catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
});
 
// Define a basic GET route
app.get('/', (req, res) => {
    res.send('TASTYTRADE-HEARTBEAT-EXAMPLE-FOLDER-test1');
});
 
// Define a GET route with a parameter
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is: ${userId}`);
});