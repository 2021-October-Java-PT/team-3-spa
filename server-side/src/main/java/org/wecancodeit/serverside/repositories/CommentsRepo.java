package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.BodyOfWater;

public interface Comments extends CrudRepository<Comments, Long> {
    Optional<Comments> findbyName(String commentsName);
}
