package university.project.init;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import university.project.domain.entities.Profession;
import university.project.repositories.ProfessionRepository;

@Component
@Order(3)
public class ProfessionInit implements CommandLineRunner {

    private ProfessionRepository professionRepository;

    @Autowired
    public ProfessionInit(ProfessionRepository professionRepository) {
        this.professionRepository = professionRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        Profession programmer=new Profession("Java Backend Developer");
        Profession cleaner=new Profession("WC cleaner");

        professionRepository.saveAll(List.of(programmer,cleaner));
    }
}
