

const AccountCard = (props) => {
    const { pfp, username, balance } = props;
    return (
        <>
            <div className='mt-5 basic-card content-center' style={{width: '200px', height: '200px'}}>
                <div className='mt-3' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    {pfp}
                </div>
                <br />
                <div className='mt-1' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30px'}}>
                    {username}
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px'}}>
                    {balance}
                </div>
            </div>
        </>
    );
}

export default AccountCard