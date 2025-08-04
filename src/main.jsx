import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import App from './App.jsx'
import { EMICalculator } from './components/emi-calculator/emi-calculator.jsx';
import Throttle from './components/throttle-demo/throttle-demo.jsx'
import StopWatch from './components/stop-watch/stop-watch.jsx';
import { FormDemo } from './components/form-demo/form-demo.jsx';
import { FormFormik } from './components/form-demo/form-formik.jsx';
createRoot(document.getElementById('root')).render(
    <FormFormik/>
)
