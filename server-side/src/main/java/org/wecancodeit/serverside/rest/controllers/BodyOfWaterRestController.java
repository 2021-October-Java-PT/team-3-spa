package org.wecancodeit.serverside.rest.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.models.BodyOfWater;
import org.wecancodeit.serverside.repositories.BodyOfWaterRepo;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class BodyOfWaterRestController {

    @Resource
    private BodyOfWaterRepo bodyOfWaterRepo;

    @GetMapping("/api/bodies")
    public Collection<BodyOfWater> getIslands(){
        return (Collection<BodyOfWater>) bodyOfWaterRepo.findAll();
    }

    @GetMapping("/api/bodies/{id}")
    public Optional<BodyOfWater> getBodyOfWater(@PathVariable Long id){
        return bodyOfWaterRepo.findById(id);
    }
}
