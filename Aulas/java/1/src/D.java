import java.util.Scanner;

public class D {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Qual o seu nome? ");
		String name = scanner.nextLine();
		
		System.out.println("Quantos anos voc� tem? ");
		int age = scanner.nextInt();
		scanner.nextLine(); //Serve pra apagar o \n presente dentro do scanner
		
		System.out.println("Qual a sua comida favorita? ");
		String food = scanner.nextLine();
		
		System.out.println("Seu nome � "+name);
		System.out.println("Voc� tem "+age+" anos de idade");
		System.out.println("Voc� gosta de "+food);
		
		scanner.close();
		
	}

}
