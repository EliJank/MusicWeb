import Support from "../models/supportModel.js";

const supportPost = async (req, res) => {
    const { email, message } = req.body;
    try {
        const newSupport = new Support({ email, message });
        await newSupport.save();
        res.status(201).json({ message: "Support request created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating support request", error });
    }
}

export default supportPost;