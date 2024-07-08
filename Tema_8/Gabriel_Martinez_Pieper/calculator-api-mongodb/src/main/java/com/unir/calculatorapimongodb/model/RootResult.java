package com.unir.calculatorapimongodb.model;

import com.unir.calculatorapimongodb.model.request.DivisionRequest;
import com.unir.calculatorapimongodb.model.request.RootRequest;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.springframework.data.mongodb.core.mapping.Document;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@ToString
@Document(collection = "result")
public class RootResult extends Result {

    RootRequest parameters;
}
