import { useState } from 'react'
import styles from './Introbox.module.css'
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios'
import { useRouter } from 'next/router';

function Introbox() {
    const router = useRouter();
    const [value, setValue] = useState();
    return (
        <div className={styles.introbox}>
            <div><img src="https://images.unsplash.com/photo-1625748542965-8ae95d9d2b79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" alt="" /></div>
            <div className={styles.writebox}>
                <h1>Unsplashed</h1>
                <div>
                <h4>The internet’s source of freely-usable images.</h4>
                <h4>Powered by creators everywhere.</h4>
                </div>
                <form onSubmit={e => {
                    e.preventDefault();
                    // getImages();
                    router.push(`/result?search=${value}`)
                }}>
                    <input 
                        type="text" 
                        placeholder="Search free high resolution photos"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button type="submit"><SearchIcon /></button>
                </form>
            </div>
        </div>
    )
}

export default Introbox
