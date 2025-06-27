package com.unir.back_end_calculadora.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import com.unir.back_end_calculadora.model.pojo.Elemento;
import com.unir.back_end_calculadora.model.pojo.Operacion;
import com.unir.back_end_calculadora.model.pojo.OperacionDto;
import com.unir.back_end_calculadora.model.request.CreateOperacionRequest;
import com.unir.back_end_calculadora.service.OperacionesService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;


@RestController
@RequiredArgsConstructor
@Slf4j
@Tag(name = "Operaciones Controller", description = "Microservicio encargado de exponer operaciones CRUD sobre operaciones alojadas en una base de datos en memoria.")
public class OperacionesController {
    private final OperacionesService service;

    @GetMapping("/api/operaciones")
    @Operation(
            operationId = "Obtener cálculos",
            description = "Operación de lectura",
            summary = "Se devuelve una lista de todos los cálculos almacenados en la base de datos.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = OperacionDto.class)))

    public ResponseEntity<List<OperacionDto>> getOperaciones(
            @RequestHeader Map<String, String> headers) {

        log.info("headers: {}", headers);
        List<Operacion> operaciones = service.getOperaciones();

        List<OperacionDto> operacionesDto = new ArrayList<>();
        for (Operacion operacion : operaciones) {
            List<Double> elementosList = new ArrayList<>();
            for (Elemento elemento : operacion.getElemtoList()) {
                elementosList.add(elemento.getValor());
            }
            OperacionDto operacionDto = OperacionDto.builder().id(operacion.getId()).operacion(operacion.getOperacion()).resultado(operacion.getResultado()).elementos(elementosList).build();
            operacionesDto.add(operacionDto);
        }

        if (!operacionesDto.isEmpty()) {
            return ResponseEntity.ok(operacionesDto);
        } else {
            return ResponseEntity.ok(Collections.emptyList());
        }
    }

    @GetMapping("/api/operaciones/{operacionId}")
    @Operation(
            operationId = "Obtener un cálculo",
            description = "Operación de lectura",
            summary = "Se devuelve un cálculo a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Operacion.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado el cálculo con el identificador indicado.")
    public ResponseEntity<OperacionDto> getOperacion(@PathVariable String operacionId) {

        log.info("Request received for calculation {}", operacionId);
        Operacion operacion = service.getOperacion(operacionId);

        if (operacion != null) {
            List<Double> elementosList = new ArrayList<>();
            for (Elemento elemento : operacion.getElemtoList()) {
                elementosList.add(elemento.getValor());
            }
            OperacionDto operacionDto = OperacionDto.builder().id(operacion.getId()).operacion(operacion.getOperacion()).resultado(operacion.getResultado()).elementos(elementosList).build();
            return ResponseEntity.ok(operacionDto);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @PostMapping("/api/operaciones")
    @Operation(
            operationId = "Insertar un cálculo",
            description = "Operacion de escritura",
            summary = "Se crea un cálculo a partir de sus datos (operación y elementos).",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos del cálculo a crear.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = CreateOperacionRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Operacion.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    public ResponseEntity<OperacionDto> saveOperacion(@RequestBody CreateOperacionRequest request) {

        // Nuevo calculo
        Operacion operacionIn = new Operacion(request.getOperacion());

        // List de elementos
        List<Elemento> Elementos = new ArrayList<>();
        for (Double elementoIn : request.getElementos()) {
            // Nuevo operacion
            Elemento elemento = new Elemento(elementoIn);
            // Set operacion y elemento
            elemento.setOperacion(operacionIn);
            // Add elementos to list
            Elementos.add(elemento);
        }

        // Add elemento list para operacion
        operacionIn.setElemtoList(Elementos);

        // Save calculo
        Operacion createOperacion = service.createOperacion(operacionIn);

        if (createOperacion != null) {
            List<Double> elementosList = new ArrayList<>();
            for (Elemento elemento : createOperacion.getElemtoList()) {
                elementosList.add(elemento.getValor());
            }
            OperacionDto operacionDto = OperacionDto.builder().id(createOperacion.getId()).operacion(createOperacion.getOperacion()).resultado(createOperacion.getResultado()).elementos(elementosList).build();

            return ResponseEntity.ok(operacionDto);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/api/operaciones/{operacionId}")
    @Operation(
            operationId = "Eliminar la operación",
            description = "Operacion de escritura",
            summary = "Se elimina la operación a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado el cálculo con el identificador indicado.")
    public ResponseEntity<Void> deleteOperacion(@PathVariable String operacionId) {

        Boolean removed = service.removeOperacion(operacionId);

        if (Boolean.TRUE.equals(removed)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }

    }

}
