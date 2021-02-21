package university.project.domain.dtos.view;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserViewModel {
    private String firstName;
    private String lastName;
    private int age;
    private String phoneNumber;

    private String professionName;

    private CityViewModel city;
}
