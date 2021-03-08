package university.project.domain.entities;

import lombok.*;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@NoArgsConstructor
@Data
@Entity
@Table
@RequiredArgsConstructor
public class Country extends BaseEntity {

    @NonNull
    private String name;

    @OneToMany(mappedBy = "country",cascade = {CascadeType.REMOVE},orphanRemoval = true)
    private List<City> city;
}
