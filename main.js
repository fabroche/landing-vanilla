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
            resume: 'Buy products, check your orders, enjoy cute animations, find your favorites products all with Lootify, find happiness was never so easier!',
            github: 'https://github.com/fabroche/simple-e-commerce',
            image: './src/assets/img/Lootify-preview.png'
        },
        {
            title: 'Moviescape',
            url: 'https://fabroche.github.io/moviescape/',
            description: 'A tiny mobile only movies catalogue web app maked with the intencion of learn the fundamentals of consuming API rest (Lazy loading, Loading skeleton, Internazionalization ...), this app use The movieDB API.',
            resume: 'Are you looking commends of a movie for see in family, share with friends or maybe for impress your favorite person 😏. Moviescape it\'s your place.',
            github: 'https://github.com/fabroche/simple-todo-app',
            image: './src/assets/img/moviescape-preview.png'
        },
        {
            title: 'Simple Todo App',
            url: 'https://fabroche.github.io/simple-todo-app/',
            description: 'A Simple todo List that I made with the intucion of learn the fundamentals of React JS (Loading skeleton, React Context, React Hooks, React Custom Hooks), this app use localStorage.',
            resume: 'You feel that your head is about to explode from so much responsibility, or you suffer from terrible mental lapses and end up forgetting important tasks, here is Simple Todo App ready to share that burden with you.',
            github: 'https://github.com/fabroche/simple-todo-app',
            image: './src/assets/img/Preview-simple-todo-App.png'
        },

    ]

    const pageLinks = {
        linkAbout: document.getElementById('link-about'),
        linkProjects: document.getElementById('link-projects'),
        linkContact: document.getElementById('link-contact')
    }

    Object.values(pageLinks).forEach(link => link.addEventListener(
            'click',
            (e) => document.getElementById(link.id.split('-')[1]).scrollIntoView({behavior: "smooth"})
        )
    )

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
             <div 
             class="group relative hover:scale-105 transition:all duration-200 ease"
             >
                <div
                        class="w-full bg-gray-200 border border-black/40 rounded-lg aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img 
                    src="${project.image}"
                    alt="${project.description}"
                    class="aspect-video ${project.title === 'Moviescape' ? 'object-scale-down' : ''}"
                      >
                </div>
                <div class="mt-2 flex flex-col justify-between gap-2 px-2 transition:all duration-200 ease">
                    <a 
                    class="text-lg text-gray-700" 
                    href="${project.url}"
                    target="_blank"
                   >
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        <b>${project.title}</b>
                    </a>
                    <p class="text-base text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto md:text-sm lg:mx-0 h-fit max-h-24 modern-scroll-bar overflow-y-scroll z-30">${project.resume}</p>
                <a
                href="${project.github}"
                target="_blank" 
                class="select-none flex items-center justify-start gap-1 border border-black rounded-lg w-fit py-1 px-2 z-30 hover:scale-105 transition:all duration-200 ease"
                >
                <img 
                class="github-icon" src="./src/assets/icons/icons8-github.svg" WIDTH="20" SIZES="20">
                Github
                </a>
                </div>
            </div>
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