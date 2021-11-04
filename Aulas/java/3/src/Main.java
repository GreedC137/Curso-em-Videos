
public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String x = "Water";
		String y = "Chocollate";
		String temp; // Null
		
		temp = x;
		x = y;		// Trocar de lugar sem interferir valores,afinal achocolatado aguado é ruim
		y = temp;
		
		System.out.println("X = " + x);
		System.out.println("Y = " + y);

	}

}
