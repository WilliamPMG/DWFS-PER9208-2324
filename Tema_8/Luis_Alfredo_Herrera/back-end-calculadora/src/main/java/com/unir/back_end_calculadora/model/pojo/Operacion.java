package com.unir.back_end_calculadora.model.pojo;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.OneToMany;
import jakarta.persistence.FetchType;
import jakarta.persistence.CascadeType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "operaciones")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString

public class Operacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "operacion")
    private String operacion;

    @Column(name = "resultado")
    private Double resultado;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "operacion", cascade = CascadeType.ALL)
    private List<Elemento> elemtoList;

    public void update(OperacionDto operacionDto) {
        this.operacion =   operacionDto.getOperacion();
        this.resultado = operacionDto.getResultado();
    }

    public Operacion(String operacion) {
        this.operacion = operacion;
    }
}
