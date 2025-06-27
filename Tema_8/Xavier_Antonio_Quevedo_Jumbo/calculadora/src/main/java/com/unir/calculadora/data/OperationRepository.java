package com.unir.calculadora.data;

import com.unir.calculadora.model.pojo.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class OperationRepository {

    private final OperationJpaRepository repository;

    public List<Operation> getAllOperations() {
        return repository.findAll();
    }

    public Operation getOperationById(Long id){
        return repository.findById(id).orElse(null);
    }

    public Operation saveOperation(Operation operation){
        return repository.save(operation);
    }
}
