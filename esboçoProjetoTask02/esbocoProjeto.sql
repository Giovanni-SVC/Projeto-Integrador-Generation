create database db_projetoIntegrador;

use db_projetoIntegrador;

CREATE TABLE `tb_usuario` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`nome_completo` varchar(255) NOT NULL,
	`login` varchar(255) NOT NULL,
	`senha` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `tb_tema` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`tema` varchar(255) NOT NULL,
	`descricao` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `tb_postagem` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`data` TIMESTAMP NOT NULL,
	`corpo_texto` varchar(255) NOT NULL,
	`link_doc` varchar(255) NOT NULL,
	`usuario_id` bigint NOT NULL,
	`tema_id` bigint NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `tb_postagem` ADD CONSTRAINT `tb_postagem_fk0` FOREIGN KEY (`usuario_id`) REFERENCES `tb_usuario`(`id`);

ALTER TABLE `tb_postagem` ADD CONSTRAINT `tb_postagem_fk1` FOREIGN KEY (`tema_id`) REFERENCES `tb_tema`(`id`);
