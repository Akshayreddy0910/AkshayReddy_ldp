package factory;

public class NotificationFactory {

    public static Notification createNotification(String type) {

        if (type == null) {
            throw new IllegalArgumentException(
                    "Notification type cannot be null"
            );
        }

        switch (type.toLowerCase()) {
            case "email":
                return new EmailNotification();

            case "sms":
                return new SMSNotification();

            default:
                throw new IllegalArgumentException(
                        "Unsupported notification type: " + type
                );
        }
    }
}