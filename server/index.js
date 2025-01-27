import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import cors from "cors";
import * as dotenv from "dotenv";
import FormData from "form-data";

dotenv.config();


const app = express();
const PORT = 4000;



app.use(cors());
app.use(bodyParser.json());

app.post('/generate-image', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const formData = new FormData();
    formData.append('prompt', prompt);

    const { data } = await axios.post("https://clipdrop-api.co/text-to-image/v1", formData, {
      headers: {
        ...formData.getHeaders(),
        'x-api-key': process.env.OPEN_AI,
      },
      responseType: 'arraybuffer',
    });

    const base64Image = Buffer.from(data, 'binary').toString('base64');
    const resultImage = `data:image/png;base64,${base64Image}`;

    res.json({ success: true, message: "Image Generated", resultImage });
  } catch (error) {
    console.error("Error generating image:", error.response?.data || error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
