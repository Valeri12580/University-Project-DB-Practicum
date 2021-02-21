package university.project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import university.project.domain.entities.Country;
import university.project.domain.entities.Profession;

@Repository
public interface ProfessionRepository extends JpaRepository<Profession,String> {
    Profession findByName(String name);
}
