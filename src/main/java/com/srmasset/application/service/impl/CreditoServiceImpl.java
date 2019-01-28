package com.srmasset.application.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.srmasset.application.service.CreditoService;
import com.srmasset.domain.model.Credito;
import com.srmasset.domain.model.CreditoRepository;

@Service
public class CreditoServiceImpl implements CreditoService {
 
	@Autowired
	private CreditoRepository creditoRepository;
	
	@Override
	public Credito getCreditoById(String codigoCredito) {
 
		return creditoRepository.findById(codigoCredito).get();
	}

	@Override
	public List<Credito> getAllCreditos() {
		
		List<Credito> creditos = creditoRepository.findAll();
			
		return creditos;
	}

	@Override
	public void save(Credito credito) {

		creditoRepository.save(credito);
		
	}

	@Override
	public void excluir(String codigoCredito) {
 
		creditoRepository.deleteById(codigoCredito);
	}

}
