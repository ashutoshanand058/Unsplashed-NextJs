import styles from './Header.module.css'
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Avatar from '@material-ui/core/Avatar'
import { useRouter } from 'next/router';
import { useState } from 'react'

function Header() {
    const router = useRouter();
    const [value, setValue] = useState();
    return (
        <div className={styles.header}>
            <img 
                src="https://avatars.githubusercontent.com/u/9951955?s=200&v=4"
                alt=""
            />
            <form onSubmit={e => {
                e.preventDefault();
                router.push(`/result?search=${value}`)
            }}>
                <button type="submit"><SearchIcon className={styles.icons}/></button>
                <input placeholder="Search free high resolution photos" value={value} onChange={e => setValue(e.target.value)} />
            </form>
            <h4>Brands</h4>
            <h4>Blog</h4>
            <MoreHorizIcon className={styles.icons} />
            <button className={styles.submitPhoto}>Submit a photo</button>
            <NotificationsNoneIcon />
            <Avatar/>
        </div>
    )
}

export default Header
