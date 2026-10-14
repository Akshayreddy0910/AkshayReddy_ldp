package payslip;

public class PayslipBuilder {
    private String employeeName;
    private double basic;
    private double hra;
    private double da;
    private double otherAllowances;
    private double deductions;

    public PayslipBuilder setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
        return this;
    }

    public PayslipBuilder setBasic(double basic) {
        this.basic = basic;
        return this;
    }

    public PayslipBuilder setHra(double hra) {
        this.hra = hra;
        return this;
    }

    public PayslipBuilder setDa(double da) {
        this.da = da;
        return this;
    }

    public PayslipBuilder setOtherAllowances(double otherAllowances) {
        this.otherAllowances = otherAllowances;
        return this;
    }

    public PayslipBuilder setDeductions(double deductions) {
        this.deductions = deductions;
        return this;
    }

    public Payslip build() {
        return new Payslip(
                employeeName, basic, hra, da,
                otherAllowances, deductions
        );
    }
}