// a wrapper function to cover try-catch. Catch block shifts the middleware.

module.exports = (fn) => {
    return (req, res, next) => {
      fn(req, res, next).catch(next);
    };
};