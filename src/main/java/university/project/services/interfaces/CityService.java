package university.project.services.interfaces;

import java.util.*;

import university.project.domain.dtos.service.CityServiceModel;

public interface CityService {

    List<CityServiceModel>findAllCities();


    void saveCity(String cityName, String countryName);

    void deleteCityById(String id);
}
