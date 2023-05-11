package com.springrest.springrest.dao;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Component;

import com.springrest.springrest.entities.Album;

public interface AlbumDao extends JpaRepository<Album,Long> {

}
