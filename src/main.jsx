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
import { FormikValidation } from './components/form-demo/formik-validation.jsx';
import FormikYup from './components/form-demo/formik-yup.jsx';
import { FormikComponents } from './components/form-demo/formik-components.jsx';
import { VideoTutorialIndex } from './video-tutorials/video-tutorial-index.jsx';
createRoot(document.getElementById('root')).render(
<VideoTutorialIndex/>
)
