package com.springrest.springrest.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class Query {
	@Id
    private String email;
	
	private String name;
	
	private String mobile;
    private String queryName;
    private String followUp;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getQueryName() {
		return queryName;
	}
	public void setQueryName(String queryName) {
		this.queryName = queryName;
	}
	public String getFollowUp() {
		return followUp;
	}
	public void setFollowUp(String followUp) {
		this.followUp = followUp;
	}
	@Override
	public String toString() {
		return "Query [  name=" + name + ", email=" + email + ", mobile=" + mobile + ", queryName="
				+ queryName + ", followUp=" + followUp + "]";
	}
	public Query(String name, String email, String mobile, String queryName, String followUp) {
		super();
		
		this.name = name;
		this.email = email;
		this.mobile = mobile;
		this.queryName = queryName;
		this.followUp = followUp;
	}
	public Query() {
		super();
		// TODO Auto-generated constructor stub
	}
    
}
