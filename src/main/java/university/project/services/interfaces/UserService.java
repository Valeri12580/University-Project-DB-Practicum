package university.project.services.interfaces;

import java.util.*;

import university.project.domain.dtos.service.UserServiceModel;

public interface UserService {

    List<UserServiceModel>findAllUsers();

    void addUser(String firstName, String lastName, int age, String phoneNumber, String city, String profession);

    void deleteWorkerById(String id);
}
