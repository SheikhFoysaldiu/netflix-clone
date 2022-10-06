import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../component/Navbar/Navbar'
import { selectUser } from '../../features/userSlice'
import "./Profile.style.css"
import { auth } from '../../firebase'
const Profile = () => {
    const user = useSelector(selectUser)
    return (
        <div className="profileScreen">
            <Navbar />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="avator" />
                    <div className="profileScreen__details">
                        <h2>
                            {user.email}
                        </h2>
                        <div className="profileScreen__plans">
                            <h3>
                                Plans
                            </h3>
                        <button className='profileScreen__singOut' onClick={()=> auth.signOut()}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Profile