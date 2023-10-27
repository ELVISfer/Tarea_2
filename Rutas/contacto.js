const express = require('express');
const app = express();
const db = require('../database/conn');

app.get('',  async (req, res)=>{

    let sql = `select * from tbl_contacto order by id asc`;
    const result = await db.query(sql);
    res.json(result);

});

app.post('', async ( req, res)=>{

    const { nombre, correo } = req.body;
    const params =   [ nombre , correo];
    let sql = `insert into tbl_contacto (nombre , correo) values ($1, $2)  returning *  `;
    const result = await db.query(sql , params);
    res.json(result);

})

app.put('/:id', async ( req, res)=>{

    const { nombre , correo } = req.body;
    const id = req.params.id;
    const params =   [ nombre , correo, id];
    let sql = ` update tbl_contacto 
                    set nombre = $1, 
                    correo = $2, 
                where id = $3
                    returning *  `;
    const result = await db.query(sql , params);
    res.json(result);

})

app.put('/:id', async (req, res)=>{

    const id = req.params.id;
    const params =   [ id];
    let sql = ` update tbl_contacto 
                where id = $1
                    returning *  `;
    const result = await db.query(sql , params);
    res.json(result);


});


app.delete('/:id', async (req, res)=>{

    const id = req.params.id;
    const params =   [ id];
    let sql = ` delete from tbl_contacto 
                where id = $1
                    returning *  `;
    const result = await db.query(sql , params);
    res.json(result);

})

module.exports = app;