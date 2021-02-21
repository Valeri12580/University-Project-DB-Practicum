package university.project.init;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import university.project.domain.entities.City;
import university.project.domain.entities.Profession;
import university.project.domain.entities.User;
import university.project.repositories.CityRepository;
import university.project.repositories.ProfessionRepository;
import university.project.repositories.UserRepository;

@Component
@Order(4)
public class WorkerInit implements CommandLineRunner {
    private UserRepository userRepository;
    private ProfessionRepository professionRepository;
    private CityRepository cityRepository;

    @Autowired
    public WorkerInit(UserRepository userRepository, ProfessionRepository professionRepository, CityRepository cityRepository) {
        this.userRepository = userRepository;
        this.professionRepository = professionRepository;
        this.cityRepository = cityRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        Profession programmer=this.professionRepository.findByName("Programmer");
        Profession cleaner=this.professionRepository.findByName("WC Cleaner");
        City plovdiv=this.cityRepository.findByName("Plovdiv");
        City usa=this.cityRepository.findByName("USA");
        User valeri=new User("Valeri","Stoqnov",20,"0877160366",programmer,plovdiv);
        User krasimir=new User("Krasimir","Enchev",21,"0877169366",cleaner,usa);

        this.userRepository.saveAll(List.of(valeri,krasimir));
    }
}
