// const express = require("express");
// const bodyParser = require("body-parser");
// const { randomBytes } = require("crypto");
// const cors = require("cors");
// // const mongoPractice = require('./mongoose');
// // const fs = require("fs");
// // const writeJsonFile = require('write-json-file');
// // const path = require('path');

// const expressApp = express();
// expressApp.use(bodyParser.json());
// expressApp.use(cors());

// let posts = {};
// const commentsByPostId = {};


// expressApp.get("/posts", (req, res) => {
//   res.send(posts);
// });

// expressApp.post("/posts", (req, res) => {
  
//   const id = randomBytes(4).toString("hex");
//   const date = new Date().toLocaleDateString("en-US");

//   const { title } = req.body;
//   const { postBody } = req.body;

//   posts[id] = {
//     id,
//     title,
//     postBody,
//     date,
//   };

//   // (async () => {
//   //   await writeJsonFile('data.json',posts);
//   // })();

//   // try {
//   //     posts = JSON.parse(fs.readFileSync('data.json', 'utf8'))
//   // } catch (e) {
//   //     console.log(e)
//   // }
//   // console.log(posts)
//   // fs.writeFileSync('data.json', JSON.stringify( posts, null, 2), function(err) {
//   //     if (err) throw err;
//   //     console.log('Saved!');
//   // });

//   // fs.writeFileSync(path.resolve(__dirname, 'data.json'), JSON.stringify(posts));

//   res.status(201).send(posts[id]);
// });


// expressApp.get("/posts/:id/comments", (req, res) => {
//   res.send(commentsByPostId[req.params.id] || []);
// });

// expressApp.post("/posts/:id/comments", (req, res) => {
//   const commentId = randomBytes(4).toString("hex");
//   const { content } = req.body;

//   const comments = commentsByPostId[req.params.id] || [];

//   comments.push({ id: commentId, content });

//   commentsByPostId[req.params.id] = comments;

//   res.status(201).send(comments);
// });



// expressApp.listen(4000, () => {
//   console.log("Listening on 4000");
// });











const sqlite3 = require('sqlite3').verbose();


let db = new sqlite3.Database('./chinook.db',(err)=>{
    if (err){
        console.log(err.message)
    }
    console.log('connected')

    db.close((err)=>{
        if(err){
            console.log(err.message)
        }
    })
    console.log('chinook')
})