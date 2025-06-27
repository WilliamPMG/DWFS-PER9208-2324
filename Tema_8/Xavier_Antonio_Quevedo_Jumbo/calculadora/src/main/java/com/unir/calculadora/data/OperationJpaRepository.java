package com.unir.calculadora.data;

import com.unir.calculadora.model.pojo.Operation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface OperationJpaRepository  extends JpaRepository<Operation, Long>, JpaSpecificationExecutor<Operation> {
}
