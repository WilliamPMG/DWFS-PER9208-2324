package com.unir.calculatorH2.data;

import com.unir.calculatorH2.model.db.DivisionResult;
import com.unir.calculatorH2.model.db.SubtractionResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface DivisionRepository extends JpaRepository<DivisionResult, Long>, JpaSpecificationExecutor<DivisionResult> {
    DivisionResult findAllById(Long divisionId);
}
