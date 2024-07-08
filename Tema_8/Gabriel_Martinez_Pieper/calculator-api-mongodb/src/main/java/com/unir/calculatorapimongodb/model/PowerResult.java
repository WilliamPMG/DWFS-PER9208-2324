package com.unir.calculatorapimongodb.model;

import com.unir.calculatorapimongodb.model.request.PowerRequest;
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
public class PowerResult extends Result {

    PowerRequest parameters;
}
