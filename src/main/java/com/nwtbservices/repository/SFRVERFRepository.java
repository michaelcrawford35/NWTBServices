package com.nwtbservices.repository;

import com.nwtbservices.model.SFRVERF;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SFRVERFRepository extends JpaRepository<SFRVERF, String> {
    @Override
    List<SFRVERF> findAll();
}
