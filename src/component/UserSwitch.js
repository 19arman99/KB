import React from 'react'

export default class UserSwitch extends React.Component {
  
  render() {
    const {CselectUserHide, Cprofile, ClogOut} = this.props;
      return (
        <div>
          <button className="header-user" onClick={CselectUserHide}></button>
          <div className="header-user-switch">
              <button className="header-user1" onClick={Cprofile}>Profile</button>
              <button className="header-user2" onClick={ClogOut}>Log out</button>
          </div>
          <div className="arrowUser"></div>
        </div>
      )
  }
}