import { store } from "../../store";

let buttonName, buttonPath, buttonTarget;
if (store.getState().account.logged_in) {
    buttonName = 'Log In'
    buttonPath = '/login'
    buttonTarget = '_self'
} else {
    buttonName = 'Sign Out'
    buttonPath = 
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
        path: buttonPath,
        target: 
    },
];