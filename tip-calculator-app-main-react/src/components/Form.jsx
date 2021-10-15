import React, { useState, useEffect } from 'react';
import dollarIcon from '../images/icon-dollar.svg'
import personIcon from '../images/icon-person.svg'

function Form() {
    const defaultState = {
        bill: 0,
        people: 0,
        tip: 0,
    }
    const [state, setState] = useState(defaultState)
    const [inputIsValid, setInputIsValid] = useState(true)
    
    // Variables
    const tipPercentage = [5, 10, 15, 20, 50]

    // Outputs
    const [tipPerPerson, setTipPerPerson] = useState(0);
    const [totalPerPerson, setTotalPerPerson] = useState(0);

    // Functions
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        const inputName = e.target.name;

        // can be written as:
        // const { name, value } = e.target

        // Validation for number of people input
        if (inputName == 'people' && inputValue == 0) {
            setInputIsValid(false)
        } else if (inputName == 'people' && inputValue !== 0) {
            setInputIsValid(true)
        }

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
        // console.log(state)
        if (state.people > 0) {
            const eachpersontip = state.bill * state.tip / 100 / state.people
            if (eachpersontip >= 0) {
                const totalcostperperson = ( state.bill / state.people ) + eachpersontip

                setTipPerPerson(eachpersontip)
                setTotalPerPerson(totalcostperperson)
            } 
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
                    <img className="card__input-unit" src={dollarIcon} />
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
                    <img className="card__input-unit" src={personIcon} />
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
                <button className="btn-reset" type="reset" onClick={resetState}>RESET</button>
            </div>
        </div>
    )
}

export default Form