function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var temp = "";
    for(var i = 0; i < katzDeliLine.length; i++) {
      if(i === 0) {
        temp = `The line is currently: 1. ${katzDeliLine[i]}`;
      } else {
        temp = temp + `, ${i+1}. ${katzDeliLine[i]}`;
      }
    }
    return temp;
  }

}
