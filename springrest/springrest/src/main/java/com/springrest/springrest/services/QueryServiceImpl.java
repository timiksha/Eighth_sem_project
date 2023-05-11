package com.springrest.springrest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.QueryDao;

import com.springrest.springrest.entities.Query;
@Service
public class QueryServiceImpl implements QueryService{
	@Autowired
	private QueryDao queryDao;

	public QueryServiceImpl()
	{
	
	}
	@Override
	public List<Query> getQueries() {
		// TODO Auto-generated method stub
		return queryDao.findAll();
	}
	

	@SuppressWarnings("deprecation")
	@Override
	public Query getQuery(String queryEmail) {
		// TODO Auto-generated method stub
		return queryDao.getOne(queryEmail);
	}

	@Override
	public Query updateQuery(Query query) {
		// TODO Auto-generated method stub
		queryDao.save(query);
		return query;
	}

	@Override
	public void deleteQueryByEmail(String  queryEmail) {
		// TODO Auto-generated method stub
		@SuppressWarnings("deprecation")
		Query entity=queryDao.getOne(queryEmail);
		
		queryDao.delete(entity);
		
	}

	@Override
	public Query addQuery(Query query) {
		// TODO Auto-generated method stub
	queryDao.save(query);
		
		return query;
	}

}
