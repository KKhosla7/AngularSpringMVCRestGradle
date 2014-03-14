package io.kk.spring.samples.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by karan.khosla on 3/13/14.
 */

@Controller
@RequestMapping("/")
public class SiteViewController {

    @RequestMapping
    public String getHome() {
        return "index";
    }

    @RequestMapping("layout/employee")
    public String getEmployeePartialPage() {
        return "layout/employee";
    }

    @RequestMapping("layout/student")
    public String getStudentPartialPage() {
        return "layout/student";
    }

    @RequestMapping("layout/course")
    public String getCoursePartialPage() {
        return "layout/course";
    }

    @RequestMapping("layout/online")
    public String getOnlinePartialPage() {
        return "layout/online";
    }

    @RequestMapping("components/navbar")
    public String getNavbar() {
        return "components/navbar";
    }

    @RequestMapping("components/site-footer")
    public String getFooter() {
        return "components/site-footer";
    }

    @RequestMapping("layout/login")
    public String getLogin() {
        return "layout/login";
    }


    @RequestMapping("layout/account")
    public String getAccount() {
        return "layout/account";
    }

    @RequestMapping("layout/forgot")
    public String getForgot() {
        return "layout/forgot";
    }

    @RequestMapping("layout/profile")
    public String getProfile() {
        return "layout/profile";
    }

    @RequestMapping("layout/settings")
    public String getSettings() {
        return "layout/settings";
    }


}
