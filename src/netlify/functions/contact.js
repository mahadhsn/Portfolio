const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Parse request body
  const { firstName, lastName, email, subject } = JSON.parse(event.body);

  const formattedSubject = `Contact Form Submission from ${firstName} ${lastName}`;
  const formattedBody = `
    Name: ${firstName} ${lastName}
    Email: ${email}
    Subject: ${subject}
  `;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Set EMAIL_USER in Netlify's environment variables
      pass: process.env.EMAIL_PASS, // Set EMAIL_PASS in Netlify's environment variables
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: formattedSubject,
    text: formattedBody,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email' }),
    };
  }
};