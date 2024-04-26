export async function load(token){
	const response = await fetch(`https://faceprog.ru/reactcourseapi/cart/load.php?token=${token}`);
	const data = await response.json();
	return data;
}

export async function add(token, id){
	const response = await fetch(`https://faceprog.ru/reactcourseapi/cart/add.php?token=${token}&id=${id}`);
	const data = await response.json();
	return data;
}

export async function change(token, id, cnt){
	const response = await fetch(`https://faceprog.ru/reactcourseapi/cart/cnange.php?token=${token}&id=${id}&cnt=${cnt}`);
	const data = await response.json();
	return data;
}

export async function remove(token, id){
	const response = await fetch(`https://faceprog.ru/reactcourseapi/cart/remove.php?token=${token}&id=${id}`);
	const data = await response.json();
	return data;
}