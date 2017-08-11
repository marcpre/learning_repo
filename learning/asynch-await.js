import fetch from 'node-fetch';

const username = "marcpre";

function getProfile() {
    return fetch("https://api.github.com/${username}");
}

function getRepo() {
    return fetch("https://api.github.com/${username}/repo");
}

async function getCombined() {
    const profileResponse = await getProfile();
    const profile = await profileResponse.json();
    const repoResponse = await getRepo();
    const repo = await repoResponse.json();
    return {
        profile,
        repo
    };
};

(async  function(){
    const comb = getCombined();
    console.log(comb);
}());
