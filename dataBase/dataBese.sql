-- Active: 1697426326784@@localhost@5432@cosumodata@public
CREATE TABLE tbl_producto(
    id SERIAL NOT NULL,
    Foto BLOB,
    nombre_producto VARCHAR(100),
    Precio int,
    descripcion VARCHAR(200),
    PRIMARY KEY(id)
);

CREATE TABLE tbl_curso(
    id SERIAL NOT NULL,
    foto BLOB,
    nombre_curso VARCHAR (100),
    descripcion  VARCHAR(200),
    PRIMARY KEY(id)
);

CREATE TABLE tbl_quienes(
    id SERIAL NOT NULL,
    foto BLOB,
    descripcion VARCHAR(200),
    PRIMARY KEY(id)
);

CREATE TABLE tbl_contacto(
    id SERIAL NOT NULL,
    nombre VARCHAR (100),
    correo VARCHAR (50),
    PRIMARY KEY(id)
);
