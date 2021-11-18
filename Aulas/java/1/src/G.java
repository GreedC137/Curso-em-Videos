
import java.util.Scanner;

public class G {

	public static void main(String[] args) {
	
		/*
		 * Math.
		 * 		max = compara os valores e da o resultado maior
		 * 		min =  //       //       //       //      menor
		 * 		abs = tira o sinal e da apenas numeros  Ex: -10 = 10
		 * 		sqrt = raiz quadrada do numero
		 * 		round = arredondamento para o mais perto
		 * 		ceil = arredondamento para cima
		 * 		floor = arredondamento para baixo
		 */
		
		double x;
		double y;
		double z;
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Enter side X: ");
		x = scanner.nextDouble();
		
		System.out.println("Enter side Y: ");
		y = scanner.nextDouble();
		
		z = Math.sqrt((x*x) + (y*y));
		
		System.out.println("The hypotenuse is: "+z);
		
		scanner.close();
		
	}

}
