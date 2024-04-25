async function fetchAllProducts() {
  const data = await fetch(
    `https://faceprog.ru/reactcourseapi/products/all.php`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return data;
}

async function fetchProductById({ params }) {
  const data = await fetch(
    `https://faceprog.ru/reactcourseapi/products/?id=${params.id}`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return data;
}

export { fetchProductById, fetchAllProducts };
