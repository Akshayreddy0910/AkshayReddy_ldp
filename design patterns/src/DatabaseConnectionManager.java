
public class DatabaseConnectionManager {

    private static final DatabaseConnectionManager INSTANCE =
            new DatabaseConnectionManager();

    private DatabaseConnectionManager() {
        System.out.println("Database Connection Manager created");
    }

    public static DatabaseConnectionManager getInstance() {
        return INSTANCE;
    }

    public void connect() {
        System.out.println("Connected to database");
    }
}
