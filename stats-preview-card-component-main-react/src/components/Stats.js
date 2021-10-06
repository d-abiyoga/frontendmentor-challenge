import React from 'react'

const Stats = () => {
    return (
        <div className="stats">
          <ul className="stats__list">
            <li className="stats__list-item">
              <div className="stats__number">10k+</div>
              <div className="stats__unit">COMPANIES</div>
            </li>
            <li className="stats__list-item">
              <div className="stats__number">314</div>
              <div className="stats__unit">TEMPLATES</div>
            </li>
            <li className="stats__list-item"> 
              <div className="stats__number">12M+</div>
              <div className="stats__unit">QUERIES</div>
            </li>
          </ul> 
        </div>
    )
}

export default Stats
