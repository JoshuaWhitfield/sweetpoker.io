import ProfilePicture from "../components/ProfilePicture";

const HomePage = () => {
    let userContent = [<ProfilePicture/>, <p><strike>SP</strike>&nbsp;300,000</p>];
    //, display: 'flex', justifyContent: 'center', alignItems: 'center'
    return (
        <div className='custom-body'>
            <div className='mt-5 basic-card content-center' style={{width: '200px', height: '200px'}}>
                <div className='mt-2' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <ProfilePicture/>
                </div>
                <div className='mt-1' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30px'}}>
                    <p>username</p>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px'}}>
                    <p>$300,000</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage