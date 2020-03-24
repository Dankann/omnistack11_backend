const express = require("express");
const app = express();

app.get('/', (request, responde) => {
    return responde.json({
        message: "Hello",
        sharp: "Dankann"
    });
});


app.listen(3333);