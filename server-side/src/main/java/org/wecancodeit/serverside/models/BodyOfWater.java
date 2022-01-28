package org.wecancodeit.serverside.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class BodyOfWater {

    @Id
    @GeneratedValue
    private Long id;
    private String bodyOfWater;
    private String bodyOfWaterDescription;
    private String waterBodyMapUrl;


    public BodyOfWater(){

    }

    public BodyOfWater (String bodyOfWater, String bodyOfWaterDescription, String waterBodyMapUrl){
        this.bodyOfWater = bodyOfWater;
        this.bodyOfWaterDescription = bodyOfWaterDescription;
        this.waterBodyMapUrl = waterBodyMapUrl;
    }

    public Long getId() {

        return id;

    }

    public String getBodyOfWater(){
        return bodyOfWater;

    }

    public String getBodyOfWaterDescription(){
        return bodyOfWaterDescription;
    }

    public String getWaterBodyMapUrl(){
        return waterBodyMapUrl;
    }
}
