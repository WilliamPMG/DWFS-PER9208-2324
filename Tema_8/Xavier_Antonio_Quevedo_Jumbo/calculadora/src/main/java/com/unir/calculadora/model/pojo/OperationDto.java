package com.unir.calculadora.model.pojo;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class OperationDto {

    @Column(name = "operation")
    private String operation;

    @ElementCollection
    @Column(name = "operands")
    private List<Double> operands;
}
