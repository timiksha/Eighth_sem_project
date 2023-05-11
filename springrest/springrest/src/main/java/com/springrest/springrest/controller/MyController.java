package com.springrest.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.springrest.springrest.entities.Album;
import com.springrest.springrest.entities.Batch;
import com.springrest.springrest.services.AlbumService;
import com.springrest.springrest.services.BatchService;
import com.springrest.springrest.services.CourseLogoService;
import com.springrest.springrest.entities.Course;
import com.springrest.springrest.entities.CourseLogo;
import com.springrest.springrest.entities.CourseVideo;
import com.springrest.springrest.entities.Photo;
import com.springrest.springrest.entities.Query;
import com.springrest.springrest.services.CourseService;
import com.springrest.springrest.services.CourseVideoService;
import com.springrest.springrest.services.PhotoService;
import com.springrest.springrest.services.QueryService;

@RestController
@CrossOrigin(origins = "*")
public class MyController {
	 @Autowired
	 private CourseLogoService courseLogoService; 
	 
    @Autowired
	private CourseService courseService; //courseService is a variable of the interface
   
    @Autowired(required = false)
   	private AlbumService albumService;
    
    @Autowired
   	private PhotoService photoService;
    
    @Autowired
   	private CourseVideoService courseVideoService;
    
    @Autowired
	 private BatchService batchService; 
    
    @Autowired
	 private QueryService queryService; 
    
// for the image in the courses
@GetMapping("/courselogos")
public List<CourseLogo> getCourseLogos()
{
	return this.courseLogoService.getCourseLogos();
}

@GetMapping("/courselogos/{courseLogoId}")
public Course getCourseLogo(@PathVariable String courseLogoId)
{
	return this.courseService.getCourse(Long.parseLong(courseLogoId));
}

@PostMapping("/courselogos")
public CourseLogo addCourse(@RequestBody CourseLogo courseLogo)
{
return this.courseLogoService.addCourseLogo(courseLogo);	
}

    // get the courses
	@GetMapping("/courses")
	public List<Course> getCourses(){
		return this.courseService.getCourses(); 
	}
	
	@GetMapping("/courses/{courseId}")
	public Course getCourse(@PathVariable String courseId)
	{
		return this.courseService.getCourse(Long.parseLong(courseId));
	}
	
	//course add
	@PostMapping("/courses")
	public Course addCourse(@RequestBody Course course)
	{
	return this.courseService.addCourse(course);	
	}
	
	//update the course using PUT request
	@PutMapping("/courses")
	public Course updateCourse(@RequestBody Course course)
	{
      return this.courseService.updateCourse(course); 
	}
	
	//delete the course
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId)
	{
		try {
			this.courseService.deleteCourse(Long.parseLong(courseId));
			return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e)
			{
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
	
	// for albums and its covers
	@GetMapping("/albums")
	public List<Album> getAlbums(){
		return this.albumService.getAlbums(); 
	}
	
	@GetMapping("/albums/{albumId}")
	public Album getAlbum(@PathVariable Long albumId)
	{
		return this.albumService.getAlbum(albumId);
	}
	
	@PostMapping("/albums")
	public Album addAlbum(@RequestBody Album album)
	{
	return this.albumService.addAlbum(album);	
	}
	
	@PutMapping("/albums")
	public Album updateAlbum(@RequestBody Album album)
	{
      return this.albumService.updateAlbum(album); 
	}
	
	@DeleteMapping("/albums/{albumId}")
	public ResponseEntity<HttpStatus> deleteAlbum(@PathVariable String albumId)
	{
		try {
			this.albumService.deleteAlbum(Long.parseLong(albumId));
			return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e)
			{
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
	
// for photos inside the album	
@GetMapping("/albums/photos")
public List<Photo> getPhotos(){
	return this.photoService.getPhotos(); 
}

@GetMapping("/albums/photos/{photoId}")
public Photo getPhoto(@PathVariable String photoId)
{
	return this.photoService.getPhoto(Long.parseLong(photoId));
}

@PostMapping("/albums/photos")
public 	Photo addPhoto(@RequestBody Photo photo)
{
return this.photoService.addPhoto(photo);	
}

//Course videos
@GetMapping("/coursevideos")
public List<CourseVideo> getCourseVideos()
{
	return this.courseVideoService.getCourseVideos();
}

@GetMapping("/coursevideos/{courseVideoId}")
public CourseVideo getCourseVideo(@PathVariable String courseVideoId)
{
	return this.courseVideoService.getCourseVideo(Long.parseLong(courseVideoId));
}

@PostMapping("/coursevideos")
public CourseVideo addCourseVideo(@RequestBody CourseVideo courseVideo)
{
return this.courseVideoService.addCourseVideo(courseVideo);	
}

@PutMapping("/coursevideos")
public CourseVideo updateCourseVideo(@RequestBody CourseVideo courseVideo)
{
  return this.courseVideoService.updateCourseVideo(courseVideo); 
}

//for batches
@GetMapping("/batches")
public List<Batch> getBatches(){
	return this.batchService.getBatches(); 
}

@GetMapping("/batches/{batchId}")
public Batch getBatch(@PathVariable String batchId)
{
	return this.batchService.getBatch(Long.parseLong(batchId));
}

@PostMapping("/batches")
public Batch addBatch(@RequestBody Batch batch)
{
return this.batchService.addBatch(batch);	
}

//for queries
@GetMapping("/queries")
public List<Query> getQueries(){
	return this.queryService.getQueries(); 
}

@GetMapping("/queries/{queryEmail}")
public Query getQuery(@PathVariable String queryEmail)
{
	return this.queryService.getQuery(queryEmail);
}

@PostMapping("/queries")
public Query addQuery(@RequestBody Query query)
{
return this.queryService.addQuery(query);	
}

@PutMapping("/queries")
public Query updateQuery(@RequestBody Query query)
{
  return this.queryService.updateQuery(query); 
}

@DeleteMapping("/queries/{queryId}")
public ResponseEntity<HttpStatus> deleteQuery(@PathVariable String queryId)
{
	try {
		this.queryService.deleteQueryByEmail(queryId);
		return new ResponseEntity<>(HttpStatus.OK);
	}catch(Exception e)
		{
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}






