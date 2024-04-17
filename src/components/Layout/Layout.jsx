import { Fragment } from "react";
import propTypes from 'prop-types';
import Header from '../Header/Header'

Layout.propTypes = {
    children: propTypes.node,
    className: propTypes.string
};

function Layout({className, children}) {
    return (
        <Fragment>
            <Header />
            <main className={className}>
                {children}
            </main>
        </Fragment>
    )
}

export default Layout;