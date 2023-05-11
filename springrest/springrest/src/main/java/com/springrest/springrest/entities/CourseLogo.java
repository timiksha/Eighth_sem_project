package com.springrest.springrest.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class CourseLogo {
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
		return "CourseLogo [id=" + id + ", title=" + title + "]";
	}
	public CourseLogo(long id, String title) {
		super();
		this.id = id;
		this.title = title;
	}
	public CourseLogo() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}