class EasyHttp{
   get(url){
      return new Promise((resolve, reject) =>{
         fetch(url)
         .then(res => {
            if(!res.ok){
               throw Error(res.status + ' ' + res.url);
            }
            return res;
         })
         .then(res => res.json())
         .then(data => resolve(data))
         .catch(err => reject(err));
      });
   }

   post(url, data){
      return new Promise((resolve, reject) =>{
         fetch(url, {
            method: 'POST',
            headers: {
               'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
         })
         .then(res =>{
            if(!res.ok){
               throw Error(res.status + ' ' + res.url);
            }
            return res;
         })
         .then(res => res.json())
         .then(data => resolve(data))
         .catch(err => reject(err));
      });
   }

   put(url, data){
      return new Promise((resolve, reject) =>{
         fetch(url, {
            method: 'PUT',
            headers: {
               'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
         })
         .then(res =>{
            if(!res.ok){
               throw Error(res.status + ' ' + res.url);
            }
            return res;
         })
         .then(res => res.json())
         .then(data => resolve(data))
         .catch(err => reject(err));
      });
   }

   delete(url){
      return new Promise((resolve, reject) =>{
         fetch(url, {
            method: 'DELETE',
            headers: {
               'Content-type': 'application/json'
            }
         })
         .then(res =>{
            if(!res.ok){
               throw Error(res.status + ' ' + res.url);
            }
            return res;
         })
         .then(res => res.json())
         .then(() => resolve('Resource deleted...'))
         .catch(err => reject(err));
      });
   }
}