package com.mycompany.securityhub;

import java.io.IOException;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.control.*;

public class Login {

    @FXML
    private Button Recuperar_Token;
    @FXML
    private Button btnVoltar;
    @FXML
    private TextField txtNome;
    
    @FXML
    private void RecuperarToken() throws IOException {
        App.setRoot("recuperar_token");
        
    }
        
    @FXML    
    private void Voltar() throws IOException {
    App.setRoot("primary");
    
    }
    
    @FXML
    private void continuar()throws IOException{
    App.setRoot("Tela_Principal");
    }
    
    @FXML
    private void registro() throws IOException {
    App.setRoot("Registrar");
    }
    
    @FXML
    private void entrar() throws IOException {
        String nome = txtNome.getText();

        // Cria o carregador e carrega a próxima tela
        FXMLLoader loader = new FXMLLoader(App.class.getResource("Tela_Principal.fxml"));
        Parent root = loader.load();

        // Pega o controlador da nova tela
        PrincipalController controller = loader.getController();
        controller.setNomeUsuario(nome); // envia o nome para a nova tela

        // Troca a cena
        App.getScene().setRoot(root);
        App.getStage().sizeToScene();
    }
    
    
    
    
    
    
}


