package com.unir.back_end_calculadora.model.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CreateOperacionRequest {
    private String operacion;
    private List<Double> elementos;
}
