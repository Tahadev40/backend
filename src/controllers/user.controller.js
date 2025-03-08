import { asyncHandler} from "../utils/asyncHandler.js"

const  registerUser = asyncHandler( async (req, res) => {
    res.status(200).json({
        message: "work is not done but in progress"
    })
})


export {registerUser} 