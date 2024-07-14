package com.portfolio.myportfolio.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.portfolio.myportfolio.Entity.User;

@Repository
public interface PortfolioDao  extends JpaRepository<User, Long>{
    
}
