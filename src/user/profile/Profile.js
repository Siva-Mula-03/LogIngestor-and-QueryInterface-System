import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const { currentUser } = this.props;
        console.log(currentUser);

        return (
            <div className="profile-container">
                <div className="container">
                    <div className="profile-info">
                    <div className="profile-avatar">
  {currentUser && currentUser.imageUrl ? (
    <img src={currentUser.imageUrl} alt={currentUser.name} />
  ) : (
    <div className="text-avatar">
      <span>{currentUser && currentUser.name ? currentUser.name[0] : ''}</span>
    </div>
  )}
</div>
                        <div className="profile-name">
                            <h2>{currentUser && currentUser.name}</h2>
                            <p className="profile-email">{currentUser && currentUser.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
