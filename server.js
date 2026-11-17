const http = require('http')

const server = http.createServer( async (req, res) => {
    // extrai dados vindos dos parametros da requisicao
    const {url, method} = req

    if(method == "GET" && url == "/list"){

        const kpop = {
            id:1,
            banda:"bts",
            estilo:"kpop"
        }

        const {id, banda, estilo} = kpop

        console.log ("veio de metodo GET")

        res.writeHead(200, {
            "Content-Type": "application/json"
        })

        await res.end(JSON.stringify(kpop))


    }

    console.log("url:", url)
    console.log("method:", method)

    res.end(JSON.stringify("recebido!"))

})

server.listen(3000, ()=> 
    console.log("server funcionando na porta 3000")
)