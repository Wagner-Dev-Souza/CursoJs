public int getSmallerst(int[] numbers){
    int result = numbers[0];
    for(int i = 0; i < numbers.length; i++){
      for(int j = i + 1; j < numbers.length; j++){
        if (numbers[j] < result) { result = numbers[j]; }
      }
    }
    return result;
  }
  
