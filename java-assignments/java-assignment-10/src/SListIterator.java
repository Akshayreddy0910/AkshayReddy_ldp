public class SListIterator<T> {

    private SList<T> list;

    public SListIterator(SList<T> list) {
        this.list = list;
    }

    public void add(T value) {

        SList<T>.Link newLink = list.new Link(value);

        if (list.head == null) {
            list.head = newLink;
            return;
        }

        SList<T>.Link current = list.head;

        while (current.next != null) {
            current = current.next;
        }

        current.next = newLink;
    }

    public void remove(T value) {

        if (list.head == null) {
            return;
        }

        if (list.head.data.equals(value)) {
            list.head = list.head.next;
            return;
        }

        SList<T>.Link current = list.head;

        while (current.next != null) {

            if (current.next.data.equals(value)) {
                current.next = current.next.next;
                return;
            }

            current = current.next;
        }
    }
}