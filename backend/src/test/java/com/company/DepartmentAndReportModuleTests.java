package com.company;

import com.company.controller.ReportingController;
import com.company.service.DepartmentService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
@ActiveProfiles("test")
class DepartmentAndReportModuleTests {

    @Autowired
    private ApplicationContext applicationContext;

    @Test
    void shouldLoadDepartmentAndReportingBeans() {
        assertNotNull(applicationContext.getBean(DepartmentService.class));
        assertNotNull(applicationContext.getBean(ReportingController.class));
    }
}
