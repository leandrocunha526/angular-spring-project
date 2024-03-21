package com.spring.api.springbootbackend.service;

import com.spring.api.springbootbackend.model.Employee;
import com.spring.api.springbootbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> findByFirstName(String firstName){
        return employeeRepository.findByFirstName(firstName);
    }
}
