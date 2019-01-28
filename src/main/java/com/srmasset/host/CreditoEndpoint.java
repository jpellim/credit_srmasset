package com.srmasset.host;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.srmasset.application.service.CreditoService;
import com.srmasset.domain.model.Credito;

@RestController
@RequestMapping("/credito")
public class CreditoEndpoint extends BaseEndpoint {
 
    @Autowired
    private CreditoService creditoService;
  
    @GetMapping("/")
    public ResponseEntity<List<Credito>> obterCreditos() {

        final List<Credito> creditos = creditoService.getAllCreditos();

        return ResponseEntity.ok().body(creditos);
    }
    
    
    @GetMapping("/{codigoCredito}")
    public ResponseEntity<Credito> obterCredito(@PathVariable("codigoCredito") final String codigoCredito)  {

        final Credito credito = creditoService.getCreditoById(codigoCredito);

        return ResponseEntity.ok().body(credito);
    }
    
    @PostMapping
    public ResponseEntity<Void> save(@RequestBody final Credito credito) {

        creditoService.save(credito);
 
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
 
    @PutMapping("/{codigoCredito}")
    public ResponseEntity<Void> atualizarItem(@PathVariable("codigoCredito") final String codigoCredito,
    		@RequestBody final Credito credito) {
 
        creditoService.save(credito);
        
        return getPutSuccessReturn();
    }
  
    @DeleteMapping("/{codigoCredito}")
    public ResponseEntity<Void> removerItem(@PathVariable("codigoCredito") final String codigoCredito) {
   
        creditoService.excluir(codigoCredito);
        
        return getPutSuccessReturn();
    }
 
}
