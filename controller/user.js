import { USERMESSAGE } from "../model/userMessage.js";

// Create User Message from Contact form
function createMessage (req) {
    return new USERMESSAGE (
        {
            ...req.body
        }
    ).save()
};

export {
    createMessage
}