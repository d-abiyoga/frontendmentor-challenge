import React, { useState, useEffect } from 'react';
import dollarIcon from '../images/icon-dollar.svg'
import personIcon from '../images/icon-person.svg'
import FormError from './FormError';

function Form() {
    const [validPeopleNumber, setValidPeopleNumber] = useState(true);
    const [bill, setBill] = useState("");
    const [people, setPeople] = useState(""); 
    const [tip, setTip] = useState(0); 
    const [billError, setBillError] = useState(""); 
    const [peopleError, setPeopleError] = useState("");
    
    // Variables
    const tipPercentage = [5, 10, 15, 20, 50]

    // Output
    const [tipPerPerson, setTipPerPerson] = useState(0);
    const [totalPerPerson, setTotalPerPerson] = useState(0);

    const handleBillValue = (e) => {
        setBill(e.target.value)
    }

    const handleTipValue = (e) => {
        console.log(e.target.value)
        const radioBtns = document.querySelectorAll('input[name="tip"]')
        for (const rb of radioBtns) {
            if (rb.checked) {
                setTip(rb.value)
                break;
            } 
        }
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

    const handleCustomTip = (e) => {
        setTip(e.target.value)
    }

    // TODO: develop form validation
    const formValidation = (e) => {
        console.log(e.target.value)
        if (e.target.value == 0) { 
            setValidPeopleNumber(false)
        } else if (e.target.value !== 0 & !validPeopleNumber) { 
            setValidPeopleNumber(true) }
        console.log('isValid', validPeopleNumber )
    }

    const handlePeopleValue = (e) => {
        setPeople(e.target.value);
    }
    
    const calculateOutput = useEffect(() => {
        if (people > 0) {
            console.log('calculating') 
            const eachpersontip = bill * tip / 100 / people
            if (eachpersontip >= 0) {
                const totalcostperperson = ( bill / people ) + eachpersontip
                setTipPerPerson(eachpersontip)
                setTotalPerPerson(totalcostperperson)
            } 
        }
    })

    const resetState = () => { 
        setBill("");
        setPeople(""); 
        setTip(0) 
        setBillError("");
        setPeopleError("");
        setTipPerPerson(0);
        setTotalPerPerson(0);

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
                        className="card__number-input" 
                        type="number" 
                        placeholder="00.0"
                        onChange={handleBillValue}
                        >
                    </input>
                    {/* Debugging only */}
                    {/* <p>{bill}</p> */}
                </div>
                
                {/* Tip Percentage */}
                <div className="form-inputs">
                  <legend className="radio__legend form-label">Select Tip %</legend> 
                    <div className="radio">
                        {tipPercentage.map(element => (
                            <>
                                <input
                                    key={'input-'+tipPercentage.indexOf(element)}
                                    className="radio__input"
                                    type="radio" 
                                    id={element} 
                                    name="tip" 
                                    value={element}
                                    onClick={handleTipValue}
                                />
                                <label 
                                    key={'label'+tipPercentage.indexOf(element)}
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
                            onChange={handleCustomTip}
                        />

                        {/* Debugging only */}
                        {/* <p>{tip}</p> */}
                    </div>
                </div>

                {/* Number of People */}
                <div className="form-inputs">
                    <legend className="form-label">Number of People</legend>
                    <img className="card__input-unit" src={personIcon} />
                    <input 
                        type="number" 
                        className="card__number-input" 
                        placeholder="0"
                        // onChange={formValidation}
                        onChange={handlePeopleValue}
                    />
                </div>

                {/* Debugging only */}
                {/* <p>{people}</p> */}
                { !validPeopleNumber && <FormError /> }
            </form>

            <div className="tip-output">
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
                <button className="btn-reset" type="reset" onClick={resetState}>RESET</button>
            </div>
        </div>
    )
}

export default Form