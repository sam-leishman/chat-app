import { Component } from 'react';

class ProfilePage extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='user-info'>
                    <h1 className='username'>Username</h1>
                    <div className='profile-pic'></div>
                </div>
            </div>
        )
    }
}

export default ProfilePage;