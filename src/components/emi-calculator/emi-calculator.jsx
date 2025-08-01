import { useState } from "react"
export function EMICalculator(){
    const [amount,setAmount] = useState(100000)
    const [years,setYears] = useState(1)
    const [rate,setRate] = useState(10.45)
    function handleAmountChange(e){
        setAmount(e.target.value)

    }
    function handleYearsChange(e){
        setYears(e.target.value)
    }
    function handleRateChange(e){
        setRate(e.target.value)
    }

    return(<div className="container-fluid">
        <div className="p-4 border border-2 mt-4">
         <h4 className="text-center" >EMI Calculator</h4>
        <div className="row my-4">
            <div className="col">
                Amount You need &#8377; <input type="text" size="10"
                onChange={handleAmountChange} value={amount}  />
            </div >
            <div className="col">
                for <input type="text" size="2" onChange={handleYearsChange} value={years}  /> Years
            </div>
            <div className="col">
                intrest rate <input type="text" size="4" onChange={handleRateChange} value={rate} /> %
            </div>

        </div>
        <div className="row my-4">
            <div className="col">
                <input type="range" onChange={handleAmountChange} value={amount} className="form-range" step='10000' min='100000' max='1000000' />
                <div>
                    <span className="float-start">&#8377;100000</span>
                    <span className="float-end">&#8377;1000000</span>
                </div>
                </div>
                 <div className="col">
                <input type="range" onChange={handleYearsChange} value={years} className="form-range"  min='1' max='5' />
                <div>
                    <span className="float-start">1 Year</span>
                    <span className="float-end">5 years</span>
                </div>
                </div>
                 <div className="col">
                <input type="range" onChange={handleRateChange} value={rate} className="form-range" step='0.01' min='10.45' max='18.45' />
                <div>
                    <span className="float-start" >10.45%</span>
                    <span className="float-end">18.45%</span>
                </div>
            </div>

        </div>
        <div className="row mt-5">

        </div>

        </div>

    </div>)
}