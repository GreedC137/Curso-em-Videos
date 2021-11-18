import java.util.Random;

public class H {

	public static void main(String[] args) {
		
		Random random = new Random();
		
		int x = random.nextInt(6)+1;      // como o computador começa a contar do 0 até o 5, +1 soma e faz do 1 ao 6
		double y = random.nextDouble();   // um valor aleatório entre 0 e 1
		boolean z = random.nextBoolean(); // true or false
	
		System.out.println(x);
		System.out.println(y);
		System.out.println(z);

	}

}
