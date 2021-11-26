import React, {useState, useEffect} from "react";
import './Card.css';

const Card = () => {
    const [bill, setBill] = useState(0);
    const [tip, setTip] = useState(5);
    const [people, setPeople] = useState(1);
    const [totalTip, setTotalTip] = useState(0);
    const [totalTipPerPerson, setTipTotalPerPerson] = useState(0);

    const tipButtons = [
        {
            value: 5,
            label: '5%'
        },
        {
            value: 10,
            label: '10%'
        },
        {
            value: 15,
            label: '15%'
        },
        {
            value: 25,
            label: '25%'
        },
        {
            value: 50,
            label: '50%'
        }
    ];

    function calculateTip() {
        setTotalTip(bill * tip / 100);
        setTipTotalPerPerson(totalTip / people);
    }

    function reset() {
        setBill(0);
        setTip(5);
        setPeople(1);
        setTotalTip(0);
        setTipTotalPerPerson(0);
    }

    useEffect(() => {
        calculateTip();
    }, [bill, tip, people, totalTip, totalTipPerPerson]);

    return (
        <div className="card">
            <div className="input">
                <div className="input-bill">
                    <span>Bill</span>
                    <input  value={bill} onChange={(e) => setBill(e.target.value)}/>
                </div>
                <div className="input-tip">
                    <span className>Select Tip %</span>
                    <div className="tip-select">
                        {tipButtons.map(tipButton => (
                            <button
                                key={tipButton.value}
                                className={tip === tipButton.value ? 'tip-btn-active' : 'tip-btn'}
                                onClick={() => setTip(tipButton.value)}
                            >
                                {tipButton.label}
                            </button>
                        ))}
                        <input className="tip-input" placeholder="Custom"  onChange={(e) => setTip(e.target.value)}/>
                    </div>
                </div>
                <div className="input-people">
                    <span>Number of People</span>
                    <input  value={people} onChange={(e) => setPeople(e.target.value)}/>
                </div>
            </div>
            <div className="output">
                <div className="output-tip">
                    <span>Tip Amount</span>
                    <span>/ person</span>
                    <span>${totalTipPerPerson.toFixed(2)}</span>
                </div>
                <div className="output-total">
                    <span>Total</span>
                    <span>/ person</span>
                    <span>${totalTip.toFixed(2)}</span>
                </div>
                <button className="reset-btn" onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default Card;