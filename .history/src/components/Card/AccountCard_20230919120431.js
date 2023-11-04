

const AccountCard = (props) => {
    return (
        <>
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
        </>
    );
}

export default AccountCard