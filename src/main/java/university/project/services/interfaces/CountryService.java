package university.project.services.interfaces;

import university.project.domain.dtos.service.CountryServiceModel;

import java.util.*;

public interface CountryService {

    List<CountryServiceModel>findAllCountries();

     void saveCountry(String name);

    void deleteCountryById(String id);

    void updateCountry(String id, String name);

}
