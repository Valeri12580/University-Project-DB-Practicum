package university.project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import university.project.domain.entities.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country,String> {
}
