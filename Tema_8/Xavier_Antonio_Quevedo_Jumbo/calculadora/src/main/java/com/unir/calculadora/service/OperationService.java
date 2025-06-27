package com.unir.calculadora.service;

import com.unir.calculadora.model.pojo.Operation;
import com.unir.calculadora.model.pojo.OperationDto;

import java.util.List;

public interface OperationService {

    List<Operation> getAllOperations();

    Operation getOperationById(String id);

    Operation saveOperation(OperationDto operationDto);

}
