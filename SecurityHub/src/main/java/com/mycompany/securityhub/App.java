package com.mycompany.securityhub;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;

/**
 * JavaFX App
 */
public class App extends Application {

    private static Scene scene;
    private static Stage stage; // <- guardamos o stage aqui

    @Override
    public void start(Stage primaryStage) throws IOException {
        stage = primaryStage;
    Parent root = loadFXML("primary");
    scene = new Scene(root); // ✅ sem tamanho fixo
    stage.setScene(scene);
    stage.sizeToScene(); // agora vai funcionar corretamente
    stage.show();
    }

    static void setRoot(String fxml) throws IOException {
        scene.setRoot(loadFXML(fxml));
        stage.sizeToScene(); // redimensiona para o novo conteúdo
    }

    private static Parent loadFXML(String fxml) throws IOException {
        FXMLLoader fxmlLoader = new FXMLLoader(App.class.getResource(fxml + ".fxml"));
        return fxmlLoader.load();
    }
    
    public static Scene getScene() {
    return scene;
}

public static Stage getStage() {
    return stage;
}

    public static void main(String[] args) {
        launch();
    }

}