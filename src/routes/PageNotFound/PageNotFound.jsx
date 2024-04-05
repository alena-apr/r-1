import { Fragment } from 'react';
import styles from './pageNotFound.module.scss';
import Layout from '../../components/Layout/Layout';

const PageNotFound = () => {
    return ( 
        <Fragment>
            <Layout>
                <main>
                    <div className={styles.text}>
                        Страница не найдена
                    </div>
                </main>
            </Layout>
        </Fragment>

     );
} 
 
export default PageNotFound;