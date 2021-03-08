package university.project.domain.dtos.binding;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class WorkerBindingModel {
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private int age;
    private String city;
    private String profession;
}
