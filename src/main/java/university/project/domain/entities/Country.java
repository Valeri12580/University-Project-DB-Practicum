package university.project.domain.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;

@NoArgsConstructor
@Data
@Entity
@Table
@AllArgsConstructor
public class Country  extends BaseEntity{
    private String name;
}
