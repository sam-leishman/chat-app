import React from 'react';
import { signout } from "../helpers/auth";

const ProfilePage = (rest) => {
    return (
        <div className='container-fluid profile-page' >
            <div className='user-info'>
                <div>
                    <h1 className='username'>{rest.user.displayName}</h1>
                    <p className='timestamp'>{rest.user.email}</p>
                </div>
                <img className='profile-pic' src={rest.user.photoURL} />
            </div>
            <button className='btn' onClick={signout}>Sign out <i className="fas fa-sign-out-alt"></i></button>
        </div>
    )
}

export default ProfilePage;