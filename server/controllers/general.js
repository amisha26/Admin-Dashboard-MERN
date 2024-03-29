import User from "../models/User.js";

export const getUser = async(req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.send(404).json({ message: err.message })
    }
}