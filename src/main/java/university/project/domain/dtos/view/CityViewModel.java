package university.project.domain.dtos.view;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class CityViewModel extends BaseViewModel {

    private String name;
    private String countryName;

}
