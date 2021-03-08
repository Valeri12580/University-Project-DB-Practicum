package university.project.domain.entities;

import lombok.*;

import java.util.*;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@NoArgsConstructor
@Data
@Entity
@Table
@RequiredArgsConstructor
public class Profession  extends BaseEntity{


    @NonNull
    private String name;

    @OneToMany(mappedBy = "profession",cascade = CascadeType.REMOVE,orphanRemoval = true)
    private List<User>users;
}
