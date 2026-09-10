package threads;

class MyThread extends Thread {

    @Override
    public void run() {

        for (int i = 1; i <= 5; i++) {
            System.out.println("Thread: " + i);

            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println("Thread interrupted");
            }
        }
    }
}

public class ThreadsExample {

    public static void main(String[] args) {

        MyThread thread = new MyThread();

        thread.start();

        for (int i = 1; i <= 5; i++) {
            System.out.println("Main: " + i);
        }
    }
}