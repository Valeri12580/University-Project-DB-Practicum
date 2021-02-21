package university.project.domain.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User  extends BaseEntity{
    private String firstName;
    private String lastName;
    private int age;
    private String phoneNumber;

    @ManyToOne
    @JoinColumn(name = "profession_id",referencedColumnName = "id")
    private Profession profession;

    @ManyToOne
    @JoinColumn(name = "city_id",referencedColumnName = "id")
    private City city;
}
