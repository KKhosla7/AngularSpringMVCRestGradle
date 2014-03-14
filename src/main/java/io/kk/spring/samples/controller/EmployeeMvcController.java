package io.kk.spring.samples.controller;

import io.kk.spring.samples.domain.Employee;
import io.kk.spring.samples.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by karan.khosla on 3/13/14.
 */

@Controller
@RequestMapping("/api")
public class EmployeeMvcController {

    @Autowired
    private EmployeeService employeeService;


    @RequestMapping("/employee/employeelist.json")
    public
    @ResponseBody
    List<Employee> getEmployeeList() {
        return employeeService.getEmployeeLsit();
    }

    @RequestMapping(value = "/employee/addEmployee", method = RequestMethod.POST)
    public
    @ResponseBody
    void addEmployeeProfile(@RequestBody Employee employeeProfile) {
        employeeService.addEmployee(employeeProfile);
    }

    @RequestMapping(value = "/employee/removeEmployee/{employeeId}", method = RequestMethod.DELETE)
    public
    @ResponseBody
    void removeEmployee(@PathVariable("employeeId") Long employeeId) throws Exception {
        employeeService.deleteEmployeeById(employeeId);
    }

    @RequestMapping(value = "/employee/updateEmployeeDetails", method = RequestMethod.PUT)
    public
    @ResponseBody
    void updateEmployeeDetails(@RequestBody Employee employee) {
        employeeService.updateEmployee(employee);
    }

    @RequestMapping(value = "/employee/removeAllEmployees", method = RequestMethod.DELETE)
    public
    @ResponseBody
    void removeAllEmployees() {
        employeeService.deleteAllEmployees();
    }
}
