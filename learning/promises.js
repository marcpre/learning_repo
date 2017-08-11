import fetch from 'node-fetch';

const username = "marcpre";

function getProfile() {
    return fetch("https://api.github.com/${username}");
}

function getRepo() {
    return fetch("https://api.github.com/${username}/repo");
}

getProfile()
    .then((profileResponse) => profileResponse.json())
    .then((profile) => {
        return getRepo()
            .then((repoResponse) => repoResponse.json())
            .then((repos) => {
                return {
                    repos,
                    profile
                };
            });
    })
    .then((combined) => {
        console.log(combined);
    })
    .catch((err) => {
        console.log(err);
    });