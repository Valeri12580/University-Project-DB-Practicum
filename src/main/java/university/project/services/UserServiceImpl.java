package university.project.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import university.project.domain.dtos.service.UserServiceModel;
import university.project.repositories.UserRepository;
import university.project.services.interfaces.UserService;

import java.util.List;

@Service
public class UserServiceImpl  implements UserService {
    private UserRepository userRepository;
    private ModelMapper modelMapper;

    public UserServiceImpl(UserRepository userRepository, ModelMapper modelMapper) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
    }

    @Autowired


    @Override
    public List<UserServiceModel> findAllUsers() {
        List<UserServiceModel> users = List.of(this.modelMapper.map(userRepository.findAll(), UserServiceModel[].class));
        return users;
    }
}
