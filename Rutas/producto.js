const express = require('express');
const app = express();
const db = require('../database/conn');

app.get('',  async (req, res)=>{

    let sql = `select * from tbl_producto order by id asc`;
    const result = await db.query(sql);
    res.json(result);

});

app.post('', async ( req, res)=>{

    const { foto, nombre_producto, precio, descripcion } = req.body;
    const params =   [ foto, nombre_producto, precio, descripcion];
    let sql = `insert into tbl_producto (foto, nombre_producto, precio, descripcion) values ($2, $3, $4)  returning *  `;
    const result = await db.query(sql , params);
    res.json(result);

})

app.put('/:id', async ( req, res)=>{

    const { foto, nombre_producto, precio, descripcion } = req.body;
    const id = req.params.id;
    const params =   [ foto, nombre_producto, precio, descripcion, id];
    let sql = ` update tbl_producto 
                    set  foto=$1 nombre_producto= $2, 
                    correo = $3,
                    descripcion =$4, 
                where id = $5
                    returning *  `;
    const result = await db.query(sql , params);
    res.json(result);

})

app.put('/:id', async (req, res)=>{

    const id = req.params.id;
    const params =   [ id];
    let sql = `  update tbl_producto 
    set foto=$1, nombre_producto= $2, 
    correo = $3,
    descripcion =$4, 
where id = $5
    returning * `;
    const result = await db.query(sql , params);
    res.json(result);


});


app.delete('/:id', async (req, res)=>{

    const id = req.params.id;
    const params =   [ id];
    let sql = ` delete from tbl_producto 
                where id = $1
                    returning *  `;
    const result = await db.query(sql , params);
    res.json(result);

})

module.exports = app;