function main() {

    // const urlChannels = `https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${fireshipChannelId}`;
    const FIRESHIP_CHANNEL_ID = 'UCsBjURrPoezykLs9EqgamOA'

    const maxResults = 10
    const urlVideos = `https://youtube-v31.p.rapidapi.com/search?channelId=${FIRESHIP_CHANNEL_ID}&part=snippet%2Cid&order=date&maxResults=${maxResults}`;

    const content = null || document.getElementById('content');
    const projectsContent = null || document.getElementById('projects-content');

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '817d732ffemsh678da9734f0ac51p1e5e98jsn103b0d703f03',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    const myProjects = [
        {
            title: 'Lootify',
            url: 'https://fabroche-simple-e-commerce.netlify.app/',
            description: 'A simple e-commerce app maked with the intencion of practice the fundamentals of React JS and Tailwind CSS (Loading skeleton, React Context, React Hooks, React Custom Hooks), this app use the fake store API.',
            github: 'https://github.com/fabroche/simple-e-commerce',
            image: './src/assets/img/lootify-preview.png'
        },
        {
            title: 'Moviescape',
            url: 'https://fabroche.github.io/moviescape/',
            description: 'A tiny mobile only movies catalogue web app maked with the intencion of learn the fundamentals of consuming API rest (Lazy loading, Loading skeleton, Internazionalization ...), this app use The movieDB API.',
            github: 'https://github.com/fabroche/simple-todo-app',
            image: './src/assets/img/moviescape-preview.png'
        },
        {
            title: 'Simple Todo App',
            url: 'https://fabroche.github.io/simple-todo-app/',
            description: 'A Simple todo List that I made with the intucion of learn the fundamentals of React JS (Loading skeleton, React Context, React Hooks, React Custom Hooks), this app use localStorage.',
            github: 'https://github.com/fabroche/simple-todo-app',
            image: './src/assets/img/Preview-simple-todo-App.png'
        },

    ]


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
            projectsContent.innerHTML = `
            ${myProjects.map(project => `
             <a 
             class="group relative hover:scale-105 transition:all duration-200 ease"
             href="${project.url}"
             target="_blank"
             >
                <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img 
                    src="${project.image}"
                    alt="${project.description}"
                    class="aspect-video ${project.title === 'Moviescape' ? 'object-scale-down' : ''}"
                      >
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        <b>${project.title}</b>
                    </h3>
                </div>
            </a>
            `).slice(0, 4).join('')}
            `;
        } catch (error) {
            console.error(error)
        }
    })()

    // (() => {
    //     try {
    //         projectsContent.innerHTML = `
    //         ${myProjects.map(project => `
    //          <a
    //          class="group relative"
    //          href="${project.url}"
    //          target="_blank"
    //          >
    //             <div
    //                     class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
    //                 <img
    //                 src="${project.image}"
    //                 alt="${project.description}"
    //                 class="w-full"
    //                   >
    //             </div>
    //             <div class="mt-4 flex justify-between">
    //                 <h3 class="text-sm text-gray-700">
    //                     <span aria-hidden="true" class="absolute inset-0"></span>
    //                     <b>${project.title}</b>
    //                 </h3>
    //             </div>
    //         </a>
    //         `).slice(0, 4).join('')}
    //         `;
    //     } catch (error) {
    //         console.error(error)
    //     }
    // })()
}

document.addEventListener('DOMContentLoaded', main);