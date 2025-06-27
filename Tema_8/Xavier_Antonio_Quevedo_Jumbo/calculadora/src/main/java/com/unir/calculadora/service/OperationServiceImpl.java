package com.unir.calculadora.service;

import com.unir.calculadora.model.pojo.Operation;
import com.unir.calculadora.data.OperationRepository;
import com.unir.calculadora.model.pojo.OperationDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OperationServiceImpl implements OperationService {

    @Autowired
    private OperationRepository operationRepository;

    @Override
    public List<Operation> getAllOperations() {
        return operationRepository.getAllOperations();
    }

    @Override
    public Operation getOperationById(String id){
        return operationRepository.getOperationById(Long.valueOf(id));
    }

    @Override
    public Operation saveOperation(OperationDto operationDto) {

        Double result = null;

        switch (operationDto.getOperation()){
            case "add":
                result = operationDto.getOperands().stream().reduce(0.0, Double::sum);
                break;
            case "subtract":
                result = operationDto.getOperands().stream().reduce(0.0, (acc, elem) -> acc - elem);
                break;
            case "multiply":
                result = operationDto.getOperands().stream().reduce(1.0, (acc, elem) -> acc * elem);
                break;
            case "divide":
                if (operationDto.getOperands().size() == 2) {
                    result = operationDto.getOperands().get(0) / operationDto.getOperands().get(1);
                }
                break;
            case "root":
                if (operationDto.getOperands().size() == 2) {
                    result = Math.pow(operationDto.getOperands().get(0), 1 / operationDto.getOperands().get(1));
                }
                break;
            case "potency":
                if (operationDto.getOperands().size() == 2) {
                    result = Math.pow(operationDto.getOperands().get(0), operationDto.getOperands().get(1));
                }
                break;
            default:
        }

        if (result != null) {
            Operation operation = Operation.builder()
                    .operation(operationDto.getOperation())
                    .operands(operationDto.getOperands())
                    .result(result)
                    .build();
            return operationRepository.saveOperation(operation);
        } else {
            return null;
        }
        }

    }


