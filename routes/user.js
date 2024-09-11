import express from "express";
import { serverError } from "../helper/utils.js";
import { createMessage
} from "../controller/user.js";
import { sendEmail } from "../controller/mailer.js";

const router = express.Router();

// Post User Message
router.post("/usermessage/new", async (req, res) => {
    try {
        const newMessageData = await createMessage(req);
        if (!newMessageData) {
            res.status(400).json({error: "Cannot Create! Try Again or Send Message to vimalnash@gmail.com"});
        }
        const emailres = await sendEmail(newMessageData.userName, newMessageData.email, newMessageData.message);
        
        if(!emailres) {
            res.status(201).json({message: "Messaging Success", email: "Emailing Failed", data: newMessageData});
        } else {
            res.status(201).json({message: "Messaging Success", email: "Emailing Success", data: newMessageData});
        }
    } catch (error) {
        serverError(error, res);
    }
});

export const userRouter = router;