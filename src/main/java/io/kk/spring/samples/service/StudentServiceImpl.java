package io.kk.spring.samples.service;

import io.kk.spring.samples.domain.Employee;
import io.kk.spring.samples.domain.Student;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by karan.khosla on 3/13/14.
 */

@Service("studentService")
public class StudentServiceImpl implements StudentService {

    private static List<Student> studentList = new ArrayList<Student>();
    private static Long id = 0L;

    @Override
    public List<Student> getStudentList() {
        return studentList;
    }

    @Override
    public void addStudent(Student student) {
        student.setId(++id);
        studentList.add(student);
    }

    private Student findStudentById(Long id) {
        for (Student student : studentList) {
            if (student.getId().equals(id))
                return student;
        }
        return null;
    }

    @Override
    public void deleteStudentById(Long id) throws Exception {
        Student studentRecordFound = findStudentById(id);
        if (studentRecordFound != null)
            studentList.remove(studentRecordFound);
        else
            throw new Exception("Crap");
    }

    @Override
    public void deleteAllStudents() {
        studentList.clear();
    }

    @Override
    public void updateStudent(Student student) {
        Student studentRecordFound = findStudentById(student.getId());
        studentList.remove(studentRecordFound);
        studentList.add(student);
    }
}
