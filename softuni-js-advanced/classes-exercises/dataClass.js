class Request {
    constructor(methodType, url, httpMethod, message) {
        this.method = methodType;
        this.url = url;
        this.version = httpMethod;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}


let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);
