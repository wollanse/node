const express = require("express");

const app = express();
const data = [];
app.use(express.json());

app.post("/endpoint", (req, res) => {
    const { champ, skill1, skill2, skill3, skill4} = req.body;
    data.push({
        champ: champ,
        skill1: skill1,
        skill2: skill2,
        skill3: skill3,
        skill4: skill4
    })
    return res.send("campeão cridado!")
})
app.listen(12345, () => {
    console.log("campeões do lol")
})