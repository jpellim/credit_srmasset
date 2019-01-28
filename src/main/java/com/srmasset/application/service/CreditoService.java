package com.srmasset.application.service;

import java.util.List;

import com.srmasset.domain.model.Credito;

public interface CreditoService {

	
	Credito getCreditoById(String codigoCredito);
	
	List<Credito> getAllCreditos();
	
	void save(Credito credito);
	
	void excluir(String codigoCredito);
	
	
}
