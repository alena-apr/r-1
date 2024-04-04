import { Fragment } from "react";
import Layout from "../../components/Layout/Layout";
import styles from './main.module.scss'

export default function Main() {
    return(
        <Fragment>
            <Layout>
                <main>
                    <div className={styles.text}>Надо выбрать элемент в шапке. </div>
                </main>
            </Layout>
        </Fragment>
    )
}