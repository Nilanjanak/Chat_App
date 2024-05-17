const express = require("express");
const cors = require("cors");
const axios = require('axios');
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      {username: username, secret: username, first_name: username},
      {headers: {"PRIVATE-KEY": "43b2e8bc-127c-49d5-acb4-7648bee1c5c9"}}
    );
    return res.status(r.status).json(r.data);
  } catch(e) {
    return res.status(e.response.status).json(e.response.data);
  }

});

app.listen(3001);
