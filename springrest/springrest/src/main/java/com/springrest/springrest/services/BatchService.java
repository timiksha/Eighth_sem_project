package com.springrest.springrest.services;

import java.util.List;

import com.springrest.springrest.entities.Batch;

public interface BatchService {
public List<Batch> getBatches();
	
	public Batch getBatch(Long batchId);
public 	Batch addBatch(Batch batch);



}
