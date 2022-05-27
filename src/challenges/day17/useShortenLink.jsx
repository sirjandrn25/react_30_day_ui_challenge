import React from 'react'
import axios from 'axios';
const base_url = "https://api.shrtco.de/v2/shorten"
const link_arr = [
    {
        'code':1,
        'original_link':'https://sirjan.com',
        'shorten_link':'https://skdflaks.com'
    },
    {
        'code':2,
        'original_link':'https://sukra.com',
        'shorten_link':'https://sukrehero.com'
    },
    {
        'code':3,
        'original_link':'https://suraj.com',
        'shorten_link':'https://raikanxa.com'
    },
]

const useShortenLink = () => {
    const [links,setLinks] = React.useState(link_arr);
    const [loading,setLoading] = React.useState(false);

    const fetchShortenLinks = ()=>{
        setLoading(true)
        const url = `${base_url}?url=30day-ui-challenge.netlify.app`
        fetch(url).then(resp=>resp.json()).then(json_resp=>{
            console.log(json_resp)
        })
        // axios.get(url).then(resp=>{
        //     const data = resp.data
        //     const link = {
        //         code:data.result.code,
        //         shorten_link:data.result.full_short_link,
        //         original_link:data.result.original_link
        //     }
        //     setLinks([link,...links]);
        //     setLoading(false)
        // }).catch(error=>{
        //     console.log(error)
        //     setLoading(false)
        // })
    }

    const createShortenLink = (url)=>{
        
        setLoading(true);
        const data = {url:url}
        
        const config = {
            method:'post',
            origin:'http://localhost:3000',
            url:'http://tinyurl.com/api-create.php',
            headers:{
                "Access-Control-Allow-Origin": "*",
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data:data
        }
        
        axios(config).then(resp=>{
            console.log(resp.data)
        }).catch(error=>{
            console.log(error);
        })
    }
  return [links,fetchShortenLinks,createShortenLink,loading]
}

export default useShortenLink
