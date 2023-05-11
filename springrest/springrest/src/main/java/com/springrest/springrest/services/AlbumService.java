package com.springrest.springrest.services;

import java.util.List;


import com.springrest.springrest.entities.Album;


public interface AlbumService {
	public List<Album> getAlbums();
	
	public Album getAlbum(Long albumId);
public 	Album addAlbum(Album album);
public 	Album updateAlbum(Album album);
public void deleteAlbum(long parseLong);



}
