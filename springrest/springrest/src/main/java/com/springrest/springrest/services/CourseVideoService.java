package com.springrest.springrest.services;

import java.util.List;


import com.springrest.springrest.entities.CourseVideo;

public interface CourseVideoService {
public List<CourseVideo> getCourseVideos();
	
	public CourseVideo getCourseVideo(Long courseVideoId);
public 	CourseVideo addCourseVideo(CourseVideo courseVideo);
public 	CourseVideo updateCourseVideo(CourseVideo courseVideo);
}
