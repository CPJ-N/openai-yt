const { OpenAI } = require('openai')

require('dotenv').config()

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
});

// const openai = OpenAIApi(configuration)

module.exports = openai