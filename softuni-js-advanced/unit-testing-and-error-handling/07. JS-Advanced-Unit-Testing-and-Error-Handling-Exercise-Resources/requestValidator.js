function validate(obj) {
    let reqMethod = ['GET', 'DELETE', 'POST', 'CONNECT'];
    const pattern = /^[\w.]+$/g;
    let requestVersion  = obj.version !== undefined ?  obj.version.split(`\/`) : 'f';
    const versionValues = ['0.9', '1.0', '1.1', '2.0'];
    const characters = ['<', '>', '\\', '&', ',', '\'', '\"'];

    if(obj.method === undefined || !reqMethod.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if(obj.uri === undefined || (obj.uri !== '*' && !obj.uri.match(pattern))) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if(requestVersion[0] !== 'HTTP' || requestVersion.length !== 2  ||!versionValues.includes(requestVersion[1])) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if(obj.message === undefined) {
        throw new Error('Invalid request header: Invalid Message');
    }

    for (let i = 0; i < obj.message.length; i++) {
        const symbol = obj.message[i];

        if(characters.includes(symbol)) {
            throw new Error('Invalid request header: Invalid Message');
        }
    }

    return obj;

}

console.log(validate({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }));