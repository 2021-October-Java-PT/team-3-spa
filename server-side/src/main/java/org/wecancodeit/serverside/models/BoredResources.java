package org.wecancodeit.serverside.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class BoredResources {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String gamesToPlayUrl;

    public BoredResources(){

    }
    public BoredResources(String name, String gamesToPlayUrl){
        this.name = name;
        this.gamesToPlayUrl = gamesToPlayUrl;
    }

    public Long getId() {
        return id;
    }

    public String name(){
        return name;
    }

    public String getGamesToPlayUrl() {
        return gamesToPlayUrl;
    }


}
