import { store } from "../../store";

let buttonName, buttonPath;
if (store.getState().account.logged_in) {
    const buttonName = 'Log In'
    const buttonPath = 'login'
} else {
    const buttonName = 'Sign Out'
    const buttonPath = 1
}

export const NAV_ITEMS = [
    {
        name: 'home',
        path: '/',
        target: '_self'
    },

    {
        name: 'lobby',
        path: '/lobby',
        target: '_self'
    },

    {
        name: 'social',
        path: '/social',
        target: '_self'
    },
    
    {
        name: buttonName,
        path: `/${buttonPath}`
    },
];