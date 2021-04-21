package com.nwtbservices.service;

import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.*;
import com.nwtbservices.model.NWTXUSER;

@Service
public class UserService {
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public boolean checkPassword(NWTXUSER user, String plaintextPassword) {
        return passwordEncoder.matches(plaintextPassword, user.getPassword());
    }

    public void encodePassword(NWTXUSER user, String plaintextPassword) {
        user.setPassword(passwordEncoder.encode(plaintextPassword));
    }
}
