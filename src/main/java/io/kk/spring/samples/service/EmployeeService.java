package io.kk.spring.samples.service;

import io.kk.spring.samples.domain.Employee;

import java.util.List;

/**
 * Created by karan.khosla on 3/13/14.
 */


public interface EmployeeService {

    public List<Employee> getEmployeeLsit();

    public void addEmployee(Employee employee);

    public void deleteEmployeeById(Long id);

    public void deleteAllEmployees();

    public void updateEmployee(Employee employee);

}
