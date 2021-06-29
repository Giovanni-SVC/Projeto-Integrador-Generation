package com.projetoIntegrador.projetoIntegrador.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_tema")
public class Tema {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull
	@Size(min = 1, max = 100)
	private String categoria;
	
	@NotNull
	@Size(min = 5, max = 500)
	private String descricao;
	
	private String palavrasChaves;
	

	public String getPalavrasChaves() {
		return palavrasChaves;
	}

	public void setPalavrasChaves(String palavrasChaves) {
		this.palavrasChaves = palavrasChaves;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	

}
