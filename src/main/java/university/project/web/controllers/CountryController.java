package university.project.web.controllers;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import university.project.domain.dtos.service.CountryServiceModel;
import university.project.services.interfaces.CountryService;

import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/countries")
public class CountryController {

    private ModelMapper modelMapper;
    private CountryService countryService;

    @Autowired
    public CountryController(ModelMapper modelMapper, CountryService countryService) {
        this.modelMapper = modelMapper;
        this.countryService = countryService;
    }

    @GetMapping
    public ResponseEntity<List<String>>findAllCountries(){
        List<String> countries = this.countryService.findAllCountries().stream().map(CountryServiceModel::getName).collect(Collectors.toList());

        return ResponseEntity.ok(countries);
    }
}
