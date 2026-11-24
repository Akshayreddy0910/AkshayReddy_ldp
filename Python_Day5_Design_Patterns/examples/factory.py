"""Factory pattern: create objects through one function."""
class EmailNotification:
    def send(self, message):
        print("Email:", message)


class SMSNotification:
    def send(self, message):
        print("SMS:", message)


def notification_factory(notification_type):
    if notification_type == "email":
        return EmailNotification()
    if notification_type == "sms":
        return SMSNotification()
    raise ValueError("Unsupported notification type")


notification = notification_factory("email")
notification.send("Your order has been confirmed.")
