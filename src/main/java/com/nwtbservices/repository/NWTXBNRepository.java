package com.nwtbservices.repository;

import com.nwtbservices.model.NWTXBN;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NWTXBNRepository extends JpaRepository<NWTXBN, String>{
    @Override
    List<NWTXBN> findAll();
}
