package com.unir.calculatorH2.controller;

import com.unir.calculatorH2.model.db.*;
import com.unir.calculatorH2.model.dto.AdditionDto;
import com.unir.calculatorH2.model.dto.SubtractionDto;
import com.unir.calculatorH2.model.request.*;
import com.unir.calculatorH2.service.CalculatorService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class OperationsController {

    private final CalculatorService service;

    @PostMapping("/additions")
    @Operation(
            operationId = "Realizar una suma",
            description = "Operacion de escritura",
            summary = "Se realiza una suma de n numeros y se crea un registro de la operación.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Numeros a sumar.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = AdditionSubtractionRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = AdditionDto.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    public ResponseEntity<AdditionDto> add(@RequestBody AdditionSubtractionRequest request) {
        AdditionDto addition = service.add(request);
        if (addition != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(addition);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }


    @GetMapping("/additions/{additionId}")
    @Operation(
            operationId = "Obtener una suma",
            description = "Operacion de lectura",
            summary = "Se devuelve una suma a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = AdditionDto.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la suma con el identificador indicado.")
    public ResponseEntity<AdditionDto> getAddition(@PathVariable Long additionId) {

        AdditionDto addition = service.getAddition(additionId);

        if (addition != null) {
            return ResponseEntity.ok(addition);
        } else {
            return ResponseEntity.notFound().build();
        }

    }


    @PostMapping("/subtractions")
    @Operation(
            operationId = "Realizar una resta",
            description = "Operacion de escritura",
            summary = "Se realiza una resta de n numeros y se crea un registro de la operación.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Numeros a sumar.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = AdditionSubtractionRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = SubtractionDto.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    public ResponseEntity<SubtractionDto> subtract(@RequestBody AdditionSubtractionRequest request) {
        SubtractionDto subtraction = service.subtract(request);
        if (subtraction != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(subtraction);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/subtractions/{subtractionId}")
    @Operation(
            operationId = "Obtener una resta",
            description = "Operacion de lectura",
            summary = "Se devuelve una resta a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = SubtractionDto.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la resta con el identificador indicado.")
    public ResponseEntity<SubtractionDto> getSubtraction(@PathVariable Long subtractionId) {

        SubtractionDto subtraction = service.getSubtraction(subtractionId);

        if (subtraction != null) {
            return ResponseEntity.ok(subtraction);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @PostMapping("/multiplications")
    @Operation(
            operationId = "Realizar una multiplicación",
            description = "Operacion de escritura",
            summary = "Se realiza una multiplicación de dos numeros y se crea un registro de la operación.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Numeros a multiplicar.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = MultiplicationRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = MultiplicationResult.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    public ResponseEntity<MultiplicationResult> multiply(@RequestBody MultiplicationRequest request) {
        MultiplicationResult multiplication = service.multiply(request);
        if (multiplication != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(multiplication);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/multiplications/{multiplicationId}")
    @Operation(
            operationId = "Obtener una multiplicación",
            description = "Operacion de lectura",
            summary = "Se devuelve una multiplicación a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = MultiplicationResult.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la multiplicación con el identificador indicado.")
    public ResponseEntity<MultiplicationResult> getMultiplication(@PathVariable Long multiplicationId) {

        MultiplicationResult multiplication = service.getMultiplication(multiplicationId);

        if (multiplication != null) {
            return ResponseEntity.ok(multiplication);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @PostMapping("/divisions")
    @Operation(
            operationId = "Realizar una división",
            description = "Operacion de escritura",
            summary = "Se realiza una división y se crea un registro de la operación.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Dividendo y divisor.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = DivisionRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = DivisionResult.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    public ResponseEntity<DivisionResult> divide(@RequestBody DivisionRequest request) {
        DivisionResult division = service.divide(request);
        if (division != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(division);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/divisions/{divisionId}")
    @Operation(
            operationId = "Obtener una division",
            description = "Operacion de lectura",
            summary = "Se devuelve una division a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = DivisionResult.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la division con el identificador indicado.")
    public ResponseEntity<DivisionResult> getDivision(@PathVariable Long divisionId) {

        DivisionResult division = service.getDivision(divisionId);

        if (division != null) {
            return ResponseEntity.ok(division);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @PostMapping("/roots")
    @Operation(
            operationId = "Realizar una raiz",
            description = "Operacion de escritura",
            summary = "Se realiza una raiz y se crea un registro de la operación.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "radicando e indice",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = RootRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = RootResult.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    public ResponseEntity<RootResult> divide(@RequestBody RootRequest request) {
        RootResult root = service.root(request);
        if (root != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(root);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/roots/{rootId}")
    @Operation(
            operationId = "Obtener una raiz",
            description = "Operacion de lectura",
            summary = "Se devuelve una raiz a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = RootResult.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la raiz con el identificador indicado.")
    public ResponseEntity<RootResult> getRoot(@PathVariable Long rootId) {

        RootResult root = service.getRoot(rootId);

        if (root != null) {
            return ResponseEntity.ok(root);
        } else {
            return ResponseEntity.notFound().build();
        }

    }


    @PostMapping("/powers")
    @Operation(
            operationId = "Realizar una potencia",
            description = "Operacion de escritura",
            summary = "Se realiza una potencia y se crea un registro de la operación.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "base y exponente",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = PowerRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = PowerResult.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    public ResponseEntity<PowerResult> power(@RequestBody PowerRequest request) {
        PowerResult power = service.power(request);
        if (power != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(power);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/powers/{powerId}")
    @Operation(
            operationId = "Obtener una potencia",
            description = "Operacion de lectura",
            summary = "Se devuelve una potencia a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = PowerResult.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la potencia con el identificador indicado.")
    public ResponseEntity<PowerResult> getPower(@PathVariable Long powerId) {

        PowerResult power = service.getPower(powerId);

        if (power != null) {
            return ResponseEntity.ok(power);
        } else {
            return ResponseEntity.notFound().build();
        }

    }


}
