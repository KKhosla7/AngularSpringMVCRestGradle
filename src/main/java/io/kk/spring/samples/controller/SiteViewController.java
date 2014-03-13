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
    public String getPartialPage() {
        return "layout/employee";
    }

}
