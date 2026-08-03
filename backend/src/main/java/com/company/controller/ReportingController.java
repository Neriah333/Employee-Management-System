package com.company.controller;

import com.company.repository.DepartmentRepository;
import com.company.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class ReportingController {

    private final EmployeeRepository employeeRepository;
    private final DepartmentRepository departmentRepository;

    @GetMapping("/summary")
    public ResponseEntity<Map<String, Object>> getSummary() {
        long totalEmployees = employeeRepository.count();
        long totalDepartments = departmentRepository.count();
        BigDecimal totalPayroll = employeeRepository.findAll().stream()
                .map(employee -> employee.getSalary() != null ? employee.getSalary() : BigDecimal.ZERO)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        Map<String, Object> summary = new HashMap<>();
        summary.put("totalEmployees", totalEmployees);
        summary.put("totalDepartments", totalDepartments);
        summary.put("totalPayroll", totalPayroll);
        return ResponseEntity.ok(summary);
    }
}
