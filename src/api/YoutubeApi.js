// import fetch from "node-fetch";

export default function YoutubeApi() {

    async function fetchChannelDetail(urlApi) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '817d732ffemsh678da9734f0ac51p1e5e98jsn103b0d703f03',
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(urlApi, options);
            return await response.json();
        } catch (error) {
            return error;
        }
    }

    const getChannelDetails = async (urlApi) => {
        const channelDetail = await fetchChannelDetail(urlApi);

        channelDetail
            ? console.log(channelDetail)
            : console.error(channelDetail)
    }

}