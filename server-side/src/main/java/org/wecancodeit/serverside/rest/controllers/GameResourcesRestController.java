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
import org.wecancodeit.serverside.models.GameResources;
import org.wecancodeit.serverside.repositories.GameResourcesRepository;

import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class GameResourcesRestController {

    @Resource
    private GameResourcesRepository gameRepo;

    @GetMapping("/api/game-resources")
    public Collection<GameResources> getGameResources(){
        return (Collection<GameResources>) gameRepo.findAll();
    }

    @GetMapping("/api/game-resources/{id}")
    public Optional<GameResources> getGameResources(@PathVariable Long id){
        return gameRepo.findById(id);
    }

    @PostMapping("/api/game-resources/add-resource")
    public Collection<GameResources> addGameResource(@RequestBody String body, @PathVariable Long id) throws JSONException {
        JSONObject newGameResource = new JSONObject(body);
        String name = newGameResource.getString("name");
        String gamesToPlayUrl = newGameResource.getString("gamesToPlayUrl");
        String gameWalkThroughVid = newGameResource.getString("gameWalkThroughVid");
        Optional<GameResources> gameResourcesToAdopt = gameRepo.findByName(name);

        if (gameResourcesToAdopt.isEmpty()) {
            GameResources gameResourcesToAdd = new GameResources(name,gamesToPlayUrl,gameWalkThroughVid);
            gameRepo.save(gameResourcesToAdd);
        }

        return (Collection<GameResources>) gameRepo.findAll();
    }



}
