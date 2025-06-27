package com.unir.back_end_calculadora.data;

import com.unir.back_end_calculadora.model.pojo.Elemento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ElementoRepository extends JpaRepository<Elemento, Long> {
}
