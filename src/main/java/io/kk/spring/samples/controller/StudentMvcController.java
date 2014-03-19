package io.kk.spring.samples.controller;

import io.kk.spring.samples.domain.Employee;
import io.kk.spring.samples.domain.Student;
import io.kk.spring.samples.service.EmployeeService;
import io.kk.spring.samples.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by karan.khosla on 3/13/14.
 */

@Controller
@RequestMapping("/api")
public class StudentMvcController {

    @Autowired
    private StudentService studentService;


    @RequestMapping("/student/studentlist.json")
    public
    @ResponseBody
    List<Student> getStudentList() {
        return studentService.getStudentList();
    }

    @RequestMapping(value = "/student/addStudent", method = RequestMethod.POST)
    public
    @ResponseBody
    void addStudentProfile(@RequestBody Student studentProfile) {
        studentService.addStudent(studentProfile);
    }

    @RequestMapping(value = "/student/removeStudent/{studentId}", method = RequestMethod.DELETE)
    public
    @ResponseBody
    void removeStudent(@PathVariable("studentId") Long studentId) throws Exception {
        studentService.deleteStudentById(studentId);
    }

    @RequestMapping(value = "/student/updateStudentDetails", method = RequestMethod.PUT)
    public
    @ResponseBody
    void updateStudent(@RequestBody Student student) {
        studentService.updateStudent(student);
    }

    @RequestMapping(value = "/student/removeAllStudents", method = RequestMethod.DELETE)
    public
    @ResponseBody
    void removeAllStudents() {
        studentService.deleteAllStudents();
    }
}
