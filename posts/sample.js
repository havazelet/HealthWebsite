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