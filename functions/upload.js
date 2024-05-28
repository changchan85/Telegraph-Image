export async function onRequestPost(context) {  // Contents of context object  
    const {
        request, // same as existing Worker API    
        env, // same as existing Worker API    
        params, // if filename includes [id] or [[path]]   
        waitUntil, // same as ctx.waitUntil in existing Worker API    
        next, // used for middleware or to fetch assets    
        data, // arbitrary space for passing data between middlewares 
    } = context;
    context.request
    const url = new URL(request.url);
    const response = fetch('https://telegra.ph/' + url.pathname + url.search, {
        method: request.method,
        headers: request.headers,
        body: request.body,
    });
    // return response;
    // 设置响应头以允许跨域请求
    const responseWithCORS = new Response(response.body, response);
    responseWithCORS.headers.set('Access-Control-Allow-Origin', '*'); // 允许来自任何源的请求
    responseWithCORS.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // 允许的 HTTP 方法
    responseWithCORS.headers.set('Access-Control-Allow-Headers', 'Content-Type'); // 允许的请求头

    return responseWithCORS;
}
