const AsyncErr = func => (req, res, next) =>
    Promise.resolve(func(req, res, next))
        .catch(next)

export default AsyncErr