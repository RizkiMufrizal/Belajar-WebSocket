package com.rizki.mufrizal.belajarWebSocket.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Created by rizki on 10/03/15.
 */

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = {"com.rizki.mufrizal.belajarWebSocket"})
public class WebConfig extends WebMvcConfigurerAdapter{



}
