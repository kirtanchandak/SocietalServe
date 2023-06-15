import emailjs from "emailjs-com";

const sendEmail = (receiverEmail, message) => {
  const serviceID = "service_vaowg6c";
  const templateID = "template_goo9va9";
  const userID = "w3aBkitbTj4JscZSC";

  // Set up the email configuration
  const emailParams = {
    to_email: receiverEmail,
    receiver_email: receiverEmail,
    message: message,
  };

  // Send the email
  emailjs
    .send(serviceID, templateID, emailParams, userID)
    .then((response) => {
      console.log("Email sent:", response.status);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
};

export default sendEmail;
