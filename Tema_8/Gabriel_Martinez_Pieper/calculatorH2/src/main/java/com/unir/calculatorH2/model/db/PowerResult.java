package com.unir.calculatorH2.model.db;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;


@Entity
@Table(name = "powers")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@ToString
public class PowerResult  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "result")
    private Double result;

    @Column(name = "base")
    private Double base;

    @Column(name = "exponent")
    private Double exponent;
}
