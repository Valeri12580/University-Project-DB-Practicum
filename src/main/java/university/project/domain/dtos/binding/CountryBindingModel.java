package university.project.domain.dtos.binding;

import lombok.Data;
import lombok.NoArgsConstructor;
import university.project.domain.dtos.service.BaseServiceModel;

@Data
@NoArgsConstructor
public class CountryBindingModel extends BaseServiceModel {
    private String id;
    private String name;
}
