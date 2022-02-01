package org.wecancodeit.serverside.rest.controllers;

import java.util.Collection;
import java.util.Optional;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.models.NoaaResources;
import org.wecancodeit.serverside.repositories.NoaaResourcesRepository;

@RestController
@CrossOrigin
public class NoaaResourcesRestController {

    @Resource
    private NoaaResourcesRepository noaaResourcesRepo;

    @GetMapping("/api/noaa-resources")
    public Collection<NoaaResources> getNoaaResources(){
        return (Collection<NoaaResources>) noaaResourcesRepo.findAll();
    }

    @GetMapping("/api/noaa-resources/{id}")
    public Optional<NoaaResources> getNoaaResources(@PathVariable Long id){
        return noaaResourcesRepo.findById(id);
    }

    @PostMapping("/api/noaa-resources/add-resource")
    public Collection<NoaaResources> addNoaaResources(@RequestBody String body, @PathVariable Long id) throws JSONException {
        JSONObject newNoaaResource = new JSONObject(body);
        String name = newNoaaResource.getString("name");
        String authorName = newNoaaResource.getString("authorName");
        String booksToReadLink = newNoaaResource.getString("booksToReadLink");
        Optional<NoaaResources> noaaResourcesToAdopt = noaaResourcesRepo.findByName(name);

        if (noaaResourcesToAdopt.isEmpty()) {
            NoaaResources noaaResourcesToAdd = new NoaaResources(name,authorName,booksToReadLink);
            noaaResourcesRepo.save(noaaResourcesToAdd);
        }

        return (Collection<NoaaResources>) noaaResourcesRepo.findAll();
    }

   

}
