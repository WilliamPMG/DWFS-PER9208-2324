package com.unir.calculatorH2.service;


import com.unir.calculatorH2.data.*;
import com.unir.calculatorH2.model.db.*;
import com.unir.calculatorH2.model.dto.AdditionDto;
import com.unir.calculatorH2.model.dto.SubtractionDto;
import com.unir.calculatorH2.model.request.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;


@Service
@Slf4j
@RequiredArgsConstructor
public class CalculatorService {

    private final AdditionRepository additionRepository;
    private final SubtractionRepository subtractionRepository;
    private final MultiplicationRepository multiplicationRepository;
    private final DivisionRepository divisionRepository;
    private final PowerRepository powerRepository;
    private final RootRepository rootRepository;

    public AdditionDto add(AdditionSubtractionRequest request){

        Double total = 0.0;

        for(int i=0; i < request.getNumbers().size(); i++){
            total += request.getNumbers().get(i);
        }

        AdditionResult result = AdditionResult.builder()
                .result(total)
                .numbers(request.getNumbers().stream().map(AdditionNumber::new).toList()).build();

        for (AdditionNumber number: result.getNumbers()){
            number.setAddition(result);
        }

        return new AdditionDto(additionRepository.save(result));
    }

    public AdditionDto getAddition(Long additionId){
        AdditionResult addition = additionRepository.findAllById(additionId);
        if (addition!= null)
            return new AdditionDto(addition);
        else
            return null;
    }

    public SubtractionDto subtract(AdditionSubtractionRequest request){

        Double total = request.getNumbers().getFirst();

        for(int i=1; i < request.getNumbers().size(); i++){
            total -= request.getNumbers().get(i);
        }

        SubtractionResult result = SubtractionResult.builder()
                .result(total)
                .numbers(request.getNumbers().stream().map(SubtractionNumber::new).toList()).build();

        for (SubtractionNumber number: result.getNumbers()){
            number.setSubtraction(result);
        }

        return new SubtractionDto(subtractionRepository.save(result));
    }

    public SubtractionDto getSubtraction(Long subtractionId){
        SubtractionResult subtraction = subtractionRepository.findAllById(subtractionId);
        if (subtraction!= null)
            return new SubtractionDto(subtraction);
        else
            return null;
    }

    public MultiplicationResult multiply(MultiplicationRequest request){

        MultiplicationResult result = MultiplicationResult.builder()
                .result(request.getNumber1() * request.getNumber2())
                .number1(request.getNumber1()).number2(request.getNumber2()).build();

        return multiplicationRepository.save(result);
    }

    public MultiplicationResult getMultiplication(Long multiplicationId){
        return multiplicationRepository.findAllById(multiplicationId);
    }

    public DivisionResult divide(DivisionRequest request){

        DivisionResult result = DivisionResult.builder()
                .result(request.getDividend() / request.getDivisor())
                .dividend(request.getDividend()).divisor(request.getDivisor()).build();

        return divisionRepository.save(result);
    }

    public DivisionResult getDivision(Long divisionId){
        return divisionRepository.findAllById(divisionId);
    }

    public RootResult root(RootRequest request){

        RootResult result = RootResult.builder()
                .result(Math.pow(request.getRadicand(), (double) 1 / request.getIndex()))
                .radicand(request.getRadicand()).index(request.getIndex()).build();

        return rootRepository.save(result);
    }

    public RootResult getRoot(Long rootId){
        return rootRepository.findAllById(rootId);
    }

    public PowerResult power(PowerRequest request) {

        PowerResult result = PowerResult.builder()
                .result(Math.pow(request.getBase(), request.getExponent()))
                .base(request.getBase()).exponent(request.getExponent()).build();

        return powerRepository.save(result);
    }

    public PowerResult getPower(Long powerId){
        return powerRepository.findAllById(powerId);
    }

}
