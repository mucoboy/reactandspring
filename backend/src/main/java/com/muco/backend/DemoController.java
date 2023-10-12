package com.muco.backend;

import java.util.List;
import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DemoController {
    
    @GetMapping("/people")
    public List<Person> getir(){
        var list = new ArrayList<Person>();
        list.add(new Person("spring", "io"));
        list.add(new Person("react", "dev"));
        list.add(new Person("post", "man"));
        return list;
    }

    
    public record Person(String name, String lastName) {
    }
}
