package com.latelier.catmash.service;

import com.latelier.catmash.entity.User;
import com.latelier.catmash.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;

@Service
@Slf4j
public class UserService  implements UserDetailsService {
    @Autowired
    UserRepository userRepository;

    public User getUser(String username, String password) {
        log.info("Inside getUser of UserService");
        User user = new User(1L, "yahya", "1234", new Date());
        return user;
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(s);
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
                new ArrayList<>());
    }

    public User addUser(User user) {
        log.info("Inside addUser of UserService");
        return userRepository.save(user);
    }
}
