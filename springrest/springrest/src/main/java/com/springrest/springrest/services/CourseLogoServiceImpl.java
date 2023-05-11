package com.springrest.springrest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.springrest.springrest.dao.CourseLogoDao;
import com.springrest.springrest.entities.CourseLogo;

@Service
public class CourseLogoServiceImpl implements CourseLogoService{
	@Autowired
	private CourseLogoDao courseLogoDao;

	public CourseLogoServiceImpl()
	{
	}
	
	@Override
	public List<CourseLogo> getCourseLogos() {
		return courseLogoDao.findAll();
	}
	@SuppressWarnings("deprecation")
	@Override
	public CourseLogo getCourseLogo(long courseLogoId) {
		return courseLogoDao.getOne(courseLogoId);
	}

	@Override
	public CourseLogo addCourseLogo(CourseLogo courseLogo) {
		// TODO Auto-generated method stub

		courseLogoDao.save(courseLogo);
		
		return courseLogo;
	}	
}
