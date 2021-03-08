package university.project.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import university.project.domain.dtos.service.CityServiceModel;
import university.project.domain.entities.City;
import university.project.domain.entities.Country;
import university.project.repositories.CityRepository;
import university.project.repositories.CountryRepository;
import university.project.services.interfaces.CityService;

import java.util.List;

@Service
public class CityServiceImpl implements CityService {

    private CityRepository cityRepository;
    private CountryRepository countryRepository;
    private ModelMapper modelMapper;

    @Autowired
    public CityServiceImpl(CityRepository cityRepository, CountryRepository countryRepository, ModelMapper modelMapper) {
        this.cityRepository = cityRepository;
        this.countryRepository = countryRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<CityServiceModel> findAllCities() {


        return List.of(this.modelMapper.map(cityRepository.findAll(),CityServiceModel[].class));
    }

    @Override
    public void saveCity(String cityName, String countryName) {
        Country country = countryRepository.findByName(countryName);
        City city=new City(cityName,country);
        cityRepository.save(city);
    }

    @Override
    public void deleteCityById(String id) {
        this.cityRepository.deleteById(id);
    }
}
