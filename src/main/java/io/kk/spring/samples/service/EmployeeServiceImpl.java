package io.kk.spring.samples.service;

import io.kk.spring.samples.domain.Employee;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by karan.khosla on 3/13/14.
 */

@Service("employeeService")
public class EmployeeServiceImpl implements EmployeeService {

    private static List<Employee> employeeList = new ArrayList<Employee>();
    private static Long id = 0L;

    @Override
    public List<Employee> getEmployeeLsit() {
        return employeeList;
    }

    @Override
    public void addEmployee(Employee employee) {
        employee.setId(++id);
        employeeList.add(employee);
    }

    private Employee findEmployeeById(Long id) {
        for (Employee employee : employeeList) {
            if (employee.getId().equals(id))
                return employee;
        }
        return null;
    }

    @Override
    public void deleteEmployeeById(Long id) throws Exception {
        Employee employeeRecordFound = findEmployeeById(id);
        if (employeeRecordFound != null)
            employeeList.remove(employeeRecordFound);
        else
            throw new Exception("Crap");
    }

    @Override
    public void deleteAllEmployees() {
        employeeList.clear();
    }

    @Override
    public void updateEmployee(Employee employee) {
        Employee employeeRecordFound = findEmployeeById(employee.getId());
        employeeList.remove(employeeRecordFound);
        employeeList.add(employee);
    }
}
