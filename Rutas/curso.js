const express = require('express');
const app = express();
const db = require('../database/conn');

app.get('',  async (req, res)=>{

    let sql = `select * from tbl_curso order by id asc`;
    const result = await db.query(sql);
    res.json(result);

});

app.post('', async ( req, res)=>{

    const {foto, nombre_curso, descripcion } = req.body;
    const params =   [ foto, nombre_curso, descripcion];
    let sql = `insert into tbl_curso (foto, nombre_curso , descripcion) values ($1,$2, $3)  returning *  `;
    const result = await db.query(sql , params);
    res.json(result);

})

app.put('/:id', async ( req, res)=>{

    const {foto, nombre_curso, descripcion } = req.body;
    const id = req.params.id;
    const params =   [ foto, nombre_curso, descripcion, id];
    let sql = ` update tbl_curso 
                    set foto= $1, nombre_curso = $2, 
                    correo = $3, 
                where id = $4
                    returning *  `;
    const result = await db.query(sql , params);
    res.json(result);

})

app.put('/:id', async (req, res)=>{

    const id = req.params.id;
    const params =   [ id];
    let sql = ` update tbl_curso 
                set foto= $1, nombre_curso = $2, 
              correo = $3,  
                where id = $4
             returning *`;
    const result = await db.query(sql , params);
    res.json(result);


});


app.delete('/:id', async (req, res)=>{

    const id = req.params.id;
    const params =   [ id];
    let sql = ` delete from tbl_curso 
                where id = $1
                    returning *  `;
    const result = await db.query(sql , params);
    res.json(result);

})

module.exports = app;