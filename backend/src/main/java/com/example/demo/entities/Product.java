package com.example.demo.entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "products_tbl")
public class Product {

    @Id
    @SequenceGenerator(allocationSize = 1,
            name = "products_gen_id",
            sequenceName = "products_gen_id")
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "products_gen_id")
    private Integer id;
    private String title;
    private String description;
    private Double price;

    @OneToMany(mappedBy = "product")
    private List<CartItem> cartItems;

}
