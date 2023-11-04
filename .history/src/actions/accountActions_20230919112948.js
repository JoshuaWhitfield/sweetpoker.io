const set_username = '@set_username';
const set_decal = '@set_decal';
const set_login = '@set_login';

export const setUsername = (username) => {
    return {
        type: set_username,
        payload: username,
    }
}

export const setDecal = (decal) => {
    return {
        type: set_decal,
        payload: decal,
    }
}

export const setLogIn = (bool) => {
    return {
        type: set_login,
        payload: bool,
    }
} 