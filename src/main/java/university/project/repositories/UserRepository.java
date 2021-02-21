package university.project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import university.project.domain.entities.User;

@Repository
public interface UserRepository  extends JpaRepository<User,String> {
}
