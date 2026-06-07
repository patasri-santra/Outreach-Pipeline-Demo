require("dotenv").config();
const axios = require("axios");

async function sendEmail(to, subject, htmlContent) {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Test",
          email: "tempburn9@gmail.com"
        },
        to: [
          {
            email: to
          }
        ],
        subject,
        htmlContent
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Email sent!");
    console.log(response.data);

  } catch (err) {
    console.error(
      err.response?.data || err.message
    );
  }
}

module.exports = sendEmail;