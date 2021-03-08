package university.project.web.controllers;

import java.util.*;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
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

    @PostMapping("/add")
    public ResponseEntity<Void>addProfession(@RequestBody String name){
        this.professionService.saveProfession(name);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}/delete")
    public ResponseEntity<Void>deleteCountry(@PathVariable String id){

        this.professionService.deleteCountryById(id);

        return ResponseEntity.ok().build();
    }
}
