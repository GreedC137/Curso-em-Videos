import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Qual o seu nome? ");
		String name = scanner.nextLine();
		
		System.out.println("Quantos anos você tem? ");
		int age = scanner.nextInt();
		scanner.nextLine(); //Serve pra apagar o \n presente dentro do scanner
		
		System.out.println("Qual a sua comida favorita? ");
		String food = scanner.nextLine();
		
		System.out.println("Seu nome é "+name);
		System.out.println("Você tem "+age+" anos de idade");
		System.out.println("Você gosta de "+food);
		
	}

}
