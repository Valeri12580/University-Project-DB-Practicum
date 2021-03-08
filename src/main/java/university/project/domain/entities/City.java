package university.project.domain.entities;

import lombok.*;

import javax.persistence.*;

import java.util.*;

@NoArgsConstructor
@Data
@RequiredArgsConstructor
@Entity
@Table

public class City extends BaseEntity {

    @NonNull
    private String name;


    @NonNull
    @ManyToOne
    @JoinColumn(name = "country_id",referencedColumnName = "id")
    private Country country;

    @OneToMany(mappedBy = "city",cascade = {CascadeType.REMOVE},orphanRemoval = true)
    private List<User>users;
}
