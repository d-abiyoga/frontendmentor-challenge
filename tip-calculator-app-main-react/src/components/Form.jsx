import React, { useState, useEffect } from 'react';
import dollarIcon from '../images/icon-dollar.svg'
import personIcon from '../images/icon-person.svg'

function Form() {
    // === STATE ===
    const defaultState = {
        bill: 0,
        people: 0,
        tip: 0,
    }
    const [state, setState] = useState(defaultState)
    const [inputIsValid, setInputIsValid] = useState(true)
    const [buttonIsDisabled, setButtonIsDisabled] = useState(true)

    // Outputs
    const [tipPerPerson, setTipPerPerson] = useState(0);
    const [totalPerPerson, setTotalPerPerson] = useState(0);
    
    // === BINDINGS ===
    const tipPercentage = [5, 10, 15, 20, 50]

    // === FUNCTIONS ===
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        const inputName = e.target.name;
        console.log('target:', e.target)
        console.log('inputValue:', inputValue)
        console.log('inputName:', inputName)

        // Validation for number of people input
        if (inputName == 'people' && inputValue == 0) {
            setInputIsValid(false)
        } else if (inputName == 'people' && inputValue !== 0) {
            setInputIsValid(true)
        }

        // If preset tip is selected, custom tip need to be cleared
        if (e.target.type === 'radio') {
            const customTipEl = document.getElementsByClassName('card__custom-tip')[0];
            customTipEl.value = ""
        }

        // Update state
        setState({
            ...state,
            [inputName]: inputValue
        })
    }

    // Remove checked value if custom tip is on focus
    const clearSelectedTip = () => {
        const radioBtns = document.querySelectorAll('input[name="tip"]')
        for (const rb of radioBtns) {
            if (rb.checked) {
                rb.checked=false;
                break;
            }
        }
    }

    const calculateOutput = useEffect(() => {
        if (state.people > 0) {
            const eachpersontip = state.bill * state.tip / 100 / state.people
            if (eachpersontip >= 0) {
                const totalcostperperson = ( state.bill / state.people ) + eachpersontip

                setTipPerPerson(eachpersontip)
                setTotalPerPerson(totalcostperperson)
            } 
        }
    })

    const updateButtonState = useEffect(() => {
        if (totalPerPerson > 0) {
            setButtonIsDisabled(false)
        } else if (totalPerPerson === 0) {
            setButtonIsDisabled(true)
        }
    })

    const resetState = () => { 
        setState(defaultState)
        setInputIsValid(true)
        setTipPerPerson(0)
        setTotalPerPerson(0)
        document.getElementById("tip-calculator-form").reset();
    }

    return (
        <div className="container">
            <form className="card__form" id="tip-calculator-form">
                {/* Bill */}
                <div className="form-inputs">
                    <legend className="form-label">Bill</legend>
                    <img className="card__input-unit" src={dollarIcon} alt="dollar sign icon"/>
                    <input 
                        id="bill-amount"
                        name="bill" 
                        className="card__number-input" 
                        type="number" 
                        placeholder="00.0"
                        onChange={handleInputChange}
                        required
                        min="0"
                        >
                    </input>
                </div>
                
                {/* Tip Percentage */}
                <div className="form-inputs">
                  <legend className="radio__legend form-label">Select Tip %</legend> 
                    <div className="radio">
                        {tipPercentage.map(element => (
                            <>
                                <input
                                    key={`input-${tipPercentage.indexOf(element)}`}
                                    className="radio__input"
                                    type="radio" 
                                    id={element} 
                                    name="tip" 
                                    value={element}
                                    onClick={handleInputChange}
                                />
                                <label 
                                    key={`label-${tipPercentage.indexOf(element)}`}
                                    className="card__tip-option"  
                                    htmlFor={element}
                                    >
                                    {element}%
                                </label>
                            </>
                        ))}
                        
                        <input 
                            className="card__custom-tip card__tip-option" 
                            type="text"
                            placeholder="Custom"
                            onFocus={clearSelectedTip}
                            onChange={handleInputChange}
                            name="tip"
                            min="0"
                            required
                        />
                    </div>
                </div>

                {/* Number of People */}
                <div className="form-inputs">
                    <legend className="form-label">Number of People</legend>
                    { !inputIsValid && <div className="errorMessage">Can't be zero</div> }
                    <img className="card__input-unit" src={personIcon} alt="people bust icon"/>
                    <input 
                        type="number" 
                        name="people"
                        className={inputIsValid ? "card__number-input" : "card__number-input card--error"}
                        placeholder="0"
                        onChange={handleInputChange}
                        required
                        min="0"
                        
                    />
                </div>
            </form>

            <div className="tip-output">
                <div className="tip-output__items-wrapper">
                    <div className="tip-output__items">    
                        <div className="tip-output__label">
                            Tip Amount <br /> <span className="tip-output__detail">/ person</span>
                        </div>
                        <div className="tip-output__calculated-output">
                            {`$${tipPerPerson.toFixed(2)}`}
                        </div>
                    </div>
                    <div className="tip-output__items"> 
                        <div className="tip-output__label">
                            Total <br /><span className="tip-output__detail">/ person</span>
                        </div>
                        <div className="tip-output__calculated-output">
                            {`$${totalPerPerson.toFixed(2)}`}
                        </div>
                    </div>
                </div>
                <button 
                    className={`btn-reset ${buttonIsDisabled && 'btn--disabled'}`}
                    type="reset" 
                    onClick={resetState}
                    disabled={buttonIsDisabled}
                >RESET</button>
            </div>
        </div>
    )
}

export default Form