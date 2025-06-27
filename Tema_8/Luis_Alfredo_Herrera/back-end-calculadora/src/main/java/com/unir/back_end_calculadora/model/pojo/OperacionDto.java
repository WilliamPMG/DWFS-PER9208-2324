package com.unir.back_end_calculadora.model.pojo;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString

public class OperacionDto {

    private Long id;
    private String operacion;
    private Double resultado;
    private List<Double> elementos;
}
