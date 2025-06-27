package com.unir.calculatorH2.model.dto;

import com.unir.calculatorH2.model.db.SubtractionNumber;
import com.unir.calculatorH2.model.db.SubtractionResult;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.List;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@ToString
public class SubtractionDto {

    private Long id;
    private Double result;
    private List<Double> numbers;

    public SubtractionDto(SubtractionResult result){
        this.id = result.getId();
        this.result = result.getResult();
        this.numbers = result.getNumbers().stream().map(SubtractionNumber::getNumber).toList();
    }

}
