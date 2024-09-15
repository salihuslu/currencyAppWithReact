import React, { useState } from 'react'
import '../css/currency.css'
import { FiArrowRightCircle } from "react-icons/fi";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
let API_KEY = "fca_live_FkTBch1zea2lFxqkcS4pf4xJpOIJyZ8f8ivcalHw"

function Currency() {

    const [amount, setAmount] = useState();
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState();

    const exchange = async () => {

        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);
    }

    return (
        <div style={{ marginTop: '50px', fontFamily: 'arial', backgroundColor: 'black', color: '#fff' }} className='currency-div'>
            <div>
                <h3 style={{ marginTop: '-30px' }}>DÖVİZ KURU UYGULAMASI</h3>
            </div>
            <div style={{ marginTop: '20px' }}>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type='number' className='amount' />
                <select
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>
                <FiArrowRightCircle style={{ fontSize: '25px', marginRight: '10px', color: 'whitesmoke', }} />
                <select
                    onChange={(e) => setToCurrency(e.target.value)}
                    className='to-currency-option'>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>
                <input value={result} onChange={(e) => setResult(e.target.value)} type='number' className='result' />

            </div>
            <div>
                <button onClick={exchange} className='exchange-button'>Çevir</button>
            </div>
        </div>
    )
}

export default Currency