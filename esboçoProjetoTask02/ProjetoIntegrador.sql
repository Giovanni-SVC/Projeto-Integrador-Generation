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
	`id_postagem` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `tb_tema` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`Categoria` varchar(255) NOT NULL,
	`Descrição` DECIMAL(4,2) NOT NULL,
	`Palavras-chave` varchar(255) NOT NULL,
	`tb_usuario` bigint NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `tb_postagem` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`Data` TIMESTAMP(255) NOT NULL,
	`link_doc` varchar NOT NULL,
	`corpo-texto` varchar(255) NOT NULL,
	`vagas` varchar(255) NOT NULL,
	`id_usuario` bigint(255) NOT NULL DEFAULT 'id_usuario',
	PRIMARY KEY (`id`)
);

ALTER TABLE `tb_usuario` ADD CONSTRAINT `tb_usuario_fk0` FOREIGN KEY (`id_postagem`) REFERENCES `tb_postagem`(`id`);

ALTER TABLE `tb_tema` ADD CONSTRAINT `tb_tema_fk0` FOREIGN KEY (`tb_usuario`) REFERENCES `tb_usuario`(`id`);
