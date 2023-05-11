package com.springrest.springrest.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class CourseVideo {

	    @Id
		private long id;
		private String title;
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		public String getTitle() {
			return title;
		}
		public void setTitle(String title) {
			this.title = title;
		}
		@Override
		public String toString() {
			return "CourseVideo [id=" + id + ", title=" + title + "]";
		}
		public CourseVideo(long id, String title) {
			super();
			this.id = id;
			this.title = title;
		}
		public CourseVideo() {
			super();
			// TODO Auto-generated constructor stub
		}
}
