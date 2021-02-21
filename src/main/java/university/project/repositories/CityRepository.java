package university.project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import university.project.domain.entities.City;

@Repository
public interface CityRepository extends JpaRepository<City,String> {
}
