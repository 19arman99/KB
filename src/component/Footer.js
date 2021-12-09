import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <footer>
            <div>
              <div className="footer-title">
                <span className="footer-tasks">Active tasks: <span className="active-task"></span></span>
                <span>Finished tasks: <span className="finish-task"></span></span>
              </div>
            </div>
            <div className="footer-title">Kanban board by Arman, 2021</div>
        </footer>
      </div>
    )
  }
}