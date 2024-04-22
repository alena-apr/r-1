import styles from './auth.module.scss';
import btn from './../../Form/form.module.scss'
import { useState } from 'react';
import { login } from '../../../api/auth';

function Auth() {
    const [ userData, setUserData ] = useState([
		{ name: 'email', label: 'Email', type: 'text', value: '' },
		{ name: 'password', label: 'Пароль', type: 'password', value: '' }		
	]);

	function updField(i, value){
		setUserData(userData.with(i, { ...userData[i], value }))
	}

	async function tryLogin(){
		const data = Object.fromEntries(userData.map(({ name, value }) => [ name, value ]));
		const loginRes = await login(data);

		if(loginRes){
			// in real may be we want redirect hard with page reload
            document.location = '/first-shop/office';
            console.log('must go to office')
		}
		else{
            console.log('show error');
		}
	}

	return <div className={styles.wrapper}>
		<h4>Auth login page</h4>
		{ userData.map(({ name, label, type, value }, i) => <div key={name} className={styles.item}>
			<label className="form-label">{ label }</label>
			<input 
				className="form-control"
				name={name}
				type={type}
				value={value} 
				onChange={e => updField(i, e.target.value.trim())} 
			/>
		</div> )}
		<button onClick={tryLogin} className={`${btn.btn} ${btn["btn-small"]}`}>Login</button>
	</div>
}

export default Auth;