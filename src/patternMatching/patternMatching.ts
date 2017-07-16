export class PatternMatching {

  constructor() {
  }

  public isMatchRecursive(input: string, regex: string): boolean {
    if (input.length === 0 && regex.length === 0) return true; // empty string matches empty string
    if (regex.length === 0 || input.length === 0) return false; // non empty doesn't match empty
    if (regex[1] && regex[1] === '*'){
      return this.isMatchRecursive(input, regex.substr(2)) ||
        ((regex[0] === input[0] || regex[0] === ".") && this.isMatchRecursive(input.substr(1), regex.substr(2))) ||
        ((regex[0] === input[0] || regex[0] === ".") && this.isMatchRecursive(input.substr(1), regex));
    }
    if (regex[0] !== "." && regex[0] !== "*") {
      return regex[0] === input[0] && this.isMatchRecursive(input.substr(1), regex.substr(1));
    }
    else if (regex[0] === ".") {
      return this.isMatchRecursive(input.substr(1), regex.substr(1));
    }
    else {
      throw "invalid regex";
    }
  }

  public isMatchDP(input: string, regex: string): boolean {
    const dp = new Array<boolean[]>(input.length + 1);
    for(let i = 0; i <= input.length; i++) {
      dp[i] = new Array<boolean>(regex.length + 1);
    }

    dp[0][0] = true; // empty string matches empty string;
    for(let i = 1; i <= input.length; i++) {
      dp[i][0] = false; // input of 1 or more chars doesn't match empty regex
    }

    for(let j=1; j <= regex.length; j++) {
      dp[0][j] = false; // empty input doesn't match regex of 1 char
    }

    for (let r = 1; r <= regex.length; r++) {
      for (let i = 1; i <= input.length; i++) {
        if (regex[r - 1] === "*") {
          dp[i][r] = dp[i][r-2] || 
            ((input[i - 1] === regex[r-2] || regex[r-2] === '.') && dp[i-1][r-2]) ||
            ((input[i - 1] === regex[r-2] || regex[r-2] === '.') && dp[i-1][r]);
        } else {
          dp[i][r] = (input[i - 1] === regex[r - 1] || regex[r - 1] === '.') && (dp[i-1][r-1] || false);
        }
      }
    }

    return dp[input.length][regex.length];
  }
}