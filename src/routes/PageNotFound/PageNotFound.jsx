import { Fragment } from 'react';
import styles from './pageNotFound.module.scss';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return ( 
        <Fragment>
            <Layout>
                <main className={styles.text}>
                    <div className={styles.oops}>
                        <div>404 Ooops!</div>
                        <div>Страница не найдена</div>
                    </div>
                    <div className={styles.link}>
                        <Link className={styles['back-to-main']} to='/'>Вернуться на главную страницу</Link>
                        <Link className={styles['back-to-main']} to='/first-shop'>Вернуться в магазин</Link>
                    </div>
                </main>
            </Layout>
        </Fragment>

     );
} 
 
export default PageNotFound;