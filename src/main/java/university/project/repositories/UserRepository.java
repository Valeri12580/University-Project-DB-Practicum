package university.project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import university.project.domain.entities.User;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

    List<User> findAllByAndCity_NameAndProfession_Name(String cityName, String professionName);
    List<User> findAllByCity_Name(String cityName);
    List<User> findAllByProfession_Name(String professionName);
}
