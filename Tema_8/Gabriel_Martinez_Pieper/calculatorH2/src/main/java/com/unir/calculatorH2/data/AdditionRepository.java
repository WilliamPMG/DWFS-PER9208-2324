package com.unir.calculatorH2.data;

import com.unir.calculatorH2.model.db.AdditionResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface AdditionRepository extends JpaRepository<AdditionResult, Long>, JpaSpecificationExecutor<AdditionResult> {
    AdditionResult findAllById(Long additionId);
}
