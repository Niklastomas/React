export const authEndpoint = "https://accounts.spotify.com/authorize"

const redirectUri = "http://localhost:3000/";
const clientId = "a514593c5ec24f10b9f8cec44d66a690";

const scopes = [
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-top-read",
    "user-read-recently-played"

];

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1)
    .split("&")
    .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
