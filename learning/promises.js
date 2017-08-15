import fetch from 'node-fetch';

const str = "get";

function getProfile() {
    return fetch(`http://httpbin.org/${str}`);
}

//http://httpbin.org/get

function getRepo() {
    let repo = `https://httpbin.org/user-agent`
//    console.log(repo)
    return fetch(repo);
}

getProfile()
    .then((profileResponse) => {
        return profileResponse.json()
    })
    .then((profile) => {
        return getRepo()
            .then((repoResponse) => {
                return repoResponse.json()

            })
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
