package com.example.springpractice;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "hello";
    }

    @PostMapping("/hello")
    @ResponseBody
    public String helloPost() {
        return "POST request received";
    }

    @PutMapping("/hello")
    @ResponseBody
    public String helloPut() {
        return "PUT request received";
    }

    @PatchMapping("/hello")
    @ResponseBody
    public String helloPatch() {
        return "PATCH request received";
    }

    @DeleteMapping("/hello")
    @ResponseBody
    public String helloDelete() {
        return "DELETE request received";
    }

    @GetMapping("/greet")
    @ResponseBody
    public String greet(@RequestParam String name) {
        return "Hello, " + name;
    }

    @GetMapping("/user/{id}")
    @ResponseBody
    public String getUser(@PathVariable int id) {
        return "User ID: " + id;
    }

    @PostMapping("/user")
    @ResponseBody
    public String createUser(@RequestBody User user) {
        return "User created: " + user.getName()
                + ", Age: " + user.getAge();
    }

    @GetMapping("/user-info")
    @ResponseBody
    public User getUserInfo() {

        User user = new User();
        user.setName("Akshay");
        user.setAge(22);

        return user;
    }

    @GetMapping("/welcome")
    public String welcome(Model model) {

        model.addAttribute("name", "Akshay");

        return "welcome";
    }

    @GetMapping("/profile")
    public ModelAndView profile() {

        ModelAndView mv = new ModelAndView("profile");

        mv.addObject("name", "Akshay");
        mv.addObject("role", "Java Developer");

        return mv;
    }
}