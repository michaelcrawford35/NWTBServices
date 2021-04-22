package com.nwtbservices.controller;
// Importing Repositories

import com.nwtbservices.repository.*;
import com.nwtbservices.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class HomeController {
    // Initialized the repository with Autowired
    @Autowired
    private SGBSTDNRepository SGBSTDNRepository;
    @Autowired
    private SSBSECTRepository SSBSECTRepository;
    @Autowired
    private SSRMEETRepository SSRMEETRepository;
    @Autowired
    private STVTERMRepository STVTERMRepository;
    @Autowired
    private NWTXINRepository NWTXINRepository;
    @Autowired
    private SCBRSERepository SCBCRSERepository;
    @Autowired
    private SFRSTCRRepository SFRSTCRRepository;
    @Autowired
    private SFRVERFRepository SFRVERFRepository;
    @Autowired
    private NWTXARRepository NWTXARRepository;
    @Autowired
    private NWTXBNRepository NWTXBNRepository;
    @Autowired
    private NWTXCMRepository NWTXCMRepository;
    @Autowired
    private NWTXDTRepository NWTXDTRepository;

    //Prints out every record in the SGBSTDN table.
    @GetMapping("/SGBSTDN")
    public List<SGBSTDN> SGBSTDN() {
        return SGBSTDNRepository.findAll();
    }

    //Prints out every record in the SSBSECT table.
    @GetMapping("/SSBSECT")
    public List<SSBSECT> SSBSECT() {
        return SSBSECTRepository.findAll();
    }

    //Prints out every record in the SSRMEET table.
    @GetMapping("/SSRMEET")
    public List<SSRMEET> SSRMEET() {
        return SSRMEETRepository.findAll();
    }

    //Prints out every record in the STVTERM table.
    @GetMapping("/STVTERM")
    public List<STVTERM> STVTerm() {
        return STVTERMRepository.findAll();
    }

    //Prints out every record in the SSRMEET table.
    @GetMapping("/NWTXAR")
    public List<NWTXAR> NWTXAR() {
        return NWTXARRepository.findAll();
    }

    //Prints out every record in the STVTERM table.
    @GetMapping("/NWTXBN")
    public List<NWTXBN> NWTXBN() {
        return NWTXBNRepository.findAll();
    }

    //Returns the information that corresponds to the STVTERM record
    // based on information entered on the index.html page
    @GetMapping ("/STVTERMFORM")
    public Optional<STVTERM> stvtermFormResult(@RequestParam(name = "stvtermName", defaultValue = "") String ID) {
        return STVTERMRepository.findById(ID);
    }

    //Returns the information that corresponds to the SSRMEET record
    // based on information entered on the index.html page
    @GetMapping ("/SSRMEETFORM")
    public SSRMEET ssrmeetFormResult(@RequestParam(name = "ssrmeetCodeName", defaultValue = "") String Code, @RequestParam(name = "ssrmeetCRNName", defaultValue = "") String CRN){
        return SSRMEETRepository.findByCRN(Code, CRN);
    }

    // Returns the NWTXIN entry with the given Book Code and newest Edition Year
    @GetMapping("/nwtxin/{code}")
    ResponseEntity<?> getNWTXIN(@PathVariable String code) {
        Optional<NWTXIN> nwtxin = NWTXINRepository.findByBookCode(code.toUpperCase());
        return nwtxin.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Returns the NWTXIN entry with the given Book Code and given Edition Year
    @GetMapping("/nwtxin/{code}/{year}")
    ResponseEntity<?> getNWTXIN(@PathVariable String code, @PathVariable String year) {
        Optional<NWTXIN> nwtxin = NWTXINRepository.findByBookCodeAndYear(code.toUpperCase(), year);
        return nwtxin.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}


