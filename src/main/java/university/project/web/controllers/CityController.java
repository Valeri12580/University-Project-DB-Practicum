package university.project.web.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import university.project.domain.dtos.service.CityServiceModel;
import university.project.domain.dtos.view.CityViewModel;
import university.project.services.interfaces.CityService;

import java.util.List;

@Controller
@RequestMapping("/cities")
public class CityController {

    private CityService cityService;
    private ModelMapper modelMapper;

    @Autowired
    public CityController(CityService cityService, ModelMapper modelMapper) {
        this.cityService = cityService;
        this.modelMapper = modelMapper;
    }

    @GetMapping
    public ResponseEntity<List<CityViewModel>> getAllCities() {

        List<CityViewModel> cities = List.of(this.modelMapper.map(cityService.findAllCities(), CityViewModel[].class));

        return ResponseEntity.ok(cities);
    }

}
