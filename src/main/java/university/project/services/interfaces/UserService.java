package university.project.services.interfaces;

import java.util.*;

import university.project.domain.dtos.service.UserServiceModel;

public interface UserService {

    List<UserServiceModel>findAllUsers();
}
