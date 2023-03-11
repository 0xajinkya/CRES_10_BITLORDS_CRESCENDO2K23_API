const { Configuration, OpenAIApi } = require('openai');

const router = require('express').Router();
const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY
})
const openai = new OpenAIApi(configuration);

router.post('/chat', async (req, res) => {
    const { prompt } = req.body;

    const completion = await openai.createCompletion({
        model: 'text-davinci-002',
        prompt: prompt,
        temperature: .7,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        // stop: ["{}"],
    })

    console.log(completion.data.choices)

    res.send(completion.data.choices[0].text);

})

module.exports = router;