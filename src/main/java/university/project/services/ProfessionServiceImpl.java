package university.project.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import university.project.domain.dtos.service.ProfessionServiceModel;
import university.project.domain.entities.Profession;
import university.project.repositories.ProfessionRepository;
import university.project.services.interfaces.ProfessionService;

import java.util.List;


@Service
public class ProfessionServiceImpl implements ProfessionService {
    private ProfessionRepository professionRepository;
    private ModelMapper modelMapper;

    @Autowired
    public ProfessionServiceImpl(ProfessionRepository professionRepository, ModelMapper modelMapper) {
        this.professionRepository = professionRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<ProfessionServiceModel> findAllProfessions() {
        List<ProfessionServiceModel> professions = List.of(this.modelMapper.map(this.professionRepository.findAll(), ProfessionServiceModel[].class));
        return professions;
    }

    @Override
    public void saveProfession(String name) {
        this.professionRepository.save(new Profession(name));
    }

    @Override
    public void deleteCountryById(String id) {
        this.professionRepository.deleteById(id);
    }
}
