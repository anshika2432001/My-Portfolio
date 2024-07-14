package com.portfolio.myportfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private Long id;
    
    private String firstName;

    private String lastName;

    private String phoneNo;

    private String message;
    
}
