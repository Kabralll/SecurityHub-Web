/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.securityhub;

import java.io.IOException;
import javafx.fxml.FXML;
import javafx.scene.control.*;
/**
 *
 * @author user
 */
public class PrincipalController {
    
     @FXML
    private Label lblBoasVindas;

    public void setNomeUsuario(String nome) {
        lblBoasVindas.setText("Bem-vindo, " + nome + "!");
    }
    
    
}
