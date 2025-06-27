package com.unir.calculatorH2.model.db;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "addition_number")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AdditionNumber {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne()
    @JoinColumn(name = "addition_id")
    private AdditionResult addition;

    @Column(name="number")
    private Double number;

    public AdditionNumber(Double number){
        this.number = number;
    }

}