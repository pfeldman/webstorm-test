interface Deps {
  amount: number;
  inCredits?: boolean;
}

export const formatAmount = ({
  amount,
  inCredits = false,
}: Deps) => {
  if (!amount && amount !== 0) {
    return "";
  }

  if (inCredits) {
    return `${amount} CUR`;
  }

  return `$${amount}`
};
