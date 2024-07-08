package com.unir.calculatorH2.model.db;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;


@Entity
@Table(name = "multiplications")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@ToString
public class MultiplicationResult  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "result")
    private Double result;

    @Column(name = "number1")
    private Double number1;

    @Column(name = "number2")
    private Double number2;
}
