public class Main {
    public static void main(String[] args) {
        if (args.length < 2) {
            System.err.println("Usage: java Main <a> <b>");
            System.exit(1);
        }
        try {
            double a = Double.parseDouble(args[0]);
            double b = Double.parseDouble(args[1]);
            System.out.println(a * b);
        } catch (NumberFormatException e) {
            System.err.println("Invalid number input");
            System.exit(1);
        }
    }
}
