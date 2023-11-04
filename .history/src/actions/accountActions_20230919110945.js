const set_username = '@set_username';
const set_decal = '@set_decal';

const setUsername = (username) => {
    return {
        type: set_username,
        payload: username,
    }
}