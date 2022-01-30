package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.Comments;

import java.util.Optional;


public interface CommentsRepo extends CrudRepository<Comments, Long> {
    //This was causing a problem, review before uncommenting!
//    Optional<Comments> findByName(String commentsName);
}
