package com.springrest.springrest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseVideoDao;
import com.springrest.springrest.entities.CourseVideo;

@Service
public class CourseVideoServiceImpl implements CourseVideoService {

	@Autowired
	private CourseVideoDao courseVideoDao;

	public CourseVideoServiceImpl()
	{
	}
	
	@Override
	public List<CourseVideo> getCourseVideos() {
		// TODO Auto-generated method stub
		return courseVideoDao.findAll();
	}

	@SuppressWarnings("deprecation")
	@Override
	public CourseVideo getCourseVideo(Long courseVideoId) {
		// TODO Auto-generated method stub
		return courseVideoDao.getOne(courseVideoId);
	}

	@Override
	public CourseVideo addCourseVideo(CourseVideo courseVideo) {
		// TODO Auto-generated method stub

		courseVideoDao.save(courseVideo);
		
		return courseVideo;
	}

	@Override
	public CourseVideo updateCourseVideo(CourseVideo courseVideo) {
		// TODO Auto-generated method stub
		courseVideoDao.save(courseVideo);
		return courseVideo;
		}

}
