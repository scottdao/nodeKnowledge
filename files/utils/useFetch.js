class UseFetch {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
        this.default_head = {};
    }
    request(compose_url, bodyHead) {
        return new Promise((resolve, reject) => {
            fetch(compose_url, {
                    ...bodyHead
                }).then(response => {
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
    get(url) {
        let compose_url = url;
        if (this.BASE_URL) {
            compose_url = this.BASE_URL + url;
        }
        const bodyHead = {
            ...this.default_head,
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
        }
        return this.request(url, bodyHeaders)
    }
    post(url, bodyHeaders) {
        let compose_url = url;
        if (this.BASE_URL) {
            compose_url = this.BASE_URL + url;
        }
        const bodyHead = {
            ...this.default_head,
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
        }
        if (bodyHeaders.type === 'json') {
            bodyHead.headers = { Accept: 'application/json', 'Content-Type': 'application/json' }
            bodyHead.body = JSON.stringify(bodyHeaders.body)
        } else {
            bodyHead.body = bodyHeaders.body;
        }
        return this.request(url, bodyHeaders)
    }

}
const useFetch = new UseFetch();