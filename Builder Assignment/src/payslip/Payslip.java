package payslip;

public class Payslip {
    private final String employeeName;
    private final double basic;
    private final double hra;
    private final double da;
    private final double otherAllowances;
    private final double deductions;

    public Payslip(String employeeName, double basic, double hra,
                   double da, double otherAllowances, double deductions) {
        this.employeeName = employeeName;
        this.basic = basic;
        this.hra = hra;
        this.da = da;
        this.otherAllowances = otherAllowances;
        this.deductions = deductions;
    }

    public void displayPayslip() {
        double grossSalary = basic + hra + da + otherAllowances;
        double netSalary = grossSalary - deductions;

        System.out.println("Employee: " + employeeName);
        System.out.println("Basic: " + basic);
        System.out.println("HRA: " + hra);
        System.out.println("DA: " + da);
        System.out.println("Other Allowances: " + otherAllowances);
        System.out.println("Gross Salary: " + grossSalary);
        System.out.println("Deductions: " + deductions);
        System.out.println("Net Salary: " + netSalary);
    }
}