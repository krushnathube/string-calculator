export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;
    const nums = numbers.split(/,|\n/).map(Number);
    return nums.reduce((sum, num) => sum + num, 0);
  }
}
