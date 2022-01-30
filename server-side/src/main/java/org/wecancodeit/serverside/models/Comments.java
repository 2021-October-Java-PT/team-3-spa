package org.wecancodeit.serverside.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Comments {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String comments;

    public Comments(){

    }
    public Comments(String title,String comments){
        this.title = title;
        this.comments = comments;
    }

    public String getTitle() {
        return title;
    }

    public Long getId() {
        return id;
    }

    public String getComments() {
        return comments;
    }

    public boolean equals(Object object) {
        if (this == object) return true;
        if (object == null || getClass() != object.getClass()) return false;
        if (!super.equals(object)) return false;
        Comments comments = (Comments) object;
        return java.util.Objects.equals(id, comments.id);
    }

    public int hashCode() {
        return Objects.hash(super.hashCode(), id);
    }

}
