import styles from './SideBar.module.css';

import { NavigationLinks } from '../../utils/data';
import Link from 'next/link';

import DashBoardImage from '../../public/assets/dashboard2.png';
import Image from 'next/image';

const SideBar = () => {

   

    


    return (

        <nav className={styles.SideBar}>
            <div className={styles.MenuArea}>
                <ul>
                    {NavigationLinks.map((link, index)=> (
                        <li key={index}>
                            <Image src={DashBoardImage} alt='' width={10} height={10} />
                            <Link href={link.path}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>

        </nav>
    );
}


export default SideBar;