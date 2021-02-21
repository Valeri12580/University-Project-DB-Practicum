package university.project.domain.dtos.service;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class CityServiceModel  extends BaseServiceModel{
    private String name;
    private CountryServiceModel country;
}
