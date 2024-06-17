import axios from 'axios'
const api_key= import.meta.env.VITE_API_KEY;

if(!api_key){
    console.error("Error getting api key")
}
// console.log(api_key)
const openai = axios.create({
    baseURL: 'https://api.openai.com/v1',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${api_key}`
    }
  });


export const fetchGPT4Response = async(prompt) =>{
    try{
        const res = await openai.post('/chat/completions', {
            model:'gpt-4',
            messages: [{ role: 'user', content: prompt}],
            max_tokens:150,
        });

        return res.data.choices[0].message.content
    }

    catch(err){
        console.error(err)
        throw err
    }
}
