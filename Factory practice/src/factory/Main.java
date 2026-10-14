package factory;

public class Main {

    public static void main(String[] args) {

        Notification email =
                NotificationFactory.createNotification("email");

        email.send("Welcome to our application!");

        Notification sms =
                NotificationFactory.createNotification("sms");

        sms.send("Your OTP is 123456");
    }
}