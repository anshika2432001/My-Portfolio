package com.portfolio.myportfolio.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name="portfolio_db")
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    // @Column(name = "first_name")
    private String firstName;

    // @Column(name = "last_name")
    private String lastName;

    // @Column(name = "phone_no")
    private String phoneNo;
    
    @Column(name = "message")
    private String message;
    
}
