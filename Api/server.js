const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { json } = require('body-parser');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(json());

const {parsed: config} = dotenv.config();

const BASE_URL = `https://api.cloudinary.com/v1_1/${config.CLOUD_NAME}/resources/image`
const auth = {
    username: config.API_KEY,
    password: config.API_SECRET,
}

app.get("/photos", async (req, res) => {

    const response = await axios.get(BASE_URL, {
        auth,
    });

  return res.send(response.data);
});

const PORT = 7000;
// Port server istedigimiz sekilde ayarlayabiliriz.
app.listen(PORT, console.log(`Server running on port ${PORT}`));
