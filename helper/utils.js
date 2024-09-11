
// Catch Block server error message function
export function serverError(error, res) {
    return res.status(500).json({error:"Internal Server Error", errorData: error})
}