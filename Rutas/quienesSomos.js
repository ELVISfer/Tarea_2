const express = require('express');
const app = express();
const db = require('../database/conn');

app.get('',  async (req, res)=>{

    let sql = `select * from tbl_quienesSomos order by id asc`;
    const result = await db.query(sql);
    res.json(result);

});

app.post('', async ( req, res)=>{

    const { foto, descripcion } = req.body;
    const params =   [ foto , descripcion];
    let sql = `insert into tbl_quienesSomos (foto , descripcion) values ($1, $2)  returning *  `;
    const result = await db.query(sql , params);
    res.json(result);

})

app.put('/:id', async ( req, res)=>{

    const { foto, descripcion } = req.body;
    const id = req.params.id;
    const params =   [ name , description, id];
    let sql = ` update tbl_quienesSomos 
                    set foto = $1, 
                    descripcion = $2, 
                where id = $3
                    returning *  `;
    const result = await db.query(sql , params);
    res.json(result);

})

app.put('/:id', async (req, res)=>{

    const id = req.params.id;
    const params =   [ id];
    let sql = ` update tbl_quienesSomos 
                where id = $1
                    returning *  `;
    const result = await db.query(sql , params);
    res.json(result);


});


app.delete('/:id', async (req, res)=>{

    const id = req.params.id;
    const params =   [ id];
    let sql = ` delete from tbl_quienesSomos
                where id = $1
                    returning *  `;
    const result = await db.query(sql , params);
    res.json(result);

})

module.exports = app;