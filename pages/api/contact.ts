import type { NextApiRequest, NextApiResponse } from "next";
// import nodemailer from "nodemailer";

const login = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  try {
    const {
      name,
      number,
      email,
      empresa,
      site,
      project,
      prazo,
      orcamento,
      sobre,
    } = req.body;

    const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: login,
        pass: pass,
      },
    });

    const info = await transporter.sendMail({
      from: '"Novo Projeto" <viniciusreis3105@gmail.com>', // sender address
      to: "viniciusreis3105@gmail.com, viniciusconta30@gmail.com", // list of receivers
      subject: "Novo Projeto !", // Subject line
      html: `
        <h3>Novo Projeto para Análise</h3>
        <b>Nome:</b> ${name}<br/>
        <b>Whatsapp:</b> ${number}<br/>
        <b>E-mail:</b> ${email}<br/>
        <b>Empresa:</b> ${empresa}<br/>
        <b>Site:</b> ${site}<br/>
        <b>Projeto:</b> ${project}<br/>
        <b>Prazo:</b> ${prazo}<br/>
        <b>Orçamento:</b> ${orcamento}<br/>
        <b>Sobre:</b> ${sobre}<br/>
      `, // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
