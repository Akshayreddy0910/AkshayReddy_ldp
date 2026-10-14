package payslip;

public class PayslipDemo {
    public static void main(String[] args) {

        Payslip payslip = new PayslipBuilder()
                .setEmployeeName("Akshay Reddy")
                .setBasic(30000)
                .setHra(10000)
                .setDa(5000)
                .setOtherAllowances(3000)
                .setDeductions(2000)
                .build();

        payslip.displayPayslip();
    }
}