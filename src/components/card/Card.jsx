import React, {useState} from "react";
import './Card.css';

const Card = () => {
    const [bill, setBill] = useState(0);
    const [tip, setTip] = useState(5);
    const [people, setPeople] = useState(1);

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

    return (
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
    );
};

export default Card;