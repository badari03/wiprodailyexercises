package com.wipro.order_ms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients(basePackages = "com.wipro.order_ms.client")
@EnableDiscoveryClient
public class OrderMsApplication {
    public static void main(String[] args) {
        SpringApplication.run(OrderMsApplication.class, args);
    }
}