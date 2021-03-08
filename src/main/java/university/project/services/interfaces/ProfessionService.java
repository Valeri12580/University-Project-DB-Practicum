package university.project.services.interfaces;

import java.util.*;

import university.project.domain.dtos.service.ProfessionServiceModel;

public interface ProfessionService {

    List<ProfessionServiceModel>findAllProfessions();

    void saveProfession(String name);

    void deleteCountryById(String id);
}
