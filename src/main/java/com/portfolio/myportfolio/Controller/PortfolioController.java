package com.portfolio.myportfolio.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.myportfolio.Entity.User;
import com.portfolio.myportfolio.Service.PortfolioService;
import com.portfolio.myportfolio.dto.ApiResponse;
import com.portfolio.myportfolio.dto.UserDto;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PortfolioController {

    @Autowired
    private PortfolioService portfolioService;

    @PostMapping("/contactData")
    public ApiResponse<User> saveConnectData(@RequestBody UserDto userDto) {
        System.out.println(userDto);
        User userData = null;
        try {
           userData =  portfolioService.saveConnectData(userDto);
           return new ApiResponse<>( true, "Details Saved Successfully.", userData,HttpStatus.OK.value()); 
        //    return ResponseEntity.of(Optional.of(userData));
        } catch (Exception e) {
            return new ApiResponse<>( false, "Error",HttpStatus.NOT_FOUND); 
            // return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
