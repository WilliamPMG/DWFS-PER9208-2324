package com.unir.calculatorH2.data;

import com.unir.calculatorH2.model.db.SubtractionResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface SubtractionRepository extends JpaRepository<SubtractionResult, Long>, JpaSpecificationExecutor<SubtractionResult> {
    SubtractionResult findAllById(Long subtractionId);
}
