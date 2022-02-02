package org.wecancodeit.serverside.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.NoaaResources;

public interface NoaaResourcesRepository extends CrudRepository<NoaaResources, Long>{
    Optional<NoaaResources> findByName(String name);

}
