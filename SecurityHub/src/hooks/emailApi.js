import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { to, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'securitiy.hub@gmail.com',
      pass: 'dyyvcwogyshexsqv',
    },
  });

  const mailOptions = {
    from: 'securitiy.hub@gmail.com',
    to,
    subject,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.json({ success: true, info });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

app.listen(3001, () => {
  console.log('Servidor de e-mail rodando em http://localhost:3001');
});
