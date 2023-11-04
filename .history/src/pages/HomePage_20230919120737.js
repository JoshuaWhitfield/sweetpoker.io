import AccountCard from "../components/Card/AccountCard";
import ProfilePicture from "../components/ProfilePicture";
import { store } from "../store";

const HomePage = () => {
    console.log(store.getState().account)
    let userContent = [<ProfilePicture/>, <p>{store.getState().account.username}</p>, <p>${store.getState().balance.value}</p>];
    //, display: 'flex', justifyContent: 'center', alignItems: 'center'
    return (
        <div className='custom-body'>
            <AccountCard pfp={userContent[0]} username={userContent[1]} balance={userContent[2]} />
            
        </div>
    );
}

export default HomePage