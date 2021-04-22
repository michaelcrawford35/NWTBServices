package com.nwtbservices.repository;

import com.nwtbservices.model.NWTXIN;
import com.nwtbservices.model.STVTERM;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface NWTXINRepository extends JpaRepository<NWTXIN, String>
{
    @Override
    List<NWTXIN> findAll();
    @Query(value = "Select * from NWTXIN where NWTXIN_BOOK_CODE= :code order by NWTXIN_EDITION_YEAR desc FETCH FIRST 1 ROWS ONLY",nativeQuery = true)
    Optional<NWTXIN> findByBookCode(String code);

    @Query(value = "Select * from NWTXIN where NWTXIN_BOOK_CODE= :code AND NWTXIN_EDITION_YEAR= :year",nativeQuery = true)
    Optional<NWTXIN> findByBookCodeAndYear(String code, String year);
}
