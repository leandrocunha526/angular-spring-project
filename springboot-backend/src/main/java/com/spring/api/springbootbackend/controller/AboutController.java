package com.spring.api.springbootbackend.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AboutController {

    @GetMapping("/about")
    public ResponseEntity<String> about() {
        String message = "This is a simple API built with Spring Boot for managing employees.";
        return ResponseEntity.ok(message);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error 500: An error occurred: " + e.getMessage());
    }
}
