package org.wecancodeit.serverside.rest.controllers;

import javax.annotation.Resource;

import org.json.JSONObject;
import org.json.JSONException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.models.BoredResources;
import org.wecancodeit.serverside.repositories.BoredResourcesRepository;

import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class BoredResourcesRestController {

    @Resource
    private BoredResourcesRepository boredRepo;

    @GetMapping("/api/bored-resources")
    public Collection<BoredResources> getBoredResources(){
        return (Collection<BoredResources>) boredRepo.findAll();
    }

    @GetMapping("/api/bored-resources/{id}")
    public Optional<BoredResources> getBoredResources(@PathVariable Long id){
        return boredRepo.findById(id);
    }

    @PostMapping("/api/bored-resources/add-resource")
    public Collection<BoredResources> addBoredResource(@RequestBody String body, @PathVariable Long id) throws JSONException {
        JSONObject newBoredResource = new JSONObject(body);
        String name = newBoredResource.getString("name");
        String gamesToPlayUrl = newBoredResource.getString("gamesToPlayUrl");
        Optional<BoredResources> boredResourcesToAdopt = boredRepo.findByName(name);

        if (boredResourcesToAdopt.isEmpty()) {
            BoredResources boredResourcesToAdd = new BoredResources(name,gamesToPlayUrl);
            boredRepo.save(boredResourcesToAdd);
        }

        return (Collection<BoredResources>) boredRepo.findAll();
    }



}
