function SubtractSum(n){
    let num=n;
       let fruits = [
    "kiwi",      // 1
    "pear",      // 2
    "kiwi",      // 3
    "banana",    // 4
    "melon",     // 5
    "banana",    // 6
    "melon",     // 7
    "pineapple", // 8
    "apple",     // 9
    "pineapple", // 10
    "cucumber",  // 11
    "pineapple", // 12
    "cucumber",  // 13
    "orange",    // 14
    "grape",     // 15
    "orange",    // 16
    "grape",     // 17
    "apple",     // 18
    "grape",     // 19
    "cherry",    // 20
    "pear",      // 21
    "cherry",    // 22
    "pear",      // 23
    "kiwi",      // 24
    "banana",    // 25
    "kiwi",      // 26
    "apple",     // 27
    "melon",     // 28
    "banana",    // 29
    "melon",     // 30
    "pineapple", // 31
    "melon",     // 32
    "pineapple", // 33
    "cucumber",  // 34
    "orange",    // 35
    "apple",     // 36
    "orange",    // 37
    "grape",     // 38
    "orange",    // 39
    "grape",     // 40
    "cherry",    // 41
    "pear",      // 42
    "cherry",    // 43
    "pear",      // 44
    "apple",     // 45
    "pear",      // 46
    "kiwi",      // 47
    "banana",    // 48
    "kiwi",      // 49
    "banana",    // 50
    "melon",     // 51
    "pineapple", // 52
    "melon",     // 53
    "apple",     // 54
    "cucumber",  // 55
    "pineapple", // 56
    "cucumber",  // 57
    "orange",    // 58
    "cucumber",  // 59
    "orange",    // 60
    "grape",     // 61
    "cherry",    // 62
    "apple",     // 63
    "cherry",    // 64
    "pear",      // 65
    "cherry",    // 66
    "pear",      // 67
    "kiwi",      // 68
    "pear",      // 69
    "kiwi",      // 70
    "banana",    // 71
    "apple",     // 72
    "banana",    // 73
    "melon",     // 74
    "pineapple", // 75
    "melon",     // 76
    "pineapple", // 77
    "cucumber",  // 78
    "pineapple", // 79
    "cucumber",  // 80
    "apple",     // 81
    "grape",     // 82
    "orange",    // 83
    "grape",     // 84
    "cherry",    // 85
    "grape",     // 86
    "cherry",    // 87
    "pear",      // 88
    "cherry",    // 89
    "apple",     // 90
    "kiwi",      // 91
    "banana",    // 92
    "kiwi",      // 93
    "banana",    // 94
    "melon",     // 95
    "banana",    // 96
    "melon",     // 97
    "pineapple", // 98
    "apple",     // 99
    "pineapple"  // 100
  ];
    while (num >= 10 && num < 10000){
        let sumOfDigits=num.toString().split('').reduce((sum,value)=>sum+parseInt(value),0);
      num-=sumOfDigits;
  
    }
  
      let indexOfValue=num-1;
        return fruits[indexOfValue];
      
    return summingNumbe;
  }
  