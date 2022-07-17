package com.robeil.backend;


import com.robeil.backend.entity.Contact;
import com.robeil.backend.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {


    private ContactRepository contactRepository;
    @Autowired
    public BackendApplication(ContactRepository contactRepository){
        this.contactRepository = contactRepository;
    }
    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        if(contactRepository.findAll().isEmpty()){
            contactRepository.save(new Contact(1,2066025164,"hi there","robeilaregawi@gmail.com"));
        }
    }
}
