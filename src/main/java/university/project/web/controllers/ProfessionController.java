package university.project.web.controllers;

import java.util.*;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import university.project.services.interfaces.ProfessionService;

@Controller
@RequestMapping(value = "/professions")
public class ProfessionController {
    private ProfessionService professionService;

    public ProfessionController(ProfessionService professionService) {
        this.professionService = professionService;
    }

    @GetMapping
    public ResponseEntity<List<String>>getAllProfessions(){
        List<String> professions = professionService.findAllProfessions().stream().map(e -> e.getName()).collect(Collectors.toList());

        return ResponseEntity.ok(professions);
    }
}
