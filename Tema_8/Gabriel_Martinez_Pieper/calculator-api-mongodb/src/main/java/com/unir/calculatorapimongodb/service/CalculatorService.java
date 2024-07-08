package com.unir.calculatorapimongodb.service;


import com.unir.calculatorapimongodb.data.ResultRepository;
import com.unir.calculatorapimongodb.model.*;
import com.unir.calculatorapimongodb.model.request.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;


@Service
@Slf4j
@RequiredArgsConstructor
public class CalculatorService {

    private final ResultRepository repository;

    public AdditionSubtractionResult add(AdditionSubtractionRequest request){

        Double total = 0.0;

        for(int i=0; i < request.getNumbers().size(); i++){
            total += request.getNumbers().get(i);
        }

        AdditionSubtractionResult result = AdditionSubtractionResult.builder()
                .type("addition")
                .result(total)
                .parameters(request).build();

        return repository.save(result);
    }

    public AdditionSubtractionResult getAddition(String additionId){
        return (AdditionSubtractionResult) repository.findById(additionId).orElse(null);
    }

    public AdditionSubtractionResult subtract(AdditionSubtractionRequest request){

        Double total = request.getNumbers().getFirst();

        for(int i=1; i < request.getNumbers().size(); i++){
            total -= request.getNumbers().get(i);
        }

        AdditionSubtractionResult result = AdditionSubtractionResult.builder()
                .type("subtraction")
                .result(total)
                .parameters(request).build();

        return repository.save(result);
    }

    public AdditionSubtractionResult getSubtraction(String additionId){
        return (AdditionSubtractionResult) repository.findById(additionId).orElse(null);
    }


    public MultiplicationResult multiply(MultiplicationRequest request){

        MultiplicationResult result = MultiplicationResult.builder()
                .type("multiplication")
                .result(request.getNumber1() * request.getNumber2())
                .parameters(request).build();

        return repository.save(result);
    }

    public MultiplicationResult getMultiplication(String multiplicationId){
        return (MultiplicationResult) repository.findById(multiplicationId).orElse(null);
    }

    public DivisionResult divide(DivisionRequest request){

        DivisionResult result = DivisionResult.builder()
                .type("division")
                .result(request.getDividend() / request.getDivisor())
                .parameters(request).build();

        return repository.save(result);
    }

    public DivisionResult getDivision(String divisionId){
        return (DivisionResult) repository.findById(divisionId).orElse(null);
    }

    public RootResult root(RootRequest request){

        RootResult result = RootResult.builder()
                .type("root")
                .result(Math.pow(request.getRadicand(), (double) 1 / request.getIndex()))
                .parameters(request).build();

        return repository.save(result);
    }

    public RootResult getRoot(String rootId){
        return (RootResult) repository.findById(rootId).orElse(null);
    }
    public PowerResult power(PowerRequest request) {

        PowerResult result = PowerResult.builder()
                .type("power")
                .result(Math.pow(request.getBase(), request.getExponent()))
                .parameters(request).build();

        return repository.save(result);
    }

    public PowerResult getPower(String powerId){
        return (PowerResult) repository.findById(powerId).orElse(null);
    }

    public List<Result> getOperations(String type){
        if(StringUtils.hasLength(type)){
            return repository.findAllByType(type);
        }
        return repository.findAll();
    }

    public Result getOperation(String id){
        return repository.findById(id).orElse(null);
    }
}
