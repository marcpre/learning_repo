const fetch = require('node-fetch');

function getProfile() {
    return fetch(`http://httpbin.org/user-agent`);
}

function getRepo() {
    return fetch(`https://httpbin.org/get`);
}

async function getCombined() {
    try {
        const profileResponse = await getProfile();
        const profile = await profileResponse.json();
        const repoResponse = await getRepo();
        const repo = await repoResponse.json();

        return {
            profile,
            repo
        };
    }
    catch (error) {
        console.log("An error occured " + error)
    }
};

getCombined().then(data => console.log(data));
