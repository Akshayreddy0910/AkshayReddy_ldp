
package usecases;

public class AppConfig {

    private static final AppConfig INSTANCE = new AppConfig();

    private AppConfig() {
    }

    public static AppConfig getInstance() {
        return INSTANCE;
    }

    public void showConfig() {
        System.out.println("Application configuration loaded");
    }
}
