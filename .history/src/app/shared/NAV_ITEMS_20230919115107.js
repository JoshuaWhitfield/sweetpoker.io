import { store } from "../../store";
import { setLogIn } from "../../actions/accountActions";
let buttonName, buttonPath, buttonTarget;

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
        target: buttonTarget
    },
];