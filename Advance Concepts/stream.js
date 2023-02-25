/*
    h. Advance concepts

    E. Working with streams:- 


    Reference youtube video:- https://www.youtube.com/watch?v=ev5pgydOhT8
*/


console.log(" ************ Read file as stream *************** ");
const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on("request", (req, res) => {


    // // 1st normal way
    // fs.readFile('input.txt', (err, data) => {
    //     if (err) return console.log("error:- ", err);
    //     res.end(data.toString());
    // })


    // 2nd way
    const rstream = fs.createReadStream("inputs.txt");

    rstream.on('data', (chunkData)=>{
        console.log(chunkData)
        res.write(chunkData);
    })

    rstream.on("end",()=>{
        res.end();
    })

    rstream.on("error",(err)=>{
        res.end("File not found")
        console.log("File not found")
    })
})


server.listen(8000, "127.0.0.1");