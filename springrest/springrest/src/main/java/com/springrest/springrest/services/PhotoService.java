package com.springrest.springrest.services;

import java.util.List;

import com.springrest.springrest.entities.Photo;


public interface PhotoService {
public List<Photo> getPhotos();
	
	public Photo getPhoto(long photoId);
public 	Photo addPhoto(Photo photo);
public void deletePhoto(long parseLong);

}
