public class SList<T> {

    class Link {
        T data;
        Link next;

        Link(T data) {
            this.data = data;
        }
    }

    Link head;

    public SListIterator<T> iterator() {
        return new SListIterator<>(this);
    }

    @Override
    public String toString() {

        String result = "";
        Link current = head;

        while (current != null) {
            result += current.data;

            if (current.next != null) {
                result += " -> ";
            }

            current = current.next;
        }

        return result;
    }
}