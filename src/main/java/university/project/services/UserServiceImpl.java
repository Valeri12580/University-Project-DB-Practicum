package university.project.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import university.project.domain.dtos.service.UserServiceModel;
import university.project.domain.entities.City;
import university.project.domain.entities.Profession;
import university.project.domain.entities.User;
import university.project.repositories.CityRepository;
import university.project.repositories.ProfessionRepository;
import university.project.repositories.UserRepository;
import university.project.services.interfaces.UserService;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    private ProfessionRepository professionRepository;
    private CityRepository cityRepository;
    private ModelMapper modelMapper;

    public UserServiceImpl(UserRepository userRepository, ProfessionRepository professionRepository, CityRepository cityRepository, ModelMapper modelMapper) {
        this.userRepository = userRepository;
        this.professionRepository = professionRepository;
        this.cityRepository = cityRepository;
        this.modelMapper = modelMapper;
    }

    @Autowired


    @Override
    public List<UserServiceModel> findAllUsers() {
        List<UserServiceModel> users = List.of(this.modelMapper.map(userRepository.findAll(), UserServiceModel[].class));
        return users;
    }

    @Override
    public void addUser(String firstName, String lastName, int age, String phoneNumber, String city, String profession) {
        Profession professionEntity = professionRepository.findByName(profession);
        City cityEntity = this.cityRepository.findByName(city);
        this.userRepository.save(new User(firstName, lastName, age, phoneNumber, professionEntity, cityEntity));
    }

    @Override
    public void deleteWorkerById(String id) {
        this.userRepository.deleteById(id);
    }

    @Override
    public List<UserServiceModel> findWorkersByCriteria(String professionCriteria, String cityCriteria) {
        List<User> result;
        if (!professionCriteria.equals("") && !cityCriteria.equals("")) {
            result = this.userRepository.findAllByAndCity_NameAndProfession_Name(cityCriteria, professionCriteria);
        } else if (cityCriteria.equals("")) {
            result = userRepository.findAllByProfession_Name(professionCriteria);
        } else {
            result = userRepository.findAllByCity_Name(cityCriteria);
        }
        return List.of(this.modelMapper.map(result, UserServiceModel[].class));
    }
}
