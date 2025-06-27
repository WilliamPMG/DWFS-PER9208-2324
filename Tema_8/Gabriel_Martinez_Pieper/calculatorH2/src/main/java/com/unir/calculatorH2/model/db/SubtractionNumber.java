package com.unir.calculatorH2.model.db;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "subtraction_number")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SubtractionNumber {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne()
    @JoinColumn(name = "subtraction_id")
    private SubtractionResult subtraction;

    @Column(name="number")
    private Double number;


    public SubtractionNumber(Double number){
        this.number = number;
    }


}