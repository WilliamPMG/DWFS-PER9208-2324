package com.unir.back_end_calculadora.service;

import com.unir.back_end_calculadora.data.OperacionRepository;
import com.unir.back_end_calculadora.model.pojo.Elemento;
import com.unir.back_end_calculadora.model.pojo.Operacion;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class OperacionesServiceImpl implements OperacionesService {

    @Autowired
    private OperacionRepository operacionRepository;

    @Override
    public List<Operacion> getOperaciones() {
        List<Operacion> operacion = operacionRepository.findAll();
        return operacion.isEmpty() ? null : operacion;
    }

    @Override
    public Operacion getOperacion(String operacionId) {
        return operacionRepository.findById(Long.valueOf(operacionId)).orElse(null);
    }

    @Override
    public Operacion createOperacion(Operacion operacion) {
        if (operacion != null && StringUtils.hasLength(operacion.getOperacion().trim())) {

            List<Double> elementos = new ArrayList<>();
            for (Elemento elemento : operacion.getElemtoList()) {
                elementos.add(elemento.getValor());
            }

            boolean badOperation = false;
            if (!elementos.isEmpty()) {
                // Adquirir y eliminar el primer elemento
                Double resultado = elementos.get(0);
                elementos.remove(0);
                switch (operacion.getOperacion()) {
                    case "sumar":
                        for (Double elemento : elementos) {
                            resultado = resultado + elemento;
                        }
                        break;
                    case "restar":
                        for (Double elemento : elementos) {
                            resultado = resultado - elemento;
                        }
                        break;
                    case "multiplicar":
                        for (Double elemento : elementos) {
                            resultado = resultado * elemento;
                        }
                        break;
                    case "dividir":
                        if (elementos.size() != 1) {
                            badOperation = true;
                        } else {
                            resultado = resultado / elementos.get(0);
                        }
                        break;
                    case "raiz":
                        if (elementos.size() != 1) {
                            badOperation = true;
                        } else {
                            resultado = Math.pow(resultado, 1 / elementos.get(0));
                        }
                        break;
                    case "potencia":
                        if (elementos.size() != 1) {
                            badOperation = true;
                        } else {
                            resultado = Math.pow(resultado, elementos.get(0));
                        }
                        break;
                    default:
                        badOperation = true;
                }

                if (badOperation) {
                    return null;
                } else {
                    // Add result
                    operacion.setResultado(resultado);
                    return operacionRepository.save(operacion);
                }
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    @Override
    public Boolean removeOperacion(String operacionId) {
        Operacion operacion = operacionRepository.findById(Long.valueOf(operacionId)).orElse(null);

        if (operacion != null) {
            operacionRepository.delete(operacion);
            return Boolean.TRUE;
        } else {
            return Boolean.FALSE;
        }
    }

}
