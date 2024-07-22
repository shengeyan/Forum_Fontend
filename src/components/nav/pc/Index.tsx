import style from './index.module.scss'
import logo from '@/assets/img/Logo.png'
import Menu from './components/SGY_Menu'
import Search from './components/SGY_Search'

export default function Index() {
    return (
        <div className={style.nav}>
            <div className={style.logoArea}>
                <img
                    src={logo}
                    style={{
                        height: '30px',
                        width: '30px',
                        marginRight: '10px',
                    }}
                    alt="Logo"
                />
                Crazy For Code
            </div>
            <div className={style.functionArea}>
                <Menu></Menu>
            </div>
            <div className={style.searchArea}>
                <Search></Search>
            </div>
            <div className={style.userArea}></div>
        </div>
    )
}
