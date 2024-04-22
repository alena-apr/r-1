const userFromServer = {
    id: 1,
    name: 'admin',
    email: '1@1.ru'
  }
  
  export async function login({ email, password }){
    await timeout(300);
  
    if(email == '1@1.ru' && password == 'qwerty'){
      localStorage.setItem('auth', '1');
      return true;
    }
    else{
      return false;
    }
  }
  
  export async function logout(){
    await timeout(300);
  
    localStorage.removeItem('auth');
  }
  
  export async function check(){
    await timeout(300);
    
    return localStorage.getItem('auth') == '1' ? userFromServer : null;
  }
  
  function timeout(t){
    return new Promise(r => setTimeout(r, t));
  }