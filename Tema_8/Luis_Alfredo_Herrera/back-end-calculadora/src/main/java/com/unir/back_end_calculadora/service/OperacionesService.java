package com.unir.back_end_calculadora.service;

import java.util.List;

import com.unir.back_end_calculadora.model.pojo.Operacion;

public interface OperacionesService {

    List<Operacion> getOperaciones();

    Operacion getOperacion(String operacionId);

    Operacion createOperacion(Operacion request);

    Boolean removeOperacion(String operacionId);


}
