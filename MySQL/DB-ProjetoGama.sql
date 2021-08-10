CREATE TABLE `tb_usuario` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`nome completo` varchar(255) NOT NULL AUTO_INCREMENT,
	`CEP` varchar(255) NOT NULL AUTO_INCREMENT,
	`Número Casa` varchar(255) NOT NULL,
	`RNE` varchar(255) NOT NULL,
	`E-mail` varchar(255) NOT NULL,
	`Telefone` varchar(255) NOT NULL,
	`Login` varchar(255) NOT NULL,
	`Senha` varchar(255) NOT NULL,
	`Nome Empresa` varchar(255) NOT NULL,
	`CNPJ` varchar(255) NOT NULL,
	`Endereço` varchar(255) NOT NULL,
	`Objetivo Profissional` varchar(255) NOT NULL,
	`Experiencia 1` varchar(255) NOT NULL,
	`Experiencia 2` varchar(255) NOT NULL,
	`Experiencia 3` varchar(255) NOT NULL,
	`Formação Academica` varchar(255) NOT NULL,
	`Cursos` varchar(255) NOT NULL,
	`Idiomas` varchar(255) NOT NULL,
	`Informações Adicionais` varchar(255) NOT NULL,
	`Data de Nascimento` DATE NOT NULL,
	`TipoUsuario` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `tb_tema` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`Categoria` varchar(255) NOT NULL,
	`Descrição` varchar(255) NOT NULL,
	`Palavras-chave` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `tb_postagem` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`Data` TIMESTAMP(255) NOT NULL,
	`link_curriculo` varchar(255) NOT NULL,
	`titulo` varchar(255) NOT NULL,
	`conteudo` varchar(255) NOT NULL,
	`id_tema` bigint NOT NULL,
	`id_usuario` bigint NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `tb_postagem` ADD CONSTRAINT `tb_postagem_fk0` FOREIGN KEY (`id_tema`) REFERENCES `tb_tema`(`id`);

ALTER TABLE `tb_postagem` ADD CONSTRAINT `tb_postagem_fk1` FOREIGN KEY (`id_usuario`) REFERENCES `tb_usuario`(`id`);




