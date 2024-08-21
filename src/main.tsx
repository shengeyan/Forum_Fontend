import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import router from '@/router/router'
import store from './store'
import '@arco-design/web-react/dist/css/arco.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
