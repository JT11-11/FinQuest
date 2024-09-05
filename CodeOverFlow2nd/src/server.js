import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: 'sk-Gsi5hkpIUMYKe5CVUvoQlFdhL9kgXzJ2hhu6Yqqo97T3BlbkFJ9KzvO0IXqMpLSK3sjlc8RyH98aQh7T_Kr0klxSTBEA',
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful teacher which teaches students on financial literarcy." },
        { role: "user", content: prompt }
      ],
      max_tokens: 512,
      temperature: 0.7,
    });

    res.send(completion.choices[0].message.content);
  } catch (error) {
    console.error("Error with OpenAI API:", error);
    res.status(500).send("An error occurred while processing your request.");
  }
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
