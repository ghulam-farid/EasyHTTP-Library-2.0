const http = new EasyHttp();


http.get('https://api.github.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));


// User data
/* const user = {
   name: 'Kevin Smith',
   username: 'kevinsmith',
   email: 'kevin@gmail.com'
};


http.post('https://jsonplaceholder.typicode.com/users', user)
.then(data => console.log(data))
.catch(err => console.log(err)); */


// Update user
/* http.put('https://jsonplaceholder.typicode.com/users/1', user)
.then(data => console.log(data))
.catch(err => console.log(err)); */


/* http.delete('https://jsonplaceholder.typicode.com/users/121')
.then(data => console.log(data))
.catch(err => console.log(err)); */
