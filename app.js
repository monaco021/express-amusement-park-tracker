const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const app = express();

app.set('view engine', 'pug');

app.use(morgan('dev'));
app.use(routes);

app.use((req, res, next) => {
    const err = new Error("The requests page couldn't be found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    if (process.env.NODE_ENV === "development") {
        //log error t database
    } else {
        console.error(err);
    }
    next(err);
});

app.use((err, req, res, next) => {
    if (err.status === 404) {
        res.status(404);
        res.render("page-not-found", { title: "Page Not Found" });
    } else {
        next(err);
    }
})
// const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

app.use((err, req, res, next) => {
    if (err.status === !404 || !err.status) {
        res.status(500);
        res.render('error', { 
            title: 'Server Error', 
            message: null,
            stack: null
        })
    }
})


module.exports = app;
