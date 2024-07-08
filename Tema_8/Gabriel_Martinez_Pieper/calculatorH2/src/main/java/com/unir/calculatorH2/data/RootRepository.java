package com.unir.calculatorH2.data;

import com.unir.calculatorH2.model.db.RootResult;
import com.unir.calculatorH2.model.db.SubtractionResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface RootRepository extends JpaRepository<RootResult, Long>, JpaSpecificationExecutor<RootResult> {
    RootResult findAllById(Long rootId);
}
