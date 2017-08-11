import fetch from 'node-fetch';

const username = "marcpre";

function getProfile() {
    return fetch("https://api.github.com/${username}");
}

function getRepo() {
    return fetch("https://api.github.com/${username}/repo");
}