package com.springrest.springrest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.BatchDao;
import com.springrest.springrest.entities.Batch;
@Service
public class BatchServiceImpl implements BatchService {
	@Autowired
	private BatchDao batchDao;
	
	//List<Course> list;
	public BatchServiceImpl()
	{
	//	list= new ArrayList<>();
	//list.add(new Course(145, "Java Core ", " this course contains basic of java"));
	//	list.add(new Course(234, "Spring boot","creating rest api using spring boot"));
	}
	@Override
	public List<Batch> getBatches() {
		// TODO Auto-generated method stub
		return batchDao.findAll();
	}
	
	@Override
	public Batch addBatch(Batch batch) {
	//	list.add(course);
		
		batchDao.save(batch);
		
		return batch;
	}
	@SuppressWarnings("deprecation")
	@Override
	public Batch getBatch(Long batchId) {
		// TODO Auto-generated method stub
		return batchDao.getOne(batchId);
	}
}
