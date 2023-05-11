package com.springrest.springrest.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springrest.springrest.entities.Query;

public interface QueryDao  extends JpaRepository<Query, String>{

}
