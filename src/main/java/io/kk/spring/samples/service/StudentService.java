package io.kk.spring.samples.service;

import io.kk.spring.samples.domain.Employee;
import io.kk.spring.samples.domain.Student;

import java.util.List;

/**
 * Created by karan.khosla on 3/13/14.
 */


public interface StudentService {

    public List<Student> getStudentList();

    public void addStudent(Student student);

    public void deleteStudentById(Long id) throws Exception;

    public void deleteAllStudents();

    public void updateStudent(Student student);

}
