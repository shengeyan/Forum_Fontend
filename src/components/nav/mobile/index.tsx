import Search from './components/SGY_Search'
import Menu from './components/SGY_Menu'
import style from './index.module.scss'

export default function Index() {
    return (
        <>
            <div className="nav">
                <div className="search">
                    <Search></Search>
                </div>
                <div className={style.function}>
                    <Menu></Menu>
                </div>
            </div>
            <style jsx>
                {`
                    .nav {
                        width: 100%;
                        height: 100%;
                        .search {
                            margin: 5px 0;
                        }
                        .function {
                            margin: 5px 0;
                        }
                    }
                `}
            </style>
            <style jsx global>{``}</style>
        </>
    )
}
