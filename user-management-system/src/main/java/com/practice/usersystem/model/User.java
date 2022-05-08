package com.practice.usersystem.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {
    private long Id;
    private String firstName;
    private String lastName;
    private String emailId;
}
