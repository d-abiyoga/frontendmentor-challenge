import React from 'react';
import dollarIcon from '../images/icon-dollar.svg'
import personIcon from '../images/icon-person.svg'

function Card() {
    return (
        <div className="card">
            <form className="card__form">
                {/* Bill */}
                <div className="form-wrapper">
                    <legend className="form-label">Bill</legend>
                    <img className="card__input-unit" src={dollarIcon} />
                    <input id="bill-amount" className="card__number-input" type="number" placeholder="00.0"></input>
                </div>
                
                {/* Tip Percentage */}
                <div className="form-wrapper">
                  <legend className="radio__legend form-label">Select Tip %</legend> 
                    <div className="radio">
                        <input className="radio__input" type="radio" id="5%" name="tip" />
                        <label className="card__tip-option" for="5%">5%</label>

                        <input className="radio__input" type="radio" id="10%" name="tip" />
                        <label className="card__tip-option" for="10%">10%</label>

                        <input className="radio__input" type="radio" id="15%" name="tip" />
                        <label className="card__tip-option" for="15%">15%</label>

                        <input className="radio__input" type="radio" id="25%" name="tip" />
                        <label className="card__tip-option" for="25%">25%</label>

                        <input className="radio__input" type="radio" id="50%" name="tip" />
                        <label className="card__tip-option" for="50%">50%</label>
                        
                        <input className="card__custom-tip card__tip-option" type="text" placeholder="Custom"/>
                    </div>
                </div>

                {/* Number of People */}
                <div className="form-wrapper">
                    <legend className="form-label">Number of People</legend>
                    <img className="card__input-unit" src={personIcon} />
                    <input type="number" className="card__number-input" placeholder="0"/>
                </div>
            </form>

            <div className="tip-output">
                <div className="tip-output__items">    
                    <div className="tip-output__label">
                        Tip Amount <br /> <span className="tip-output__detail">/ person</span>
                    </div>
                    <div className="tip-output__calculated-output">
                        $0.00
                    </div>
                </div>
                <div className="tip-output__items"> 
                    <div className="tip-output__label">
                        Total <br /><span className="tip-output__detail">/ person</span>
                    </div>
                    <div className="tip-output__calculated-output">
                        $0.00
                    </div>
                </div>
                <button className="btn-reset" type="reset">RESET</button>
            </div>
        </div>
    )
}

export default Card
