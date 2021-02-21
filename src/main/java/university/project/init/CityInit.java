package university.project.init;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import university.project.domain.entities.City;
import university.project.domain.entities.Country;
import university.project.repositories.CityRepository;
import university.project.repositories.CountryRepository;

import java.util.List;

@Component
@Order(2)
public class CityInit implements CommandLineRunner {
    private CityRepository cityRepository;
    private CountryRepository countryRepository;
    @Autowired
    public CityInit(CityRepository cityRepository, CountryRepository countryRepository) {
        this.cityRepository = cityRepository;
        this.countryRepository = countryRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        Country bulgaria = this.countryRepository.findByName("Bulgaria");
        Country usa=this.countryRepository.findByName("USA");

        City plovdiv=new City("Plovdiv",bulgaria);
        City york=new City("New York",usa);

        this.cityRepository.saveAll(List.of(plovdiv,york));

    }
}
