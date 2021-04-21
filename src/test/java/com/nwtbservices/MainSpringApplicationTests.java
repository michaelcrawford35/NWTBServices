package com.nwtbservices;

import com.nwtbservices.model.NWTXUSER;
import com.nwtbservices.repository.NWTXUSERRepository;
import com.nwtbservices.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class MainSpringApplicationTests {

	@Test
	void contextLoads() {
	}
	@Autowired
	UserService NWTBUserService;
	@Autowired
	NWTXUSERRepository userRepository;
	@Test
	void createUser(){


		NWTXUSER testUser = new NWTXUSER();
		testUser.setUser("admin");
		NWTBUserService.encodePassword(testUser, "password");
		userRepository.saveAndFlush(testUser);
	}
}
