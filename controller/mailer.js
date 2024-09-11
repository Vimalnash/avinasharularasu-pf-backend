import nodemailer from "nodemailer";

// Send Mail Function
const sendEmail = async (userName, email, message) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.autoemail,
            pass: process.env.autoemailpass
        }
    });

    const mailStyle = `
    text-align: center; 
    border: 1px solid gray;
    border-radius: 10px 10px 10px 10px;
    padding: 2px;
    display: flex;
    flex-direction: column;
    gap-2;
    align-items: flex-start;
    `

    const mailOptions = {
        from: 'vaasaviram@gmail.com',
        to: "vimalnash@gmail.com",
        subject: `Message Fr ${userName}-Portfolio-AvinashArularasu`,
        html: `
        <div>
            <h3>Message from ${userName}</h3>
            <p>My Email: ${email}<p/>
            <p>Message: ${message}<p/>
            <a href="https://gtd28-portfolio-frontend.netlify.app/">
                Mail Received from - Portfolio-AvinashArularasu 
            </a>
        </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email Sent Successfully");
        return true;
    } catch (error) {
        console.log("Error Sending Email: ", error);
        return false;
    }
};

export { sendEmail }