import type { NextApiRequest, NextApiResponse } from "next";

const login = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Data: ", req.body);
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

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Novo Projeto" <viniciusreis3105@gmail.com>', // sender address
      to: "viniciusreis3105@gmail.com, viniciusconta30@gmail.com", // list of receivers
      subject: "Novo Projeto !", // Subject line
      // text: `
      //   Novo projeto para análise,

      //   Nome: ${name}
      //   Whatsapp : ${number}
      //   E-mail: ${email}
      //   Empresa: ${empresa}
      //   Site: ${site}
      //   Projeto: ${project}
      //   Prazo: ${prazo}
      //   Orçamento: ${orcamento}
      //   Sobre: ${sobre}
      // `, // plain text body
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
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }

  main().catch(console.error);

  res.status(200).json({ message: "Bad Request" });
}
