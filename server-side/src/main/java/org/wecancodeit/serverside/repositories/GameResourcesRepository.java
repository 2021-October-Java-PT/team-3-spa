package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.GameResources;

import java.util.Optional;


public interface GameResourcesRepository extends CrudRepository<GameResources, Long> {
    Optional<GameResources> findByName(String name);
}