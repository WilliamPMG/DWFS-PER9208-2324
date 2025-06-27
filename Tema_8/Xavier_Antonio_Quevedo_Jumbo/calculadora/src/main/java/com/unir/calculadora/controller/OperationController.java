package com.unir.calculadora.controller;

import com.unir.calculadora.model.pojo.OperationDto;
import com.unir.calculadora.model.request.OperationRequest;
import com.unir.calculadora.service.OperationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Tag(name = "Operations", description = "API para la calculadora online")
public class OperationController {

    private final OperationService operationService;

    @GetMapping("/operations")
    @Operation(
            operationId = "Consulta todos los cálculos",
            description = "Operación de lectura",
            summary = "Devbuelve una lista con todos los calculos")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = List.class, subTypes = {Operation.class})))

    public ResponseEntity<Operation> getAllOperations() {

        List<com.unir.calculadora.model.pojo.Operation> operationList = operationService.getAllOperations();

        if (operationList.isEmpty()) {
            return ResponseEntity.ok((Operation) operationList);
        } else {
            return ResponseEntity.noContent().build();
        }


    }

    @GetMapping("operations/{operationId}")
    @Operation(
            operationId = "Obtiene detalles de una operacion",
            description = "Operaciión de lectura",
            summary = "Devuelve una operación por su identificador")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Operation.class)))
    @ApiResponse(
            responseCode = "500",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "Error interno del servidor")

    public ResponseEntity<Operation> getOperationById(@PathVariable String operationId) {

        Operation operation = (Operation) operationService.getOperationById(operationId);

        if (operation != null) {
            return ResponseEntity.ok(operation);
        } else {
            return ResponseEntity.notFound().build();
        }

    }
    @PostMapping("/operations")
    @Operation(
            operationId = "Registrar una operación",
            description = "Operación de escritura",
            summary = "Crea una operación",
            requestBody =  @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos de la operación",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = OperationRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Operation.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "Algún dato introducido es incorrecto.")
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "No se ha encontrado ninguna operación con el identificador dado.")
    @ApiResponse(
            responseCode = "500",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "Erroir interno del servidor.")

    public ResponseEntity<Operation> saveOperation(@RequestBody OperationDto operationDto) {

        Operation operation = (Operation) operationService.saveOperation(operationDto);

        if (operation != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(operation);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

}

