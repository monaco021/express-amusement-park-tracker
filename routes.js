const express = require("express");
const { db } = require("./config");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

if (process.env.NODE_ENV !== 'development') {
    router.get('/error-test', () => {
        throw new Error ('this-is-a-test-error');
    })
}

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

router.get("/parks", asyncHandler(async (req, res) => {
    const parks = await db.Park.findAll({
        order: [["parkName", "ASC"]]
    });
    res.render("park-list", {
        title: "Parks",
        parks
    });
}));

module.exports = router;
