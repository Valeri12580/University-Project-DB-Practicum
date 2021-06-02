package university.project.web.controllers;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import university.project.domain.dtos.binding.CountryBindingModel;
import university.project.domain.dtos.view.CountryViewModel;
import university.project.services.interfaces.CountryService;

import java.util.List;

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
    public ResponseEntity<List<CountryViewModel>> findAllCountries() {
        List<CountryViewModel> countries = List.of(this.modelMapper.map(this.countryService.findAllCountries(), CountryViewModel[].class));

        return ResponseEntity.ok(countries);
    }

    @PostMapping("/add")
    public ResponseEntity<Void>addCountry(@RequestBody CountryBindingModel model){

        this.countryService.saveCountry(model.getName());
        return ResponseEntity.ok().build();
    }

    @PutMapping("/update")
    public ResponseEntity<Void>updateCountry(@RequestBody CountryBindingModel model){
        this.countryService.updateCountry(model.getId(),model.getName());
        return ResponseEntity.ok().build();
    }



    @DeleteMapping("/{id}/delete")
    public ResponseEntity<Void>deleteCountry(@PathVariable String id){
        this.countryService.deleteCountryById(id);
        return ResponseEntity.ok().build();
    }


}
