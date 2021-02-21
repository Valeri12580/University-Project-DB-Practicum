package university.project.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import university.project.domain.dtos.service.CountryServiceModel;
import university.project.repositories.CountryRepository;
import university.project.services.interfaces.CountryService;

import java.util.List;

@Service
public class CountryServiceImpl implements CountryService {
    private CountryRepository countryRepository;
    private ModelMapper modelMapper;

    @Autowired
    public CountryServiceImpl(CountryRepository countryRepository, ModelMapper modelMapper) {
        this.countryRepository = countryRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<CountryServiceModel> findAllCountries() {
        List<CountryServiceModel> countries = List.of(this.modelMapper.map(this.countryRepository.findAll(), CountryServiceModel[].class));
        return countries;
    }
}
