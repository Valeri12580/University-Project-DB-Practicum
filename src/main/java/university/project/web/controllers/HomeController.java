package university.project.web.controllers;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import university.project.domain.dtos.view.UserViewModel;
import university.project.services.interfaces.UserService;

import java.util.Arrays;
import java.util.List;

@Controller
@RequestMapping(value = "/")
public class HomeController {

    private UserService userService;
    private ModelMapper modelMapper;


    @Autowired
    public HomeController(UserService userService, ModelMapper modelMapper) {
        this.userService = userService;
        this.modelMapper = modelMapper;
    }


    @GetMapping
    public ResponseEntity<List<UserViewModel>> findByCriteria(@RequestParam(value = "professionCriteria", required = false) String professionCriteria,
                                                              @RequestParam(value = "cityCriteria", required = false) String cityCriteria) {
        List<UserViewModel> result = Arrays.asList(this.modelMapper.map(this.userService.findWorkersByCriteria(professionCriteria, cityCriteria), UserViewModel[].class));
        return ResponseEntity.ok(result);
    }
}
