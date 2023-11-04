import ProfilePicture from "../components/ProfilePicture";
import { store } from "../store";

const HomePage = () => {
    let userContent = [<ProfilePicture/>, <p>{store.getState().account.username}</p>, <p>${store.getState().balance.value}</p>];
    //, display: 'flex', justifyContent: 'center', alignItems: 'center'
    return (
        <div className='custom-body'>
            <div className='mt-5 basic-card content-center' style={{width: '200px', height: '200px'}}>
                <div className='mt-2' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    {userContent[0]}
                </div>
                <div className='mt-1' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30px'}}>
                    {userContent[1]}
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px'}}>
                    {userContent[2]}
                </div>
            </div>
        </div>
    );
}

export default HomePage