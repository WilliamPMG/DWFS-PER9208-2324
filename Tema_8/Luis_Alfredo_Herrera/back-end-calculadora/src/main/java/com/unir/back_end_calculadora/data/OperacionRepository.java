package com.unir.back_end_calculadora.data;

import com.unir.back_end_calculadora.model.pojo.Operacion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OperacionRepository extends JpaRepository<Operacion, Long> {
}
