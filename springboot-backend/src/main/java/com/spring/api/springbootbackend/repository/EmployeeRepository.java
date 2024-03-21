package com.spring.api.springbootbackend.repository;

import com.spring.api.springbootbackend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    @Query("SELECT e FROM Employee as e WHERE e.firstName ILIKE %:keyword%")
    List<Employee> findByFirstName(@Param("keyword")String keyword);
}
