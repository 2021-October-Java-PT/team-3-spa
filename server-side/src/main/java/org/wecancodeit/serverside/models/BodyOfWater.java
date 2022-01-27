package org.wecancodeit.serverside.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class BodyOfWater {

    @Id
    @GeneratedValue
    private Long id;
    private String name;


    public BodyOfWater(){

    }

    public BodyOfWater (String name){
        this.name=name;
    }

    public Long getId() {

        return id;

    }

    public String getName(){
        return name;

    }
}
