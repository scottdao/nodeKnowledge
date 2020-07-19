class UseFetch{
    constructor() {
        this.BASE_URL = null;
        this.default_head = {};
        this.request = function (compose_url, bodyHead) {
            return new Promise((resovle,reject)=>{
                    fetch(compose_url, {
                        ...bodyHead
                    }).then(respose=>{
                        if (response.status >= 200 && response.status < 300) {
                                return Promise.resolve(response);
                        }
                        return Promise.reject(new Error(response.statusText));
                    })
                    .then(response => response.json())
                    .then(result => {
                        resolve(result)
                    })
                    .catch(error => {
                        reject(error)
                    });
            })
        }
    }
    get(){}
    post(url, bodyHeaders){
        let compose_url = url;
        if(this.BASE_URL){
            compose_url = this.BASE_URL+url;
        }
        let bodyHead = {
                ...this.default_head,
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
        }
        if(bodyHeaders.type === 'json'){
            bodyHead.headers = { Accept: 'application/json', 'Content-Type': 'application/json' }
            bodyHead.body = JSON.stringify(bodyHeaders.body)
        }else if(bodyHeaders === 'formData'){
            bodyHead.body = bodyHeaders.body;
        }
        return  this.request(url, bodyHeaders)
    }
    
}
const useFetch = new UseFetch();