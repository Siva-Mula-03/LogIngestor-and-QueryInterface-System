const express = require('express');
const router = express.Router();

const logController = require("../controller/logAPI");


router.post("/", logController.insertLog);
router.post("/level", logController.index);
router.get('/', (req, res) => {
    res.send('Hello, this is the root path!');
});

module.exports = router