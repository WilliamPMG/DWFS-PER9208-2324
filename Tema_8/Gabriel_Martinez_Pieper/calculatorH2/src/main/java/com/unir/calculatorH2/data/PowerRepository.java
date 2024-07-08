package com.unir.calculatorH2.data;

import com.unir.calculatorH2.model.db.PowerResult;
import com.unir.calculatorH2.model.db.SubtractionResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface PowerRepository extends JpaRepository<PowerResult, Long>, JpaSpecificationExecutor<PowerResult> {
    PowerResult findAllById(Long powerId);
}
