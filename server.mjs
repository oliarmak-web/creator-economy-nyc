import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png'};
http.createServer(async(req,res)=>{try{const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const root=path.resolve('dist');const file=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));if(!file.startsWith(root+path.sep))throw Error();res.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');res.end(await readFile(file));}catch{res.writeHead(404);res.end('Not found');}}).listen(3001,'127.0.0.1',()=>console.log('http://127.0.0.1:3001'));
