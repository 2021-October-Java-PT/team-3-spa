package org.wecancodeit.serverside.models;

import org.springframework.data.annotation.Id;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;

@Entity
public class PopularItem {

    @Id
    @GeneratedValue
    private Long id;




}
