package com.practice.usersystem.services;

import com.practice.usersystem.model.User;

import java.util.List;

public interface IUserService {
    User saveUser(User user);

    List<User> getUsers();

    User getUserById(Long id);

    boolean deleteUser(Long id);

    User updateUser(Long id, User user);
}
