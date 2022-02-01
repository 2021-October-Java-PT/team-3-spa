package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.BoredResources;

import java.util.Optional;


public interface BoredResourcesRepository extends CrudRepository<BoredResources, Long> {
    Optional<BoredResources> findByName(String name);
}