package university.project.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import university.project.domain.dtos.service.CityServiceModel;
import university.project.repositories.CityRepository;
import university.project.services.interfaces.CityService;

import java.util.List;

@Service
public class CityServiceImpl implements CityService {

    private CityRepository cityRepository;
    private ModelMapper modelMapper;

    @Autowired
    public CityServiceImpl(CityRepository cityRepository, ModelMapper modelMapper) {
        this.cityRepository = cityRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<CityServiceModel> findAllCities() {


        return List.of(this.modelMapper.map(cityRepository.findAll(),CityServiceModel[].class));
    }
}
