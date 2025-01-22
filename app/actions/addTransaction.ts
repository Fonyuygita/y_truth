"use server";

interface Transaction {
  text: string;
  amount: number;
}

interface TransactionResult {
  data?: Transaction;
  error?: string;
}

export async function addTransaction(
  formData: FormData
): Promise<TransactionResult> {
  const textValue = formData.get("text") as string;
  const amountValue = formData.get("amount");
  // check for input values

  if (!textValue || !amountValue) {
    return { error: "Please provide text and amount" };
  }

  // ensure the text is a string

  const text: string = textValue.toString();
  const amount: number = parseFloat(amountValue.toString());

  const transactionData: Transaction = { text, amount };

  return { data: transactionData };
  // const response = await fetch("/api/addTransaction", {
  //     method: "POST",
  //     body: formData,
  // });

  // const result = await response.json();

  // if (response.ok) {
  //     return { data: result };
  // } else {
  //     return { error: result.message };
  // }
}
