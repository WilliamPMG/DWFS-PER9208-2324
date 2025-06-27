package com.unir.calculatorH2.data;

import com.unir.calculatorH2.model.db.MultiplicationResult;
import com.unir.calculatorH2.model.db.SubtractionResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface MultiplicationRepository extends JpaRepository<MultiplicationResult, Long>, JpaSpecificationExecutor<MultiplicationResult> {
    MultiplicationResult findAllById(Long multiplicationId);
}
