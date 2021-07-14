package com.projetoGama.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetoGama.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	
	public Optional<Usuario> findByLogin(String Usuario);

}
