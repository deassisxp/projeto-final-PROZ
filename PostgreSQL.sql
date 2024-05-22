CREATE TABLE Usuario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255),
    senha VARCHAR(255)
);
CREATE TABLE Noticia (
    idNoticia SERIAL PRIMARY KEY,
    titulo VARCHAR(255),
    autor INTEGER REFERENCES ONG(id),
    dataPostagem TIMESTAMP,
    imagem VARCHAR(255)
);
CREATE TABLE ONG (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255)
);
