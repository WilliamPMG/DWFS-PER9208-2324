package com.unir.calculatorH2.model.db;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.List;


@Entity
@Table(name = "additions")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@ToString
public class AdditionResult  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "result")
    private Double result;

    @OneToMany(mappedBy = "addition", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<AdditionNumber> numbers;
}
