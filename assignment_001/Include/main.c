#include "calculator.h"
#include<stdio.h>
int main()
{
	int number1,number2;
	char operator;


	printf("\nEnter an operator (+, -, *,): ");
    	scanf("%c", &operator);

	printf("\nEnter The First Number");
	scanf("%d",&number1);


	printf("\nEnter The second Number");
	scanf("%d",&number2);

	

	switch(operator)
	{
		case '+':
			addition(number1,number2);
		break;

		case '-':
			substraction(number1,number2);
		break;

		case '*':
			multiplication(number1,number2);
		break;

		case '/':
			Division(number1,number2);
		break;

		default:
			printf("\noops operater is wrong\n");
		break;


	}

	return 0;
}
