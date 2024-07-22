import Nav from '@/components/nav/mobile/index'
import Footer from '@/components/footer/mobile/Index'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'

export default function mobile() {
    return (
        <div className="container">
            <div className="top">
                <Nav></Nav>
            </div>
            <div className="content">
                <Suspense>
                    <Outlet></Outlet>
                </Suspense>
            </div>
            <div className="footer">
                <Footer></Footer>
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    width: 100vw;
                }

                .top {
                    flex: 0 0 auto;
                    padding: 10px;
                    background-color: white;
                }

                .content {
                    flex: 1 1 auto;
                    overflow-y: auto;
                }

                .footer {
                    flex: 0 0 auto;
                    position: sticky;
                    bottom: 0;
                    background-color: lightgreen;
                }
            `}</style>
        </div>
    )
}
