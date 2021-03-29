package com.nwtbservices.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

@Entity
// Must sign into the database inorder to connect the table
@Table(name="NWTXIN")
public class NWTXIN {
    @NotEmpty
    @Column(name="NWTXIN_BOOK_CODE")
    private String NWTXIN_BOOK_CODE;
    @NotEmpty
    @Column(name = "NWTXIN_EDITION_YEAR")
    private String  NWTXIN_EDITION_YEAR;
    @NotEmpty
    @Column(name = "NWTXIN_TITLE")
    private String NWTXIN_TITLE;
    @NotEmpty
    @Column(name = "NWTXIN_AUTHOR")
    private String NWTXIN_AUTHOR;
    @NotEmpty
    @Column(name = "NWTXIN_PUBLISHER")
    private String NWTXIN_PUBLISHER;
    @NotEmpty
    @Column(name = "NWTXIN_BOOK_STATUS")
    private String NWTXIN_BOOK_STATUS;
    @NotEmpty
    @Column(name = "NWTXIN_CURRENT_PRICE")
    private float NWTXIN_CURRENT_PRICE;
    @Id
    @NotEmpty
    @Column(name = "NWTXIN_ISBN")
    private String NWTXIN_ISBN;
    @NotEmpty
    @Column(name = "NWTXIN_PURCHASE_DATE")
    private String NWTXIN_PURCHASE_DATE;
    @NotEmpty
    @Column(name = "NWTXIN_FIRST_USED_DATE")
    private String NWTXIN_FIRST_USED_DATE;
    @NotEmpty
    @Column(name = "NWTXIN_DISCONTINUED_DATE")
    private String NWTXIN_DISCONTINUED_DATE;
    @NotEmpty
    @Column(name = "NWTXIN_ACTIVITY_DATE")
    private String NWTXIN_ACTIVITY_DATE;
    @NotEmpty
    @Column(name = "NWTXIN_COURSE_NAME")
    private String NWTXIN_COURSE_NAME;
    @NotEmpty
    @Column(name = "NWTXIN_COURSE1")
    private String NWTXIN_COURSE1;
    @NotEmpty
    @Column(name = "NWTXIN_COURSE2")
    private String NWTXIN_COURSE2;
    @NotEmpty
    @Column(name = "NWTXIN_COURSE3")
    private String NWTXIN_COURSE3;
    @NotEmpty
    @Column(name = "NWTXIN_COURSE4")
    private String NWTXIN_COURSE4;
    @NotEmpty
    @Column(name = "NWTXIN_COURSE5")
    private String NWTXIN_COURSE5;
    @NotEmpty
    @Column(name = "NWTXIN_COMMENT")
    private String NWTXIN_COMMENT;

    public String getNWTXIN_BOOK_CODE() {
        return NWTXIN_BOOK_CODE;
    }

    public void setNWTXIN_BOOK_CODE(String NWTXIN_BOOK_CODE) {
        this.NWTXIN_BOOK_CODE = NWTXIN_BOOK_CODE;
    }

    public String getNWTXIN_EDITION_YEAR() {
        return NWTXIN_EDITION_YEAR;
    }

    public void setNWTXIN_EDITION_YEAR(String NWTXIN_EDITION_YEAR) {
        this.NWTXIN_EDITION_YEAR = NWTXIN_EDITION_YEAR;
    }

    public String getNWTXIN_TITLE() {
        return NWTXIN_TITLE;
    }

    public void setNWTXIN_TITLE(String NWTXIN_TITLE) {
        this.NWTXIN_TITLE = NWTXIN_TITLE;
    }

    public String getNWTXIN_AUTHOR() {
        return NWTXIN_AUTHOR;
    }

    public void setNWTXIN_AUTHOR(String NWTXIN_AUTHOR) {
        this.NWTXIN_AUTHOR = NWTXIN_AUTHOR;
    }

    public String getNWTXIN_PUBLISHER() {
        return NWTXIN_PUBLISHER;
    }

    public void setNWTXIN_PUBLISHER(String NWTXIN_PUBLISHER) {
        this.NWTXIN_PUBLISHER = NWTXIN_PUBLISHER;
    }

    public String getNWTXIN_BOOK_STATUS() {
        return NWTXIN_BOOK_STATUS;
    }

    public void setNWTXIN_BOOK_STATUS(String NWTXIN_BOOK_STATUS) {
        this.NWTXIN_BOOK_STATUS = NWTXIN_BOOK_STATUS;
    }

    public float getNWTXIN_CURRENT_PRICE() {
        return NWTXIN_CURRENT_PRICE;
    }

    public void setNWTXIN_CURRENT_PRICE(float NWTXIN_CURRENT_PRICE) {
        this.NWTXIN_CURRENT_PRICE = NWTXIN_CURRENT_PRICE;
    }

    public String getNWTXIN_ISBN() {
        return NWTXIN_ISBN;
    }

    public void setNWTXIN_ISBN(String NWTXIN_ISBN) {
        this.NWTXIN_ISBN = NWTXIN_ISBN;
    }

    public String getNWTXIN_PURCHASE_DATE() {
        return NWTXIN_PURCHASE_DATE;
    }

    public void setNWTXIN_PURCHASE_DATE(String NWTXIN_PURCHASE_DATE) {
        this.NWTXIN_PURCHASE_DATE = NWTXIN_PURCHASE_DATE;
    }

    public String getNWTXIN_FIRST_USED_DATE() {
        return NWTXIN_FIRST_USED_DATE;
    }

    public void setNWTXIN_FIRST_USED_DATE(String NWTXIN_FIRST_USED_DATE) {
        this.NWTXIN_FIRST_USED_DATE = NWTXIN_FIRST_USED_DATE;
    }

    public String getNWTXIN_DISCONTINUED_DATE() {
        return NWTXIN_DISCONTINUED_DATE;
    }

    public void setNWTXIN_DISCONTINUED_DATE(String NWTXIN_DISCONTINUED_DATE) {
        this.NWTXIN_DISCONTINUED_DATE = NWTXIN_DISCONTINUED_DATE;
    }

    public String getNWTXIN_ACTIVITY_DATE() {
        return NWTXIN_ACTIVITY_DATE;
    }

    public void setNWTXIN_ACTIVITY_DATE(String NWTXIN_ACTIVITY_DATE) {
        this.NWTXIN_ACTIVITY_DATE = NWTXIN_ACTIVITY_DATE;
    }

    public String getNWTXIN_COURSE_NAME() {
        return NWTXIN_COURSE_NAME;
    }

    public void setNWTXIN_COURSE_NAME(String NWTXIN_COURSE_NAME) {
        this.NWTXIN_COURSE_NAME = NWTXIN_COURSE_NAME;
    }

    public String getNWTXIN_COURSE1() {
        return NWTXIN_COURSE1;
    }

    public void setNWTXIN_COURSE1(String NWTXIN_COURSE1) {
        this.NWTXIN_COURSE1 = NWTXIN_COURSE1;
    }

    public String getNWTXIN_COURSE2() {
        return NWTXIN_COURSE2;
    }

    public void setNWTXIN_COURSE2(String NWTXIN_COURSE2) {
        this.NWTXIN_COURSE2 = NWTXIN_COURSE2;
    }

    public String getNWTXIN_COURSE3() {
        return NWTXIN_COURSE3;
    }

    public void setNWTXIN_COURSE3(String NWTXIN_COURSE3) {
        this.NWTXIN_COURSE3 = NWTXIN_COURSE3;
    }

    public String getNWTXIN_COURSE4() {
        return NWTXIN_COURSE4;
    }

    public void setNWTXIN_COURSE4(String NWTXIN_COURSE4) {
        this.NWTXIN_COURSE4 = NWTXIN_COURSE4;
    }

    public String getNWTXIN_COURSE5() {
        return NWTXIN_COURSE5;
    }

    public void setNWTXIN_COURSE5(String NWTXIN_COURSE5) {
        this.NWTXIN_COURSE5 = NWTXIN_COURSE5;
    }

    public String getNWTXIN_COMMENT() {
        return NWTXIN_COMMENT;
    }

    public void setNWTXIN_COMMENT(String NWTXIN_COMMENT) {
        this.NWTXIN_COMMENT = NWTXIN_COMMENT;
    }
}
