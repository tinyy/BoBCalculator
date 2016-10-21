export class RadioScore {
    buildText: string; // Lean toward build
    buyText: string; // Lean tow3ard buy
    scoreChoices: number[]; // Choice of -25, -15, 0, 15, 25
    selectedScore: number
    radioButtonGroupName: string;
}

export var RadioButtonScoreChoices: number[] = [
    -25,
    -15,
    0,
    15, 
    25
];


