const log_in = '@log-in';
const sign_up = '@sign-Up';
const set_username = '@set_username';
const set_decal = '@set_decal';

const LogIn = (username) => {
    return {
        type: log_in,
        payload: username,
    }
}