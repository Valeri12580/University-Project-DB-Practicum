package university.project.web.controllers;

import java.util.*;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import university.project.domain.dtos.view.ProfessionViewModel;
import university.project.services.interfaces.ProfessionService;

@Controller
@RequestMapping(value = "/professions")

public class ProfessionController {
    private ProfessionService professionService;
    private ModelMapper modelMapper;


    public ProfessionController(ProfessionService professionService, ModelMapper modelMapper) {
        this.professionService = professionService;
        this.modelMapper = modelMapper;
    }

    @GetMapping
    public ResponseEntity<List<ProfessionViewModel>>getAllProfessions(){
        List<ProfessionViewModel> professions = List.of(this.modelMapper.map(this.professionService.findAllProfessions(), ProfessionViewModel[].class));

        return ResponseEntity.ok(professions);
    }
}
