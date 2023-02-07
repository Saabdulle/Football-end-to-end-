const logger = (req, res, next) => {
    console.log(res.method, req.originalUrl)
    next()
}

module.exports = logger;
