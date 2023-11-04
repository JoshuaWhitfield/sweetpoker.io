import { store } from "../../store";
import { setLogIn } from "../../actions/accountActions";
let buttonName, buttonPath, buttonTarget;
if (store.getState().account.logged_in) {
    buttonName = 'logout'
    buttonPath = () => {
        store.dispatch(setLogOut(false))
    }
    buttonTarget = '_self'
} else {
    buttonName = 'logout'
    buttonPath = '/login'
    buttonTarget = '_self'
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
        target: buttonTarget
    },
];