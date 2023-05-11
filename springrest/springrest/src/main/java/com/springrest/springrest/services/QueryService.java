package com.springrest.springrest.services;

import java.util.List;

import com.springrest.springrest.entities.Query;

public interface QueryService {
public List<Query> getQueries();
	
	public Query getQuery(String queryEmail);
public 	Query addQuery(Query query);
public Query updateQuery(Query query);
public void deleteQueryByEmail(String queryEmail);
}
