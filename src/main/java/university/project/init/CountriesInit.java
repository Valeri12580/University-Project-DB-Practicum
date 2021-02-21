package university.project.init;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import university.project.domain.entities.Country;
import university.project.repositories.CountryRepository;

import java.util.List;

@Component
@Order(1)
public class CountriesInit implements CommandLineRunner {
    private CountryRepository countryRepository;

    @Autowired
    public CountriesInit(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        Country bulgaria = new Country("Bulgaria");
        Country usa = new Country("USA");

        countryRepository.saveAll(List.of(bulgaria, usa));
    }
}
