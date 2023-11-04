import { store } from "../../store";

if (store.getState().account.logged_in) {
    buttonName = 'Log In'
    buttonPath = 'login'
} else {
    buttonName = 'Sign Out'
    buttonPath = 'sign-out'
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
        path: `/${buttonName}`
    },
];