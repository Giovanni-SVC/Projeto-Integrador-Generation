package com.projetoGama.model;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.br.CNPJ;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "Usuario")
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull
	//@Size(min = 2, max = 100)
	private String nomeCompleto;
	
	private String cep;
	
	private String numeroCasa;
	
	private String rne;
	
	//@Size(min = 13, max = 15)
	private String telefone;
	
	@NotNull
	@Email
	private String login;
	
	@NotNull
	//@Size(min = 8);
	private String senha;
	
	private boolean empregador;
	
	private String nomeEmpresa;
	
	@CNPJ
	private String cnpj;
	
	private String endereco;
	
	private String objetivoProfissional;
	
	private String experiencia1;
	
	private String experiencia2;
	
	private String experiencia3;
	
	private String formacaoacademica;
	
	private String cursos;
	
	private String idiomas;
	
	private String informacoesAdcionais;
	

	@Column(name = "dt_nascimento")
	@JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate dataNascimento; // Atributo adicional
	
	
	public Usuario() {}
	
	//Todos os atributos?
	public Usuario(long id, String nomeCompleto, String login, String senha, LocalDate dataNascimento) {
		this.id = id;
		this.nomeCompleto = nomeCompleto;
		this.login = login;
		this.senha = senha;
		this.dataNascimento = dataNascimento;
	}
	
	public LocalDate getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(LocalDate dataNascimento) {
		this.dataNascimento = dataNascimento;
	}
	
	// remove: para que todas as postagens sejam excluidas junto com o usuario 
	@OneToMany(mappedBy = "usuario", cascade = CascadeType.REMOVE)
	@JsonIgnoreProperties("usuario")
	private List<Postagem> postagem;

	public List<Postagem> getPostagem() {
		return postagem;
	}

	public void setPostagem(List<Postagem> postagem) {
		this.postagem = postagem;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNomeCompleto() {
		return nomeCompleto;
	}

	public void setNomeCompleto(String nomeCompleto) {
		this.nomeCompleto = nomeCompleto;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getNumeroCasa() {
		return numeroCasa;
	}

	public void setNumeroCasa(String numeroCasa) {
		this.numeroCasa = numeroCasa;
	}

	public String getRne() {
		return rne;
	}

	public void setRne(String rne) {
		this.rne = rne;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public boolean isEmpregador() {
		return empregador;
	}

	public void setEmpregador(boolean empregador) {
		this.empregador = empregador;
	}

	public String getNomeEmpresa() {
		return nomeEmpresa;
	}

	public void setNomeEmpresa(String nomeEmpresa) {
		this.nomeEmpresa = nomeEmpresa;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getObjetivoProfissional() {
		return objetivoProfissional;
	}

	public void setObjetivoProfissional(String objetivoProfissional) {
		this.objetivoProfissional = objetivoProfissional;
	}

	public String getExperiencia1() {
		return experiencia1;
	}

	public void setExperiencia1(String experiencia1) {
		this.experiencia1 = experiencia1;
	}

	public String getExperiencia2() {
		return experiencia2;
	}

	public void setExperiencia2(String experiencia2) {
		this.experiencia2 = experiencia2;
	}

	public String getExperiencia3() {
		return experiencia3;
	}

	public void setExperiencia3(String experiencia3) {
		this.experiencia3 = experiencia3;
	}

	public String getFormacaoacademica() {
		return formacaoacademica;
	}

	public void setFormacaoacademica(String formacaoacademica) {
		this.formacaoacademica = formacaoacademica;
	}

	public String getCursos() {
		return cursos;
	}

	public void setCursos(String cursos) {
		this.cursos = cursos;
	}

	public String getIdiomas() {
		return idiomas;
	}

	public void setIdiomas(String idiomas) {
		this.idiomas = idiomas;
	}

	public String getInformacoesAdcionais() {
		return informacoesAdcionais;
	}

	public void setInformacoesAdcionais(String informacoesAdcionais) {
		this.informacoesAdcionais = informacoesAdcionais;
	}
	
	

}