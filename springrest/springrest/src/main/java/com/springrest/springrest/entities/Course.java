package com.springrest.springrest.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Course {
    @Id
	private long id;
	private String title;
	private String description;
	private String age;
	private String hours;
	private String fees;
	
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
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getHours() {
		return hours;
	}
	public void setHours(String hours) {
		this.hours = hours;
	}
	public String getFees() {
		return fees;
	}
	public void setFees(String fees) {
		this.fees = fees;
	}
	
	@Override
	public String toString() {
		return "Course [id=" + id + ", title=" + title + ", description=" + description + ", age=" + age + ", hours="
				+ hours + ", fees=" + fees + "]";
	}
	public Course(long id, String title, String description, String age, String hours, String fees) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.age = age;
		this.hours = hours;
		this.fees = fees;
		
	}
	public Course() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
