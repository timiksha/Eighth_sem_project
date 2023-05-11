package com.springrest.springrest.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class Batch {
	@Id
	private long id;
	private String courseName;
	private String batch;
	private String timing;
	private String finalPresentation;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	

	public String getBatch() {
		return batch;
	}
	public void setBatch(String batch) {
		this.batch = batch;
	}
	
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public String getTiming() {
		return timing;
	}
	public void setTiming(String timing) {
		this.timing = timing;
	}
	public String getFinalPresentation() {
		return finalPresentation;
	}
	public void setFinalPresentation(String finalPresentation) {
		this.finalPresentation = finalPresentation;
	}
	
	
	@Override
	public String toString() {
		return "Batch [id=" + id + ", courseName=" + courseName + ", batch=" + batch + ", timing=" + timing
				+ ", finalPresentation=" + finalPresentation + "]";
	}
	public Batch(long id,String courseName, String batch, String timing, String finalPresentation) {
		super();
		this.id = id;
		this.courseName=courseName;
		this.batch = batch;
		this.timing = timing;
		this.finalPresentation = finalPresentation;
	}
	public Batch() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
