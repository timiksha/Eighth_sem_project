package com.springrest.springrest.services;

import java.util.List;


import com.springrest.springrest.entities.CourseLogo;

public interface CourseLogoService {
	public List<CourseLogo> getCourseLogos();
	public CourseLogo getCourseLogo(long courseLogoId);
	public CourseLogo addCourseLogo(CourseLogo courseLogo);

}
