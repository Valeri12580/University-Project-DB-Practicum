package university.project.domain.dtos.service;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class UserServiceModel extends BaseServiceModel {

    private String firstName;
    private String lastName;
    private int age;
    private String phoneNumber;

    private ProfessionServiceModel profession;

    private CityServiceModel city;
}
