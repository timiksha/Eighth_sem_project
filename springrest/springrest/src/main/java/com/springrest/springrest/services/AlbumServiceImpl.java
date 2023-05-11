package com.springrest.springrest.services;

import java.util.List;
//import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.AlbumDao;

import com.springrest.springrest.entities.Album;

@Service
public class AlbumServiceImpl implements AlbumService{

	@Autowired
	private AlbumDao albumDao;
	

	//List<Album> list;
	
	public AlbumServiceImpl()
	{
		//list= new ArrayList<>();
		//list.add(new Album(145, "https://cdn.rawgit.com/felix-halim/competitive-programming/master/codejam/india06/2.4-awards/47_david.jpg ", "Annual Fest "));
			//list.add(new Album(234, "https://static.flickr.com/48/126899555_416b6ffe20_o.jpg","Google Code Jam 2021 achievers"));
	}
	@Override
	public List<Album> getAlbums() {
		return albumDao.findAll();
	}

	@SuppressWarnings("deprecation")
	@Override
	public Album getAlbum(Long albumId) {

		return albumDao.getOne(albumId);
	}

	@Override
	public Album addAlbum(Album album) {
	//list.add(album);
		albumDao.save(album);
		
		return album;
	}
	@Override
	public Album updateAlbum(Album album) {
		// TODO Auto-generated method stub
		albumDao.save(album);
		return album;
	}
	@Override
	public void deleteAlbum(long parseLong) {
		// TODO Auto-generated method stub
		@SuppressWarnings("deprecation")
		Album entity=albumDao.getOne(parseLong);
		
		albumDao.delete(entity);
		
	}

}
