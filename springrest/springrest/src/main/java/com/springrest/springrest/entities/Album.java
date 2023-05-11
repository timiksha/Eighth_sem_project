package com.springrest.springrest.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Album {

	@Id
    private long id;
    
    private String title;
    private String coverPhoto;

    public Album() {
        super();
    }

    public Album(long id, String title, String coverPhoto) {
        super();
        this.id = id;
        this.title = title;
        this.coverPhoto = coverPhoto;
    }

    public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getCoverPhoto() {
		return coverPhoto;
	}

	public void setCoverPhoto(String coverPhoto) {
		this.coverPhoto = coverPhoto;
	}

	@Override
    public String toString() {
        return "Album [id=" + id + ", title=" + title + ", coverPhoto=" + coverPhoto + "]";
    }
}
