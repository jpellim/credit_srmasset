package com.srmasset.domain.model;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
 
@Repository
public interface CreditoRepository extends MongoRepository<Credito, String> {

}
