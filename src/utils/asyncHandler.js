const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export {asyncHandler}

const hondler = (hand) => {(req, res, next) => {
    Promise.resolve(hand(req, res, next)).reject((err) => next(err))
}}

export {hondler}


const taha = (aina) => {(req, res, next) => {
    Promise.resolve(aina(req, res, next)).reject((err) => next(err))
}}

export {taha}


const fuck = (shak) => {(req, res, next) => {
    Promise.resolve(shak(req, res, next)).reject((err) => next(err))
}}

export {fuck}


// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }
