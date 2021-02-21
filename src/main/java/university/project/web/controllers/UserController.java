package university.project.web.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import university.project.domain.dtos.view.UserViewModel;
import university.project.services.interfaces.UserService;

import java.util.*;
@Controller
@RequestMapping("/users")
public class UserController {

    private UserService userService;
    private ModelMapper modelMapper;


    @Autowired
    public UserController(UserService userService, ModelMapper modelMapper) {
        this.userService = userService;
        this.modelMapper = modelMapper;
    }

    @GetMapping
    public ResponseEntity<List<UserViewModel>>getAllUsers(){

        List<UserViewModel> users = List.of(this.modelMapper.map(userService.findAllUsers(), UserViewModel[].class));

        return ResponseEntity.ok(users);
    }


}
