package com.portfolio.myportfolio.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.portfolio.myportfolio.Entity.User;
import com.portfolio.myportfolio.Repository.PortfolioDao;
import com.portfolio.myportfolio.dto.UserDto;

@Component
public class PortfolioService {
    
    @Autowired
    private PortfolioDao portfolioDao;

    public User saveConnectData(UserDto userDto){
        System.out.println(userDto);
        User user = new User();
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setPhoneNo(userDto.getPhoneNo());
        user.setMessage(userDto.getMessage());
        User result = portfolioDao.save(user);
        System.out.println(result);
        return result;
    }
}
