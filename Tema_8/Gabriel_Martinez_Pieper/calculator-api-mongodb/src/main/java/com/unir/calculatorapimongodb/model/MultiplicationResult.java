package com.unir.calculatorapimongodb.model;

import com.unir.calculatorapimongodb.model.request.MultiplicationRequest;
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
public class MultiplicationResult extends Result {

    MultiplicationRequest parameters;
}
