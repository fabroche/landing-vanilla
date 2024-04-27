function main() {

    // const urlChannels = `https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${fireshipChannelId}`;
    const FIRESHIP_CHANNEL_ID = 'UCsBjURrPoezykLs9EqgamOA'

    const maxResults = 10
    const urlVideos = `https://youtube-v31.p.rapidapi.com/search?channelId=${FIRESHIP_CHANNEL_ID}&part=snippet%2Cid&order=date&maxResults=${maxResults}`;

    const content = null || document.getElementById('content')

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '817d732ffemsh678da9734f0ac51p1e5e98jsn103b0d703f03',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    async function fetchChannelVideos(urlApi, options) {
        try {
            const response = await fetch(urlApi, options);
            return await response.json();
        } catch (error) {
            return error;
        }
    }

    async function fetchVideoDetails(videoId) {
        const url = `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '817d732ffemsh678da9734f0ac51p1e5e98jsn103b0d703f03',
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    }

    (async () => {
        try {
            const videos = await fetchChannelVideos(urlVideos, options);
            content.innerHTML = `
            ${videos.items.map(video => `
             <a 
             class="group relative"
             href="https://www.youtube.com/watch?v=${video.id.videoId}"
             target="_blank"
             >
                <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img 
                    src="${video.snippet.thumbnails.high.url}"
                    alt="${video.snippet.description}"
                    class="w-full"
                      >
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        <b>${video.snippet.title}</b>
                    </h3>
                </div>
            </a>
            `).slice(0, 4).join('')}
            `;
        } catch (error) {
            console.error(error)
        }
    })()
}

document.addEventListener('DOMContentLoaded', main);