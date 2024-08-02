import { Divider } from '@arco-design/web-react'
import '@arco-design/web-react/dist/css/arco.css'
import { Link } from 'react-router-dom'

export default function Index() {
    return (
        <>
            <Divider style={{ margin: '5px 0' }} />
            <div style={{ marginBottom: '10px' }}>
                © 2024 Crazy For Code. All rights reserved.
            </div>
            {/* <div style={{ marginBottom: ' 10px' }}>
                <Link to="/terms" style={{ margin: '0 10px' }}>
                    Terms of Service
                </Link>
                <Link to="/privacy" style={{ margin: '0 10px' }}>
                    Privacy Policy
                </Link>
                <Link to="/contact" style={{ margin: '0 10px' }}>
                    Contact Us
                </Link>
            </div> */}
        </>
    )
}
