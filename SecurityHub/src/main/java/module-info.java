module com.mycompany.securityhub {
    requires javafx.controls;
    requires javafx.fxml;

    opens com.mycompany.securityhub to javafx.fxml;
    exports com.mycompany.securityhub;
}
