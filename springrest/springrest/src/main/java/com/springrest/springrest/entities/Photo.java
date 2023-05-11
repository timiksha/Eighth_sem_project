package com.springrest.springrest.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Photo {
	
	
	@Id
    private long id;
    private String photoName;
    private String albumTitle;

    @Override
	public String toString() {
		return "Photo [id=" + id + ", photoName=" + photoName + ", albumTitle=" + albumTitle + "]";
	}

	public Photo(long id, String photoName, String albumTitle) {
		super();
		this.id = id;
		this.photoName = photoName;
		this.albumTitle = albumTitle;
	}

	public Photo() {
		super();
		// TODO Auto-generated constructor stub
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getPhotoName() {
		return photoName;
	}

	public void setPhotoName(String photoName) {
		this.photoName = photoName;
	}

	public String getAlbumTitle() {
		return albumTitle;
	}

	public void setAlbumTitle(String albumTitle) {
		this.albumTitle = albumTitle;
	}
	

}
