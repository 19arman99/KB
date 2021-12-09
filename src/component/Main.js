import React, { createElement } from 'react'
import Header from '../component/Header'
import MainStart from '../component/MainStart'
import UserSwitch from './UserSwitch'


export default class Main extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      profileBool: false,
      logoutBool: false
    }
  }
    
  // UserSwitch (functions)
    toggle(){
      document.querySelector(".header-user").classList.toggle("show");
      document.querySelector(".header-user-switch").classList.toggle("show");
      document.querySelector(".arrowUser").classList.toggle("show");
    }
    selectUserHide = () => {
      this.toggle();
    }
    profile = () => {
      this.toggle();
      this.setState({
        profileBool: true,
        logoutBool: false
      })
    }
    logOut = () => {
      this.toggle();
      this.setState({
        profileBool: false,
        logoutBool: true
      })
    }

  render() {
    //   Start
      if(this.state.profileBool === false && this.state.logoutBool === false){
        return (
            <div>
              <header>
                  <Header />
                  <UserSwitch 
                  CselectUserHide={this.selectUserHide}
                  Cprofile={this.profile}
                  ClogOut={this.logOut}
                  />
              </header>
              <main>
                <div className="selectTheUser">Select the user</div>
              </main>
            </div>
          )
      }else
    //   Profile
      if(this.state.profileBool === true && this.state.logoutBool === false){
        return (
            <div>
              <header>
                <Header />
                <UserSwitch 
                  CselectUserHide={this.selectUserHide}
                  Cprofile={this.profile}
                  ClogOut={this.logOut}
                  />
              </header>
              <main>
                <MainStart />
              </main>
            </div>
          )
      }else 
    //   LogOut
      if(this.state.logoutBool === true && this.state.profileBool === false){
        return (
            <div>
              <header>
                  <Header />
                  <UserSwitch 
                  CselectUserHide={this.selectUserHide}
                  Cprofile={this.profile}
                  ClogOut={this.logOut}
                  />
              </header>
              <main>
                <div className="selectTheUser">Select the user</div>
              </main>
            </div>
          )
      }
    
  }
}
