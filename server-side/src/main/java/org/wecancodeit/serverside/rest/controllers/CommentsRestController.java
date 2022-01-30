package org.wecancodeit.serverside.rest.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
//import org.wecancodeit.serverside.models.BodyOfWater;
import org.wecancodeit.serverside.models.Comments;
//import org.wecancodeit.serverside.repositories.BodyOfWaterRepo;
import org.wecancodeit.serverside.repositories.CommentsRepo;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class CommentsRestController {

    @Resource
    private CommentsRepo commentsRepo;

    @GetMapping("/api/comments")
    public Collection<Comments> getComments(){
        return (Collection<Comments>) commentsRepo.findAll();
    }



}
