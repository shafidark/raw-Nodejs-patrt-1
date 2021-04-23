/*title: Handle Request Response
  description: handle request and response
  date:
    
*/
// module scarfolding 
    const handler = {};
    const {StringDecoder} = require('string_decoder');
    const url = require('url')

    handler.handleReqRes =  (req, res) => {
        // request handling 
        // get the url and parse it 
        const parsedUrl = url.parse(req.url, true)
        const path = parsedUrl.pathname;
        const trimd = path.replace(/^\/+|\/+$/g, '')
        const method = req.method.toLowerCase()
        const queryStringObject = parsedUrl.query;
        const headersObj = req.headers;  
    
        const decoder = new StringDecoder('utf-8');
        let realData = '';
        
        req.on('data', (buffer) => {
            realData += decoder.write(buffer)
        })
        
        req.on('end', () => {
            realData += decoder.end()
            console.log(realData);
            // response handle
            res.end('hello programmers');
        }) 
    }
    // export handler 
    module.exports = handler