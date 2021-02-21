package university.project.services.interfaces;

import java.util.*;

import university.project.domain.dtos.service.ProfessionServiceModel;

public interface ProfessionService {

    List<ProfessionServiceModel>findAllProfessions();
}
