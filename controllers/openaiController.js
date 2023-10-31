const openai = require('../config/openaiConfig')

const generateMeta = async (title) => {

  const description = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: 'user',
        content: `Come up with a description for a YouTube video called ${title}`
      }
    ],
    max_tokens: 100
  })

  console.log(description.choices[0].message)

  const tags = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{
      role: 'user',
      content:`come up with 10 keywords for a YouTube video called ${title}`
    }],
    max_tokens: 100
  })

  console.log(tags.choices[0].message)

}

const generateImage = async (desc) => {

    try{

        const image = await openai.images.generate({
            prompt: desc,
            n: 1,
            size: '1024x1024'
        })
        console.log(image.data)

    } catch (error) {
        console.error(error);
    }
  
}

module.exports = { generateMeta, generateImage }