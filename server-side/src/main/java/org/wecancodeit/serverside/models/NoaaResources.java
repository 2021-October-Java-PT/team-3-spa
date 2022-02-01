package org.wecancodeit.serverside.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class NoaaResources {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String authorName;
    private String booksToReadLink;
    
    

    public NoaaResources(){

    }
    public NoaaResources(String name, String authorName, String booksToReadLink){
        this.name = name;
        this.authorName = authorName;
        this.booksToReadLink = booksToReadLink;
        
    }


    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAuthorName() {
        return authorName;
    }

    public String getBooksToReadLink(){
        return booksToReadLink;
    }

}