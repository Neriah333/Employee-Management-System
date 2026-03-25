package com.company.repository;

import com.company.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.math.BigDecimal;
import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    // Requirement: Find employees by department
    List<Employee> findByDepartment(String department);

    // Requirement: Find employees with salary above a threshold
    List<Employee> findBySalaryGreaterThan(BigDecimal salary);
    
    // Bonus: Find by email (to support your unique constraint check)
    boolean existsByEmail(String email);
}