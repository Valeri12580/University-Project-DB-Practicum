package university.project.domain.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@NoArgsConstructor
@Data
@Entity
@Table
public class City extends BaseEntity {

    private String name;


    @ManyToOne
    @JoinColumn(name = "country_id",referencedColumnName = "id")
    private Country country;
}
