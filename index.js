


const { Telegraf } = require("telegraf");
const { OpenAIApi } = require("openai");

const telegramToken = "6453014925:AAE3BMNEGJ6rxKmHmeLJGiS6Py8rH1rHbHE";
const openaiKey = "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";

const bot = new Telegraf(telegramToken);

const openai = new OpenAIApi({ apiKey: openaiKey });

bot.on("text", async (ctx) => {
    try {
        const chatResponse = await openai.createCompletion({
            engine: "davinci", // Выберите нужный движок
            prompt: ctx.message.text,
            max_tokens: 50 // По вашим требованиям
        });

        const replyText = chatResponse.choices[0].text;

        ctx.reply(replyText);
    } catch (error) {
        console.error("Error:", error);
    }
});

bot.launch();
