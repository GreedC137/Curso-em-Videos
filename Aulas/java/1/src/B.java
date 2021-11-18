
public class B {

	public static void main(String[] args) {
		
		// Variaveis:
		
		/*data type		size		primitive/reference			value
		 * 
		 * boolean 	*	1 bit			primitive			true or false
		 * byte			1 byte			primitive			-128 to 127
		 * short		2 bytes			primitive			-32.768 to 32. 767
		 * int		*	4 bytes			primitive			-2 billion to 2 billion
		 * long			8 bytes			primitive			-9 quintillion to 9 quintillion
		 * float		4 bytes			primitive			fractional number up to 6-7 digits
		 * double	*	8 bytes			primitive			fractional number up to 15 digits
		 * char		*	2 bytes			primitive			single character/letter/ASCII value
		 * String	*	varies			reference			a sequence of characters
		 *		
		 *		* = mais usados
		 */		
		
		int x; // declaration
		x = 123; // assignment
		
		double y = 3.1415; // initialization
		
		boolean z = true;
		
		char symbol = '@';
		
		String name = "Alex";
		
		System.out.println("My name is " + name);
		System.out.println(x);
		System.out.println(y);
		System.out.println(z);
		System.out.println(symbol);
		
	}

}
