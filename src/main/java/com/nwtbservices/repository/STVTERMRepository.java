package com.nwtbservices.repository;

import com.nwtbservices.model.STVTERM;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface STVTERMRepository extends JpaRepository<STVTERM, String> {
    @Override
    List<STVTERM> findAll();
    @Override
    Optional<STVTERM> findById(String STVTERM);
    Optional<STVTERM> findBySTVTERM_DESC(String STVERM);
}