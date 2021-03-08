package university.project.domain.dtos.binding;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class CityBindingModel {
    private String cityName;
    private String countryName;
}
