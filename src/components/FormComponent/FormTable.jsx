import styles from './formTable.module.scss'
import propTypes from 'prop-types';

FormTable.propTypes = {
    dataFields: propTypes.array,
    dataGUests: propTypes.array,
}

function FormTable({dataFields, dataGUests}) {

    return (
        <div className={styles.wrapper}>
            <div>
                <span>Имя:</span>
                <span>{dataFields.name}</span>
            </div>
            <div>
                <span>Email:</span>
                <span>{dataFields.email}</span>
            </div>
            <div>
                <span>Телефон:</span>
                <span>{dataFields.tel}</span>
            </div>
            <div>
                <span>Имя гостя:</span>
                <span>{dataGUests.name}</span>
            </div>
            <div>
                <span>Возраст гостя:</span>
                <span>{dataGUests.age}</span>
            </div>
        </div>
    )
}

export default FormTable;