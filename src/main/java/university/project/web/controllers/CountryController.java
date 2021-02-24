package university.project.web.controllers;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import university.project.domain.dtos.service.CountryServiceModel;
import university.project.domain.dtos.view.CountryViewModel;
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
    public ResponseEntity<List<CountryViewModel>>findAllCountries(){
        List<CountryViewModel> countries = List.of(this.modelMapper.map(this.countryService.findAllCountries(), CountryViewModel[].class));

        return ResponseEntity.ok(countries);
    }
}
