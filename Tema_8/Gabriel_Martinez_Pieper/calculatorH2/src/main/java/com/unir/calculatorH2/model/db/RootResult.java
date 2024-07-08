package com.unir.calculatorH2.model.db;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;


@Entity
@Table(name = "roots")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@ToString
public class RootResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "result")
    private Double result;

    @Column(name = "radicand")
    private Double radicand;

    @Column(name = "index")
    private Integer index;
}
