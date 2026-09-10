interface Notification {
    void send();
}

class EmailNotification implements Notification {
    public void send() {
        System.out.println("Sending email notification");
    }
}

class NotificationService {
    private Notification notification;

    NotificationService(Notification notification) {
        this.notification = notification;
    }

    void notifyUser() {
        notification.send();
    }
}

public class DIPExample {
    public static void main(String[] args) {
        Notification email = new EmailNotification();

        NotificationService service = new NotificationService(email);
        service.notifyUser();
    }
}