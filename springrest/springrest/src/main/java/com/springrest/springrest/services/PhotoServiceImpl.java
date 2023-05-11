package com.springrest.springrest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.springrest.springrest.dao.PhotoDao;
import com.springrest.springrest.entities.Photo;

@Service
public class PhotoServiceImpl implements PhotoService {
	@Autowired
	private PhotoDao photoDao;

	public PhotoServiceImpl()
	{
	
	}
	@Override
	public List<Photo> getPhotos() {
		// TODO Auto-generated method stub
		return photoDao.findAll();
	}

	@SuppressWarnings("deprecation")
	@Override
	public Photo getPhoto(long photoId) {
		return photoDao.getOne(photoId);
	}

	@Override
	public Photo addPhoto(Photo photo) {
		// TODO Auto-generated method stub
        photoDao.save(photo);
		
		return photo;
	}
	@Override
	public void deletePhoto(long parseLong) {
		// TODO Auto-generated method stub
		@SuppressWarnings("deprecation")
		Photo entity=photoDao.getOne(parseLong);
		
		photoDao.delete(entity);
	}
	
	
	

}
