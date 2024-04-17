import Layout from "../../components/Layout/Layout";
import Card from "../../components/Products/Card";
import main from "./../Form/form.module.scss";
import { useEffect, useState } from "react";
import styles from './products.module.scss'

function Products() {
    const [prods, setProds] = useState([]);
    const [state, setState] = useState({pending: true, data: null, error: null})

    useEffect(() => {
        (async function request() {
            try {
                const result = await fetch(`https://faceprog.ru/reactcourseapi/products/all.php`)
                .then(r => r.json())
                .then(r => setProds(r));
            } catch(e) {
                console.log(e);
                throw e;
            }
            
        })();
            
        
		
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ ]);

    return (
        <>
            <Layout>
                <main className={main.main}>
                    <div> Products works!!</div>
                    <div className={styles["cards-wrapper"]}>
                        {prods.map(prod => <Card key={prod.id} {...prod} /> )}
                    </div>
                </main>
            </Layout>
        </>
    )
}


// id: 106, title: 'Ipnone XX', price: 14000, rest: 8
export default Products;


/*
export class HttpError extends Error{
	constructor(message, status, text){
		super(message);
		this.status = status;
		this.text = text;
	}
} 

export async function requestWithToken(url, options = {}){
	if(options.headers === undefined){
		options.headers = {};
	}

	const token = localStorage.getItem('TOKEN');

	// what if token is null

	options.headers.Authorization = `Bearer ${token}`;

	return request(url, options);
}

export async function request(url, options = {}){
	if(options.headers === undefined){
		options.headers = {};
	}

	options.headers['Content-Type'] = 'application/json';

	try{
		const response = await fetch(url, options);

		if(response.status < 200 || response.status >= 400){
			throw new HttpError('Status exc', response.status, await response.text());
		}

		const data = await response.json();
		return data;
	}
	catch(e){
		console.dir(e);
		throw e;
	}
}
*/