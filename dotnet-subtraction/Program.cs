using System;

class Program
{
    static int Main(string[] args)
    {
        if (args.Length < 2)
        {
            Console.Error.WriteLine("Usage: dotnet-subtraction <a> <b>");
            return 1;
        }
        if (!double.TryParse(args[0], out var a) || !double.TryParse(args[1], out var b))
        {
            Console.Error.WriteLine("Invalid number input");
            return 1;
        }
        Console.WriteLine(a - b);
        return 0;
    }
}
