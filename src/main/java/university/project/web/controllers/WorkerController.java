package university.project.web.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import university.project.domain.dtos.binding.WorkerBindingModel;
import university.project.domain.dtos.view.UserViewModel;
import university.project.services.interfaces.UserService;

import java.util.*;
@Controller
@RequestMapping("/workers")
public class WorkerController {

    private UserService userService;
    private ModelMapper modelMapper;


    @Autowired
    public WorkerController(UserService userService, ModelMapper modelMapper) {
        this.userService = userService;
        this.modelMapper = modelMapper;
    }

    @GetMapping
    public ResponseEntity<List<UserViewModel>>getAllUsers(){

        List<UserViewModel> users = List.of(this.modelMapper.map(userService.findAllUsers(), UserViewModel[].class));

        return ResponseEntity.ok(users);
    }

    @PostMapping("/add")
    public ResponseEntity<Void>addWorker(@RequestBody WorkerBindingModel worker){

        this.userService.addUser(worker.getFirstName(),worker.getLastName(),worker.getAge(),worker.getPhoneNumber(),
                worker.getCity(),worker.getProfession());
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}/delete")
    public ResponseEntity<Void>deleteCountry(@PathVariable String id){

        this.userService.deleteWorkerById(id);

        return ResponseEntity.ok().build();
    }

}
