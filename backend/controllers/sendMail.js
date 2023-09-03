import express from "express";
import nodemailer from "nodemailer";
import { htmlToText } from "nodemailer-html-to-text";
import OpenAI from "openai";

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
transporter.use("compile", htmlToText());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

//Mail the user
router.route("/").post(async (req, res) => {
  const {
    email,
    fullName,
    age,
    highestEdu,
    institute,
    study,
    workExp,
    canadaInstitute,
    canadaProgram,
    applyingCountry,
    futureGoals,
    listeningScores,
    readingScores,
    speakingScores,
    writingScores,
    paidTuitionFee,
    tuitionFee,
    gic,
    payGIC,
  } = req.body;

  const aiResponse = await openai.completions.create({
    model: "text-davinci-003",
    prompt: `Please make a customized statement of purpose i want to study abroad in ${canadaInstitute} for ${canadaProgram} in 
    Canada, my name is ${fullName} and i am from ${applyingCountry} and highest level of education is ${highestEdu} from ${institute}.
    This is my wroking experience ${workExp} and my future goal is ${futureGoals}`,
    max_tokens: 1000,
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: `Statement of Purpose for ${fullName}`,
    html: `
    <div>
    <h1>Welcome ${fullName}</h1>
    <p style="margin-bottom: 10px">Kindly have a look to the details you have submitted.<p>
    <p>
      Email: <b>${email}</b>
    </p>
    <p>
      Name: <b>${fullName}</b>
    </p>
    <p>
      Age: <b>${age}</b>
    </p>
    <p>
      Highest Level of Education: <b>${highestEdu}</b>
    </p>
    <p>
      Institute where you completed your highest level of education: <b>${institute}</b>
    </p>
    <p>
      What did you study: <b>${study}</b>
    </p>
    <p>
      Do you have any relevant work experience? <b>${workExp}</b>
    </p>
    <p>
      What institute did you get admitted to in Canada? <b>${canadaInstitute}</b>
    </p>
    <p>
      What is your program of study in Canada? <b>${canadaProgram}</b>
    </p>
    <p>
      Which country are you applying from? <b>${applyingCountry}</b>
    </p>
    <p>
      What are your future goals? <b>${futureGoals}</b>
    </p>
    <p>
      English Scores - Listening: <b>${listeningScores}</b>
    </p>
    <p>
      English Scores - Reading: <b>${readingScores}</b>
    </p>
    <p>
      English Scores - Speaking: <b>${speakingScores}</b>
    </p>
    <p>
      English Scores - Writing: <b>${writingScores}</b>
    </p>
    <p>
      Did you pay your first year tuition? <b>${paidTuitionFee}</b>
    </p>
    <p>
      How much tuition fee did you pay? <b>${tuitionFee}</b>
    </p>
    <p>
      Did you do a GIC? <b>${gic}</b>
    </p>
    <p>
      How much did you pay towards GIC <b>${payGIC}</b>
    </p>
  
  <p style="margin-top: 20px">After thoroughly analyzing your form data, we have generated a customised SOP for you:</p>
  <div style="margin-top: 20px">${aiResponse.choices[0].text}</div>
  </div>
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully" });
    console.log("success");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Email sending failed" });
  }
});

export default router;
