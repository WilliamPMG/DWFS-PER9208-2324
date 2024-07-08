package com.unir.calculatorH2.model.db;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.List;


@Entity
@Table(name = "subtractions")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@ToString
public class SubtractionResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "result")
    private Double result;

    @OneToMany(mappedBy = "subtraction", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<SubtractionNumber> numbers;

}
