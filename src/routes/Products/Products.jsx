import Layout from "../../components/Layout/Layout";
import Card from "../../components/Products/Card";
import main from "./../Form/form.module.scss";
import styles from "./products.module.scss";
import useFetch from "../../hooks/useFetch";

// `https://faceprog.ru/reactcourseapi/products/all.php`
// `https://faceprog.ru/reactcourseapi/products/?id=1000`

function Products() {
  const response = useFetch(
    `https://faceprog.ru/reactcourseapi/products/all.php`
  );

  const products = response.data;
  const httpError = !response.pending & (products == null);
  const loadingSuccess = !response.pending & (products != null);

  return (
    <>
      <Layout>
        <main className={main.main}>
          <div> Products work!!</div>
          <div>{response.status}</div>
          <div className={styles["cards-wrapper"]}>
            {response.pending && <div>Loading...</div>}
            {loadingSuccess == 1 &&
              products.map((item) => <Card key={item.id} {...item} />)}
          </div>
          {httpError == 1 && (
            <div className={styles.error}>
              Что-то пошло не так... {response.status}
            </div>
          )}
        </main>
      </Layout>
    </>
  );
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
